<template>
    <div>
      <v-container class="d-flex justify-center">
        <div>


          <div v-if="loading">Cargando...</div>
          <div v-else-if="error">Error: {{ error.message }}</div>
          <div class="d-flex">
            <div>
              <Postcard 
                v-for="post in posts" :key="post.id"
                :title='post.title'
                :content='post.content'
                :image='post.image'
                :created-by="post.createdBy"
                :created_at="formatDate(post.created_at)"
                class=" mb-4"
              />
            </div>
            <div class="ml-3 sticky-div">
              <Usercard class="mb-3"></Usercard>
              <Rulescard ></Rulescard>
            </div>
          </div>
        </div>
      </v-container>
    </div>
  </template>
  
<script lang="ts" setup>
  import { computed } from 'vue'
  import { useQuery } from '@vue/apollo-composable'
  import type { Post } from '@/types'
  import GetPosts from '@/graphql/queries/post.graphql'
import Usercard from '@/components/common/usercard.vue';
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

</script>
  
  <style scoped>
    .sticky-div {
      position: sticky;
      top: 12px; /* Espacio desde la parte superior */
      align-self: start; /* Alinea el sticky correctamente en flexbox */
    }
  </style>