<template>
  <v-app>
    <component :is="layout">
      <router-view/>
    </component>
  </v-app>
</template>
<script>
  import MainLayout from '@/layouts/MainLayout.vue'
  import EmptyLayout from '@/layouts/EmptyLayout.vue'
  export default {
    name: 'App',
    components: {
      MainLayout, EmptyLayout
    },
    computed: {
      layout () {
        return (this.$route.meta.layout || 'main') + '-layout'
      }
    }
  }
</script>
<style lang="scss">
  * {
    text-align: left;
  }
  a {
    text-decoration: none;
  }
  ul {
    li {
      list-style-type: none;
    }
  }
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  #nav {
    padding: 30px;
  }

  #nav a {
    font-weight: bold;
    color: #2c3e50;
  }

  #nav a.router-link-exact-active {
    color: #42b983;
  }
</style>
