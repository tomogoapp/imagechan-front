<script lang="ts" setup>

  import formRegister from '@/components/forms/register.vue'

</script>
<route lang="yaml">
  meta:
    layout: users
  route:
    path: '/user/register'
</route>
<template>
  <div>
    <v-card 
      title="Card title"
      max-width="344"
    >
      <formRegister />
    </v-card>
  </div>
</template>

<style>

</style>