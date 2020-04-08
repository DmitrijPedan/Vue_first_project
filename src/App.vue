<template>
  <div id="app">
    <Header/>
    <Sidebar v-bind:data = "users" />
    <Main/>
  </div>
</template>

<script>
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Main from './components/Main'
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
    Main
  }
}
</script>

<style lang="scss">

</style>
