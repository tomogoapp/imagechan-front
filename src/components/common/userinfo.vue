<script lang="ts" setup>
    const overlay = ref(true)

    onBeforeMount(() => {
        overlay.value = true
    })

</script>

<template>
  <div>
    <v-card
        class="mx-auto"
        subtitle="A lvl 45 wizard "
        width="400"
        rounded="0"
    >
        <template v-slot:title>
        <span class="font-weight-black">Chris Ruiz</span>
        <span class="font-weight-black text-light-green-darken-4"> ⬢ R00T</span>
        </template>
    </v-card>
  </div>
</template>

<style>

</style>