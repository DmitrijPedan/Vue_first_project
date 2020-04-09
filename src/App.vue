<template>
  <div id="app">
    <Header class="header"/>
    <Loader 
      v-if= "loading"/>
    <Sidebar class="aside" 
      v-else-if = "!loading"
      v-bind:data = "allUsers" 
      v-on:selectUser="selectUser"/>
    <Main class="main" 
      v-bind:data = "selectedUsers" 
      v-bind:loading = "loading"/>
    <Footer class="footer"/>
  </div>
</template>

<script>
import Header from './components/Header'
import Loader from './components/Loader'
import Sidebar from './components/Sidebar'
import Main from './components/Main'
import Footer from './components/Footer'
import {fetchUsers} from './services/fetchUsers'
export default {
  name: 'App',
  data () {
    return {
      allUsers: [],
      loading: true,
      selectedUsers: [],
    }
  },
  methods: {
    selectUser(id) {   
        this.selectedUsers = this.allUsers.filter(el => el.login.uuid === id);
    }
  },
  mounted () {
      (async () => {
        const data = await fetchUsers();
        setTimeout(()=>{
          this.allUsers = data.results;
          this.loading = false;
          console.log('>>>>>>app mounted');
        }, 1000)
      })()
  },
  components: {
    Header,
    Loader,
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
    grid-column: span 2;
  }
  .main {
    grid-column: span 10;
  }
  .footer {
    grid-column: span 12;
  }
</style>
