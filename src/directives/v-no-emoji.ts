import { Directive } from "vue";

// Directiva personalizada para bloquear emojis
const noEmoji: Directive = {
  mounted(el: HTMLInputElement) {
    const removeEmojis = (value: string) =>
      value.replace(/[\p{Emoji_Presentation}\p{Extended_Pictographic}]/gu, "");

    const handleInput = (event: Event) => {
      const input = event.target as HTMLInputElement;
      input.value = removeEmojis(input.value);
      input.dispatchEvent(new Event("input")); // Actualiza el modelo de datos
    };

    const handlePaste = (event: ClipboardEvent) => {
      event.preventDefault();
      const clipboardData = event.clipboardData?.getData("text") || "";
      const sanitizedData = removeEmojis(clipboardData);
      const input = event.target as HTMLInputElement;
      input.value = sanitizedData;
      input.dispatchEvent(new Event("input"));
    };

    el.addEventListener("input", handleInput);
    el.addEventListener("paste", handlePaste);

    // Método de limpieza para evitar fugas de memoria
    (el as any)._cleanupNoEmoji = () => {
      el.removeEventListener("input", handleInput);
      el.removeEventListener("paste", handlePaste);
    };
  },
  beforeUnmount(el: HTMLInputElement) {
    if ((el as any)._cleanupNoEmoji) {
      (el as any)._cleanupNoEmoji();
    }
  },
};

export default noEmoji;
