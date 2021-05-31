<template>
    <v-card
            class="mx-auto"
            width="256"
            tile
    >
        <v-navigation-drawer permanent>
            <v-list>
                <v-list-item>
                    <v-list-item-avatar>
                        <v-img src="https://cdn.vuetifyjs.com/images/john.png"></v-img>
                    </v-list-item-avatar>
                </v-list-item>

                <v-list-item link>
                    <v-list-item-content>
                        <v-list-item-title class="title">
                            John Leider
                        </v-list-item-title>
                        <v-list-item-subtitle>john@vuetifyjs.com</v-list-item-subtitle>
                    </v-list-item-content>
                    <v-menu
                            v-model="menu"
                            :close-on-content-click="false"
                            :nudge-width="200"
                            offset-x
                    >
                        <template v-slot:activator="{ on, attrs }">
                            <v-icon
                                    light
                                    v-bind="attrs"
                                    v-on="on"
                            >
                                mdi-menu-down
                            </v-icon>
                        </template>

                        <v-card>
                            <v-list>
                                <v-list-item>
                                    <v-list-item-avatar>
                                        <img
                                                src="https://cdn.vuetifyjs.com/images/john.jpg"
                                                alt="John"
                                        >
                                    </v-list-item-avatar>

                                    <v-list-item-content>
                                        <v-list-item-title>John Leider</v-list-item-title>
                                        <v-list-item-subtitle>Founder of Vuetify</v-list-item-subtitle>
                                    </v-list-item-content>

                                    <v-list-item-action>
                                        <v-btn
                                                :class="fav ? 'red--text' : ''"
                                                icon
                                                @click="fav = !fav"
                                        >
                                            <v-icon>mdi-heart</v-icon>
                                        </v-btn>
                                    </v-list-item-action>
                                </v-list-item>
                            </v-list>

                            <v-divider></v-divider>

                            <v-list>
                                <v-list-item>
                                    <v-list-item-action>
                                        <v-switch
                                                v-model="message"
                                                color="purple"
                                        ></v-switch>
                                    </v-list-item-action>
                                    <v-list-item-title>Enable messages</v-list-item-title>
                                </v-list-item>

                                <v-list-item>
                                    <v-list-item-action>
                                        <v-switch
                                                v-model="hints"
                                                color="purple"
                                        ></v-switch>
                                    </v-list-item-action>
                                    <v-list-item-title>Enable hints</v-list-item-title>
                                </v-list-item>
                            </v-list>

                            <v-card-actions>
                                <v-spacer></v-spacer>

                                <v-btn
                                        text
                                        @click="menu = false"
                                >
                                    Cancel
                                </v-btn>
                                <v-btn
                                        color="primary"
                                        text
                                        @click="menu = false"
                                >
                                    Save
                                </v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-menu>
                    <Account>
                        <template #dropdown>
                            <v-list-item-action>
                                <v-icon>mdi-menu-down</v-icon>
                            </v-list-item-action>
                        </template>
                    </Account>
                </v-list-item>
            </v-list>
            <v-divider></v-divider>
            <v-list
                    nav
                    dense
            >
                <v-list-item-group
                        v-model="selectedItem"
                        color="primary"
                >
                    <v-list-item
                            v-for="(item, i) in items"
                            :key="i"
                    >
                        <v-list-item-icon>
                            <v-icon v-text="item.icon"></v-icon>
                        </v-list-item-icon>

                        <v-list-item-content>
                            <v-list-item-title v-text="item.text"></v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </v-list-item-group>
            </v-list>
        </v-navigation-drawer>
    </v-card>
</template>

<script>
    export default {
        data: () => ({
            fav: true,
            menu: false,
            message: false,
            hints: true,
            selectedItem: 0,
            items: [
                { text: 'My Files', icon: 'mdi-folder' },
                { text: 'Shared with me', icon: 'mdi-account-multiple' },
                { text: 'Starred', icon: 'mdi-star' },
                { text: 'Recent', icon: 'mdi-history' },
                { text: 'Offline', icon: 'mdi-check-circle' },
                { text: 'Uploads', icon: 'mdi-upload' },
                { text: 'Backups', icon: 'mdi-cloud-upload' },
            ],
        }),
        components: {}
    }
</script>
