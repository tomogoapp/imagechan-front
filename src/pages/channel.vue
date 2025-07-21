<template>
    <div>
      <v-container class="d-flex justify-center">
        <div>


          <div v-if="loading">Cargando...</div>
          <div v-else-if="error">Error: {{ error.message }}</div>

          <div class="d-flex">

            <!-- <div class="mr-3 sticky-div align-start">
              <Usercard></Usercard>
              <Userinfo class="mb-3"/>
              <Listgrid />
            </div> -->

            <div class="flex-grow-1">
              <Postcard
                v-for="post in threadStore.threads" :key="post.id"
                :title='post.post.title'
                :content='post.post.content'
                :image='post.post.image'
                :number-post="post.post.numberPost"
                :replies="post.reply"
                :created-by="post.post.createdBy"
                :created_at="formatDate(post.created_at)"
                class=" mb-4"
              />
            </div>

            <div class="ml-3 sticky-div">
              <!-- <div>
                <Usercard></Usercard>
                <Userinfo class="mb-3"/>
              </div> -->
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
  import {useThreadStore} from '@/stores/thread'
  //import Usercard from '@/components/common/usercard.vue';
  //import FormPost from '@/components/forms/post.vue'

  const threadStore = useThreadStore()

  interface QueryResult {
    posts: Post[]
  }

  onMounted(() => {
    threadStore.findAllThreads();
  });

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
      top: 56px; /* Espacio desde la parte superior */
      align-self: start; /* Alinea el sticky correctamente en flexbox */
    }
  </style>

<route lang='yaml'>
  meta:
    layout: post
</route>