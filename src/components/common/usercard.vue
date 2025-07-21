<script lang="ts" setup>
//src="https://static.zerochan.net/Lum.1024.3811583.webp"
</script>


<template>
  <div>
    <v-card
        width="400"
        rounded="0"
    >
        <v-img
            src="https://assets.promptbase.com/DALLE_IMAGES%2Fu1Xw9dBsGMbEzcZ853mX8z4hJqk2%2Fresized%2F1713447454654n_w_800x800.webp?alt=media&token=e7e5b10a-f002-4589-98f9-b867f5745c65 https://fastly.picsum.photos/id/40/500/300.jpg?hmac=uBM7mpMBhH4DKROQtJLVAeuX-V9LldirxJ-m3uju5H8"
            cover
            height="100"
            aspect-ratio="16/9"
        >
            <v-avatar
                color="grey"
                rounded="0"
                size="100"
            >
                <v-img src="https://pbs.twimg.com/profile_images/1901761773906096128/-ndFHn_b_400x400.jpg" cover></v-img>
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