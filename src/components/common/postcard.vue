<script lang="ts" setup>

    import { Post } from '@/types'
    import { number } from 'zod';
    const props = defineProps<Post>()
    const show = ref(false)

    const x = props.content ?? ""

    const formattedContent = computed(() => {
        return x
        .split("\n")
        .map(line => line.startsWith(">") ? `<span class="greentext">${line}</span>` : line)
        .join("<br>");
    });

</script>

<template>
  <div>
    <v-card
        max-width="625"
        rounded="0"
        flat
    >
        <v-card-title>
            <v-row>
                <v-col
                    cols = '9'
                >
                    {{ title }} 
                </v-col>
                <v-col
                    cols = '3'
                    class="d-flex justify-end"
                >
                    #{{ numberPost }}
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
                    <v-avatar class="mr-2" v-if="createdBy?.username !== undefined" rounded="0" image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwGIoh3qXCUEgg-56J4iJlW8iRAXONERkSpg&s"></v-avatar>
                    <v-avatar class="mr-2" v-else rounded="0" color="red"><span class="text-h5">A</span></v-avatar> 
                    <b>{{ createdBy?.username === undefined ? 'Anonymous' : createdBy?.username }}</b> <!--span style="color:green;"> ● Admin</span --></p>
            </v-col>
            <v-col
                cols="6 d-flex justify-end align-center"
            >
                {{ created_at }}
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
            <v-btn >
                Reply
            </v-btn>
            <v-btn icon="mdi-dots-vertical" rounded="0"/>
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