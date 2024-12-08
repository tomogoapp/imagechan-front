<script setup lang="ts">
  import { ImageInput } from '@/types';
import { ref } from 'vue';

  const image = ref<File | null>(null);
  const imageUrl = ref<string | null>('');

  const props = defineProps<ImageInput>()
  const emit = defineEmits(['update:modelValue']);

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
    emit('update:modelValue', image.value); // Emite el archivo al padre
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
    <!-- Imagen con scroll virtual -->
    <div 
      class="image-container"
      @click="triggerFileInput"
    >
      <img
        v-if="imageUrl"
        :src="imageUrl"
        alt="Image preview"
      />
      <div v-else class="placeholder">
        Click to add an image
      </div>
    </div>

    <!-- Input de archivo oculto -->
    <input
      :name="props.name"
      type="file"
      ref="fileInput"
      @change="onFileChange"
      class="d-none"
    />
  </div>
</template>

<style scoped>
.image-container {
  width: 100%; /* Ajusta el ancho según sea necesario */
  height: 300px; /* Altura fija para la imagen desplazable */
  overflow: auto; /* Habilita el desplazamiento solo dentro del contenedor */
  position: relative; /* Asegura que el contenedor esté posicionado correctamente */
  border: 1px solid #ccc; /* Opcional: para visualizar el contenedor */
  cursor: pointer; /* Para dar una pista visual al usuario */
}

.image-container img {
  width: 100%; /* Escala la imagen al ancho del contenedor */
  height: auto; /* Mantiene las proporciones */
}

.placeholder {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  color: #888;
  font-size: 16px;
  text-align: center;
  background-color: #f5f5f5;
  border: 1px dashed #aaa;
}
</style>