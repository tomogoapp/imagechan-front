<template>
  <div>

    <v-navigation-drawer
      permanent
      :width="250"
      >
      <!-- <template v-slot:prepend>
        <usercard />
        <userinfo />
        <v-divider></v-divider>
      </template> -->

      <h3> Channels </h3>
      <v-list color="transparent">
        <v-list-item title="/a/ - Anime"></v-list-item>
        <v-list-item title="/rtro/ - Anime Retro"></v-list-item>
        <v-list-item title="/mg/ - Manga"></v-list-item>
        <v-list-item title="/con/ - Comics"></v-list-item>
        <v-list-item title="/crtn/ - Cartoos"></v-list-item>
        <v-list-item title="/ksm/ - Random"></v-list-item>
        <v-list-item title="/duck/ - Programming"></v-list-item>
      </v-list>

    </v-navigation-drawer>


    <v-app-bar 
        :elevation="0" 
        fixed 
        height="40"
        class="px-10"
    >
       
        <v-app-bar-title>/a/ - Anime</v-app-bar-title>

   
    </v-app-bar>
  </div>
</template>

<script lang="ts" setup>

</script>

<style>

</style>