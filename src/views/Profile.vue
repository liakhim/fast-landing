<template>
    <v-container class="grey lighten-5">
        <v-row no-gutters>
            <v-col
                    cols="2"
                    class="d-flex flex-column align-center"
            >
                <v-card
                        class="pa-2"
                        outlined
                        tile
                >
                    <v-avatar
                            color="orange"
                            size="62">
                        <span class="white--text headline">62</span>
                    </v-avatar>
                </v-card>
            </v-col>
            <v-col
                    cols="10"
            >
                <v-card
                        class="pa-2"
                        outlined
                        tile>
                    <input type="text" placeholder="jvn">
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>
<script>
    export default {
        name: 'Profile'
    }
</script>
