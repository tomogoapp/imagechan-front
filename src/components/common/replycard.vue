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

  const overlay = ref(true)
  const activeDialog = ref(false)
  const button = ref({
      caption:'Reply'
  })
  onBeforeMount(() => {
      overlay.value = true
  })
  function hideDialog(){
      activeDialog.value = false
  }
  const snackbarMessage = ref('')
  const snackbarColor = ref('success')
  const isSnackbarActive = ref(false)
  const showSnackbar = ({message,color} : {message: string, color:string}) => {
      snackbarMessage.value = message
      snackbarColor.value = color
      isSnackbarActive.value = true
      setTimeout(() => {
          isSnackbarActive.value = false
      }, 2000)
  }

</script>

<template>
  <div>
    <v-card class="ma-2 pa-2" color="grey-darken-3" rounded="0" flat :id="numberPost">
      <v-row>
        <v-col 
          cols="6"
          class='d-flex align-center justify-start'
        >

          <p>
            <v-avatar class="mr-2" v-if="createdBy?.username !== undefined" rounded="0" image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwGIoh3qXCUEgg-56J4iJlW8iRAXONERkSpg&s"></v-avatar>
            <v-avatar class="mr-2" v-else rounded="0" color="red"><span class="text-h5">A</span></v-avatar> 
          </p> 
          <p>
            <span><b>{{ createdBy?.username === undefined ? 'Anonymous' : createdBy?.username }}</b> <!--span style="color:green;"> ● Admin</span --></span>
            <br/>
            <span>
              <v-chip 
                variant="text"
                class="pa-0"
                size="small"
                rounded="0"
              >
                {{ created_at }}
              </v-chip>
            </span>
          </p>

        </v-col>
        <v-col 
          cols="6" 
          class="d-flex justify-end align-center"
        >
          <v-chip 
            color="green"
            label
          >
            #{{ numberPost }}
          </v-chip>
        </v-col>
        <v-col cols class="mt-0 pt-0">

          <p class="text-wrap mx-0 my-2" style="font-size: 0.9rem;">
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


          <Dialog
            :modelValue="activeDialog"
            @update:modelValue="$event => (activeDialog = $event)"
            :button="button"
            v-auth:hide
          >
            <v-card
              class="mx-auto my-8 pa-5"
              elevation="16"
              max-width="500"
              width="500"
            >
              <Reply
                @showSnackbar="showSnackbar"
                @hideDialog="hideDialog"
              ></Reply>
            </v-card>
          </Dialog>

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
