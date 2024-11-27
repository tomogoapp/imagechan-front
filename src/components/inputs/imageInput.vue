
<script setup lang="ts">
  import { ref } from 'vue';

  const image = ref<File | null>(null);
  const imageUrl = ref<string | null>('');

  const fileInput = ref<HTMLInputElement | null>(null);

  function createImage(file: File) {
    const reader = new FileReader();

    reader.onload = (e) => {
      if (e.target) {
        imageUrl.value = e.target.result as string;
      }
    };

    reader.readAsDataURL(file);
  }

  function onFileChange(event: Event) {
    const target = event.target as HTMLInputElement;
    if (!target.files || target.files.length === 0) {
      return;
    }

    image.value = target.files[0];
    createImage(image.value);
  }

  function triggerFileInput() {
    if (fileInput.value) {
      fileInput.value.click();
    }
  }
</script>

<template>
  <div>
    <!-- Imagen clicable -->

    <v-img
      max-height='400'
      cover
      :src='imageUrl || "https://via.placeholder.com/150"'
      @click='triggerFileInput'
      alt='Image preview'
    ></v-img>

    <!-- Input de archivo oculto -->
    <input
      type="file"
      ref="fileInput"
      @change="onFileChange"
      class="d-none"
    />
  </div>
</template>
