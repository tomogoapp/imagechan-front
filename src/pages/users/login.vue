
<script lang="ts" setup>

  import formLogin from '@/components/forms/login.vue'

</script>

<template>
  <div>
    <div
      style="height: 100%; background-color: red;"
      class="d-flex align-center"
    >
      <v-container>


      <v-card 
        title="Card title"
        max-width="344"
        width="344"
        class='pa-4'
      >
        <formLogin />
      </v-card>


      </v-container>
    </div>


  </div>
</template>

<style lang='scss'>

</style>

<route lang="yaml">
  meta:
    layout: users
  route:
    path: '/user/login'
</route>