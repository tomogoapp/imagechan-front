<script lang="ts" setup>
  const items = [{
    title: "Click Me"
  }, {
    title: "Click Me"
  }, {
    title: "Click Me"
  }, {
    title: "Click Me 2"
  }]
</script>

<template>
  <div>
    <v-app-bar :elevation="0" color="transparent" app class="pr-4">

      <v-app-bar-title></v-app-bar-title>

      <template v-slot:append>

        <router-link to='/users/register'>
          <v-btn>FAQ</v-btn>
        </router-link>

        <v-menu transition="slide-y-transition" location='bottom'>
          <template v-slot:activator="{ props }">
            <v-btn color="primary" v-bind="props">
              Channels
            </v-btn>
          </template>
          <app-menu-popup />
        </v-menu>

      </template>

    </v-app-bar>
  </div>
</template>

<style></style>