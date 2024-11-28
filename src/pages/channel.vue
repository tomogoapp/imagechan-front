<template>
    <div>

      <Dialog
        :modelValue="activeDialog"
        @update:modelValue="$event => (activeDialog = $event)"
        :button="button"
      >
        <v-card
          class="mx-auto my-8 pa-5"
          elevation="16"
          max-width="500"
          width="500"
        >
          <Post
            @showSnackbar="showSnackbar"
            @hideDialog="hideDialog"
          ></Post>
        </v-card>

      </Dialog>


      <h1>Lista de Posts</h1>

      <div v-if="loading">Cargando...</div>
      <div v-else-if="error">Error: {{ error.message }}</div>
      <ul v-else>
        <li v-for="post in posts" :key="post.id">
          <h2>{{ post.title }}</h2>
          <p>{{ post.content }}</p>
          <p>Autor: {{ post.createdBy?.username === undefined ? 'Anonymous' : post.createdBy?.username }}</p>
          <p>Creado en: {{ formatDate(post.created_at) }}</p>
          <!-- Puedes mostrar otros campos según necesites -->
        </li>
      </ul>
    </div>
  </template>
  
<script lang="ts" setup>
  import { computed } from 'vue'
  import { useQuery } from '@vue/apollo-composable'
  import type { Post } from '@/types'
  import GetPosts from '@/graphql/queries/post.graphql'
  //import FormPost from '@/components/forms/post.vue'
  
  interface QueryResult {
    posts: Post[]
  }

  // Ejecuta la consulta y desestructura las propiedades necesarias
  const { result, loading, error } = useQuery<QueryResult>(GetPosts)

  // Computed property para extraer los datos
  const posts = computed(() => result.value?.posts ?? [])

  // Función para formatear fechas
  const formatDate = (dateStr: string) => {
    return new Date(dateStr).toLocaleString();
  }


  const overlay = ref(true)

  const activeDialog = ref(false)

  const button = ref({
    caption:'CREATE POST'
  })

  onBeforeMount(() => {
    overlay.value = true
  })

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

  function hideDialog(){
    activeDialog.value = false
  }


</script>
  
  <style scoped>
  /* Estilos opcionales */
  </style>