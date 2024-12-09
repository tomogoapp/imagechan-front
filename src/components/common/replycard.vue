<script lang="ts" setup>

  const imgDefaultWide = ref<number | string >(300)

  const imgFullWide = () => {
    imgDefaultWide.value = imgDefaultWide.value === 300 ? "100%" : 300;
  };
</script>

<template>
  <div>
    <v-card class="ma-2 pa-2" color="grey-darken-3" rounded="0" flat>
      <v-row>
        <v-col cols="8">
          <v-avatar
            rounded="0"
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwGIoh3qXCUEgg-56J4iJlW8iRAXONERkSpg&s"
          ></v-avatar>
          <b> Peasuke</b>
        </v-col>
        <v-col cols="4" class="d-flex justify-end align-center">
          #67689 >>> #67454
        </v-col>
        <v-col cols class="mt-0 pt-0">
          
            <!-- Contenedor flotante para la imagen -->
            <v-img
                src="https://assets.promptbase.com/DALLE_IMAGES%2Fu1Xw9dBsGMbEzcZ853mX8z4hJqk2%2Fresized%2F1713447454654n_w_800x800.webp?alt=media&token=e7e5b10a-f002-4589-98f9-b867f5745c65"
                alt="Imagen ejemplo"
                :max-width="imgDefaultWide"
                class="wrapped-img"
                @click="imgFullWide"
                style= "cursor: pointer;"
            />{{ imgDefaultWide }}
            <!-- Texto que envuelve a la imagen -->
            <p class="text-wrap mx-0 my-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus venenatis turpis
              vitae ex efficitur, quis dapibus mi fermentum. Proin ipsum lectus, lacinia sed ex et,
              blandit sollicitudin odio. Morbi commodo felis in cursus blandit. Nullam mi sem,
              maximus ut mollis non, laoreet egestas nibh. Praesent dignissim, leo in facilisis
              ultrices, enim eros finibus felis, a elementum metus ante sit amet ante. Praesent
              tristique dolor ac urna vehicula, vel feugiat mauris gravida. Integer condimentum
              eget.
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
</style>
