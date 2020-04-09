<template>
  <div id="app">
    <Header class="header"/>
    <Loader 
      v-if= "loading"/>
    <div class="main" v-else>
      <Sidebar class="aside" 
        v-bind:data = "allUsers" 
        v-on:selectUser="selectUser"/>
      <Main  
        v-bind:data = "selectedUsers" 
        v-bind:loading = "loading"/>
    </div>
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
    Header, Loader, Sidebar, Main, Footer
  }
}
</script>

<style lang="scss">
  body {
    margin: 0;
    padding: 0;
  }
  .main {
    display: grid;
    grid-template-columns: 20% 1fr;
  }
</style>
