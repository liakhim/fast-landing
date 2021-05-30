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
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
