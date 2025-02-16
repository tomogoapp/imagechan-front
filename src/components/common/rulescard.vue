<script lang="ts" setup>
    const overlay = ref(true)

    const activeDialog = ref(false)

    const button = ref({
        caption:'CREATE POST'
    })

    onBeforeMount(() => {
        overlay.value = true
    })

    function hideDialog(){
        activeDialog.value = false
    }

    const snackbarMessage = ref('')
    const snackbarColor = ref('success')
    const isSnackbarActive = ref(false)

    const showSnackbar = ({message,color} : {message: string, color:string}) => {
        snackbarMessage.value = message
        snackbarColor.value = color
        isSnackbarActive.value = true
        setTimeout(() => {
            isSnackbarActive.value = false
        }, 2000)
    }

</script>

<template>
  <div>
    <v-card
        class="mx-auto"
        subtitle="The imageboard for animes and mangas"
        width="400"
        rounded="0"
    >
        <template v-slot:title>
        <span class="font-weight-black">/a/ - Anime</span>
        </template>

        <v-card-text class="bg-surface-light py-5 px-10">
        
            <h3>Please read the rules carefully:</h3>
            <ul>
                <li>Explicit material is prohibited.</li>
                <li>Illegal material is prohibited.</li>
                <li>Sharing personal information (Doxxing) is prohibited.</li>
                <li>Posting URLs or masking them is prohibited; only affiliated sites and authorized forums are allowed to do so.</li>
            </ul>

        </v-card-text>
        <v-divider></v-divider>
        <!--v-card-actions -->
            <!--v-btn color="primary" block tonal rounded="0" to="/access/login">
            Get access
            </v-btn -->


            <Dialog
            :modelValue="activeDialog"
            @update:modelValue="$event => (activeDialog = $event)"
            :button="button"
            v-auth:hide
          >
            <v-card
              class="mx-auto my-8 pa-5"
              elevation="16"
              max-width="500"
              width="500"
            >
              <Post
                @showSnackbar="showSnackbar"
                @hideDialog="hideDialog"
              ></Post>
            </v-card>

          </Dialog>
        <!--/v-card-actions -->
    </v-card>
  </div>
</template>

<style>

</style>