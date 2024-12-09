<script lang="ts" setup>

</script>


<template>
  <div>
    <v-card
        max-width="400"
        rounded="0"
    >
        <v-img
            src="https://c4.wallpaperflare.com/wallpaper/908/34/383/lofi-digital-anthro-hd-wallpaper-preview.jpg"
            cover
            height="100"
        >
            <v-avatar
                color="grey"
                rounded="0"
                size="100"
            >
                <v-img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwGIoh3qXCUEgg-56J4iJlW8iRAXONERkSpg&s" cover></v-img>
                <!-- Botón flotante con un ícono de lápiz -->
            </v-avatar>
            <v-list-item
                class="text-white"
                subtitle="Network Engineer"
                title="Marcus Obrien"
            ></v-list-item>
            <v-btn
                icon
                elevation="0"
                class="position-absolute bottom-0 right-0"
                size="30"
                variant="text"
            >
                <v-icon>mdi-cog</v-icon>
                <v-tooltip
                    activator="parent"
                    location="bottom"
                >Configuration</v-tooltip>
            </v-btn>
        </v-img>
    </v-card>
  </div>
</template>

<style>

</style>