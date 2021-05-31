<template>
    <v-app>
        <v-main>
            <v-toolbar>
                <v-tabs
                        dark
                        background-color="primary"
                        grow
                >
                    <v-tab>
                        <v-badge
                                color="pink"
                                content="9"
                        >
                            Constructor
                        </v-badge>
                    </v-tab>

                    <v-tab>
                        <v-badge
                                color="deep-purple accent-4"
                                icon="mdi-vuetify"
                                content="9"
                        >
                            Preview
                        </v-badge>
                    </v-tab>
                </v-tabs>
            </v-toolbar>
            <router-view></router-view>
        </v-main>
    </v-app>
</template>

<script>
export default {
    name: 'CreateProjects',
    components: {}
}
</script>
