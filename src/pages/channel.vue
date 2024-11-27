<template>
    <div>
      <v-card
        class="mx-auto my-8 pa-5"
        elevation="16"
        max-width="500"
      >
        <Post />
      </v-card>
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
  
<script lang="ts">
  import { defineComponent, computed } from 'vue'
  import { useQuery } from '@vue/apollo-composable'
  import type { Post } from '@/types'
  import GetPosts from '@/graphql/queries/post.graphql'
  //import FormPost from '@/components/forms/post.vue'
  
  interface QueryResult {
    posts: Post[];
  }
  
  export default defineComponent({
    name: 'TestGraphQL',
    setup() {
      // Ejecuta la consulta y desestructura las propiedades necesarias
      const { result, loading, error } = useQuery<QueryResult>(GetPosts);
  
      // Computed property para extraer los datos
      const posts = computed(() => result.value?.posts ?? []);
  
      // Función para formatear fechas
      const formatDate = (dateStr: string) => {
        return new Date(dateStr).toLocaleString();
      };
  
      return {
        posts,
        loading,
        error,
        formatDate,
      };
    },
  });
</script>
  
  <style scoped>
  /* Estilos opcionales */
  </style>