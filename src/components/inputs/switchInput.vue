<script setup lang="ts">
const props = defineProps<{
  modelValue: boolean; // Valor del switch
  name: string; // Nombre del campo
  label?: string; // Etiqueta opcional
}>();

const emit = defineEmits(["update:modelValue"]);

function updateValue(value: boolean) {
  emit("update:modelValue", value); // Emitir el evento al cambiar el valor
}
</script>

<template>
  <div class="flex">
    <v-switch
      :model-value="props.modelValue"
      :name="props.name"
      :label="props.label || ''"
      @update:modelValue="emit('update:modelValue', $event)"
      color="primary"
    ></v-switch>

  </div>
</template>

<style scoped></style>