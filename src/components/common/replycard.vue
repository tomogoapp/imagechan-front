<script lang="ts" setup>
import { Replies } from '@/types';


  const { id,numberPost,content,created_at } = defineProps<Replies>()

  const imgDefaultWide = ref<number | string >(300)

  const imgFullWide = () => {
    imgDefaultWide.value = imgDefaultWide.value === 300 ? "100%" : 300;
  }

  const x = content ?? ""
  const formattedContent = computed(() => {
    return x
    .split("\n")
    .map(line => line.startsWith(">") ? `<span class="greentext">${line}</span>` : line)
    .join("<br>")
  })

</script>

<template>
  <div>
    <v-card class="ma-2 pa-2" color="grey-darken-3" rounded="0" flat :id="numberPost">
      <v-row>
        <v-col cols="8">
          <v-avatar
            rounded="0"
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwGIoh3qXCUEgg-56J4iJlW8iRAXONERkSpg&s"
          ></v-avatar>
          <b> Peasuke</b>
        </v-col>
        <v-col cols="4" class="d-flex justify-end align-center">
          #{{ numberPost }}
        </v-col>
        <v-col cols class="mt-0 pt-0">
          <p class="text-wrap mx-0 my-2" style="font-size: 0.9rem;">
            <!-- Contenedor flotante para la imagen -->
            <!-- <v-img
                src="https://assets.promptbase.com/DALLE_IMAGES%2Fu1Xw9dBsGMbEzcZ853mX8z4hJqk2%2Fresized%2F1713447454654n_w_800x800.webp?alt=media&token=e7e5b10a-f002-4589-98f9-b867f5745c65"
                alt="Imagen ejemplo"
                :max-width="imgDefaultWide"
                class="wrapped-img"
                @click="imgFullWide"
                style= "cursor: pointer;"
            /> -->
            <img 
              src="https://assets.promptbase.com/DALLE_IMAGES%2Fu1Xw9dBsGMbEzcZ853mX8z4hJqk2%2Fresized%2F1713447454654n_w_800x800.webp?alt=media&token=e7e5b10a-f002-4589-98f9-b867f5745c65"
              alt="Imagen ejemplo"
              class="image-wrapped"
            />
            <!-- Texto que envuelve a la imagen -->
              {{ formattedContent }}
            </p>
          
        </v-col>
        <v-col cols="4" class="d-flex justify-end offset-8">
          <v-btn color="error" elevation="0" class="mx-1" rounded="0"> Report </v-btn>
          <v-btn elevation="0" rounded="0"> Reply </v-btn>
        </v-col>
      </v-row>
    </v-card>
  </div>
</template>

<style>
.content-wrap {
  position: relative;
}

.image-wrapped {
  float: left; /* Hace que el contenedor flote a la izquierda */
  margin-right: 16px; /* Espacio entre la imagen y el texto */
  max-width: 200px; /* Limita el tamaño máximo del contenedor */
}

.image-container {
  display: block;
  width: 100%; /* Asegura que la imagen ocupe todo el contenedor */
}

.wrapped-img {
  display: block;
  width: 100%; /* Ajusta la imagen al contenedor */
  height: auto; /* Mantiene la proporción de la imagen */
}

.text-wrap {
  overflow: hidden; /* Evita que el texto se solape */
}

::v-deep(.greentext) {
  color: #78c850;
}

</style>
