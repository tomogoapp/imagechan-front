<script>
    export default {
        data: () => ({
            fav: true,
            menu: false,
            message: false,
            hints: true,
        }),
    }
</script>

<template>
    <div>
        <v-card min-width="300">
            <v-list>
                <v-list-item prepend-avatar="https://cdn.vuetifyjs.com/images/john.jpg" subtitle="Founder of Vuetify"
                    title="John Leider">
                    <template v-slot:append>
                        <v-btn :class="fav ? 'text-red' : ''" icon="mdi-heart" variant="text"
                            @click="fav = !fav"></v-btn>
                    </template>
                </v-list-item>
            </v-list>

            <v-divider></v-divider>

            <v-list>
                <v-list-item>
                    <v-switch v-model="message" color="purple" label="Enable messages" hide-details></v-switch>
                </v-list-item>

                <v-list-item>
                    <v-switch v-model="hints" color="purple" label="Enable hints" hide-details></v-switch>
                </v-list-item>
            </v-list>

            <v-card-actions>
                <v-spacer></v-spacer>

                <v-btn variant="text" @click="menu = false">
                    Cancel
                </v-btn>
                <v-btn color="primary" variant="text" @click="menu = false">
                    Save
                </v-btn>
            </v-card-actions>
        </v-card>
    </div>
</template>

<style></style>