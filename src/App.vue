<template>
  <div id="app">
    <Header class="header"/>
    <Sidebar class="aside" v-bind:data = "users" />
    <Main class="main" v-bind:data = "users[5]"/>
    <Footer class="footer"/>
  </div>
</template>

<script>
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Main from './components/Main'
import Footer from './components/Footer'
import {fetchUsers} from './services/fetchUsers'
export default {
  name: 'App',
  data () {
    return {
      users: []
    }
  },
  mounted () {
      (async () => {
        const data = await fetchUsers();
        this.users = data.results;
      })()
  },
  components: {
    Header,
    Sidebar,
    Main,
    Footer
  }
}
</script>

<style lang="scss">
  #app {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
  }
  .header {
    grid-column: span 12;
  }
  .aside {
    grid-column: span 3;
  }
  .main {
    grid-column: span 9;
  }
  .footer {
    grid-column: span 12;
  }
</style>
