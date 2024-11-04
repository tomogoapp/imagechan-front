<template>
  <v-layout>
    <v-app-bar 
      :elevation="0" 
      absolute
      color='transparent'
    >
      <template v-slot:prepend>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
      </template>

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
    <v-main
      class='d-flex'
    >
      <router-view />
    </v-main>
    <AppFooter/>
  </v-layout>
</template>

  <script lang="ts" setup>
import AppFooter from '@/components/AppFooter.vue';

    //
  </script>
  <style>

  </style>
  