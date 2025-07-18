<script lang="ts" setup>

    import { Post } from '@/types'
    const props = defineProps<Post>()
    const show = ref(false)

    const x = props.content ?? ""

    const formattedContent = computed(() => {
        return x
        .split("\n")
        .map(line => line.startsWith(">") ? `<span class="greentext">${line}</span>` : line)
        .join("<br>");
    })


    const overlay = ref(true)
    const activeDialog = ref(false)
    const button = ref({
        caption:'Reply'
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
        max-width="590"
        max-w-xs max-w-sm-md max-w-md-lg max-w-lg-xl
        rounded="0"
        flat
        :id="numberPost"
    >
        <v-card-title>
            <v-row>
                <v-col
                    cols = '10'
                >
                    {{ title }} 
                </v-col>
                <v-col
                    cols = '2'
                    class="d-flex justify-end"
                >
                    <v-btn 
                        icon="mdi-dots-vertical" 
                        rounded="0" 
                        variant="text" 
                        size="x-small"
                    />
                </v-col>
            </v-row>
        </v-card-title>
        <v-img
            :src='`http://127.0.0.1:9050/${image}`'
            cover
            :alt='`${image}`'
        >
                <!-- <template v-slot:placeholder>
                    <v-row
                        class="fill-height ma-0"
                        align="center"
                        justify="center"
                    >
                        <v-progress-circular
                            indeterminate
                            color="grey lighten-5"
                        ></v-progress-circular>
                    </v-row>
                </template> -->
        </v-img>
        <v-row class="mx-1 my-0">
            <v-col
                cols="6 d-flex justify-start align-center"
            >
                <p>
                    <v-avatar class="mr-2" v-if="createdBy?.username !== undefined" rounded="0" image="https://fastly.picsum.photos/id/40/500/300.jpg?hmac=uBM7mpMBhH4DKROQtJLVAeuX-V9LldirxJ-m3uju5H8"></v-avatar>
                    <v-avatar class="mr-2" v-else rounded="0" color="red"><span class="text-h5">A</span></v-avatar> 
                </p> 
                <p>
                    <span><b>{{ createdBy?.username === undefined ? 'Anonymous' : 'Chris Ruiz' }}</b> <!--span style="color:green;"> ● Admin</span --></span>
                    <br/>
                    <span>
                        <v-chip 
                            variant="text"
                            class="pa-0"
                            size="small"
                            rounded="0"
                        >
                            {{ created_at }}
                        </v-chip>
                    </span>
                </p>
            </v-col>
            <v-col
                cols="6 d-flex justify-end align-center"
            >
                <v-chip 
                    color="green"
                    label
                >
                    #{{ numberPost }}
                </v-chip>
            </v-col>
        </v-row>
    

        <v-card-text v-html="formattedContent" />

        <v-divider></v-divider>
        <v-card-actions class="d-flex justify-end">
            <v-btn 
                color="error"
            >
                Report
            </v-btn>

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
              <Reply
                @showSnackbar="showSnackbar"
                @hideDialog="hideDialog"
              ></Reply>
            </v-card>
          </Dialog>

        </v-card-actions>

        <Replycard
            v-for="reply in replies" :key="reply.id"
            :id="reply.id"
            :content='reply.content'
            :number-post="reply.numberPost"
            :created_at="reply.created_at"
        />

        <!-- <Replycard/>
        <Replycard />
        <Replycard /> -->
        
    </v-card>
  </div>
</template>

<style scoped>
    ::v-deep(.greentext) {
    color: #78c850;
    }
</style>