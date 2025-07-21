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
      <h3 class="px-4"> Channels </h3>
      <div class="my-drawer-content" tabindex="0">
        <v-list color="transparent">
          <v-list-item 
            class="py-1" 
            title="Anime"
          >
            <template v-slot:prepend>
              <v-chip
                :color="`green-lighten-1`"
                class="ms-0 me-2"
                size="small"
                label
                rounded="0"
              >
                /a/
              </v-chip>
            </template>
          </v-list-item>
          <v-list-item 
            class="py-1" 
            title="Anime Retro"
          >
            <template v-slot:prepend>
              <v-chip
                :color="`green-lighten-1`"
                class="ms-0 me-2"
                size="small"
                label
                rounded="0"
              >
                /rtro/
              </v-chip>
            </template>
          </v-list-item>
          <v-list-item 
            class="py-1" 
            title="Programming"
            v-for = "n in 19"
            :key="n"
          >
            <template v-slot:prepend>
              <v-chip
                :color="`green-lighten-1`"
                class="ms-0 me-2"
                size="small"
                label
                rounded="0"
              >
                /duck/
              </v-chip>
            </template>
          </v-list-item>
        </v-list>
      </div>

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
  /* 1. Oculta la barra de scroll en todos los navegadores */
  .my-drawer-content {
    overflow-y: auto;
    scrollbar-width: none; /* Firefox */
    -ms-overflow-style: none;  /* IE 10+ */
  }

  /* 2. Oculta la scrollbar en Chrome/Safari/Edge */
  .my-drawer-content::-webkit-scrollbar {
    display: none;
  }

  /* 3. Cuando el elemento tiene focus, muestra el scrollbar */
  .my-drawer-content:focus,
  .my-drawer-content:focus-visible {
    scrollbar-width: thin; /* Firefox */
  }

  /* Para navegadores Webkit */
  .my-drawer-content:focus::-webkit-scrollbar,
  .my-drawer-content:focus-visible::-webkit-scrollbar {
    display: block;
    width: 8px;
  }

</style>