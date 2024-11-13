<template>
  <div>
    <v-app-bar 
      :elevation="0"
      color="transparent"
      app
    >

      <v-app-bar-title>Application Bar</v-app-bar-title>

      <template v-slot:append>
        <router-link to='/users/login'>
          <v-btn>Log In</v-btn>
        </router-link>
        <router-link to='/users/register'>
          <v-btn>Sign In</v-btn>
        </router-link>
      </template>
    </v-app-bar>
  </div>
</template>

<script lang="ts" setup>

</script>

<style>

</style>