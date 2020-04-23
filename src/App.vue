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
        v-bind:user = "selectedUsers" 
        v-bind:loading = "loading"
        v-on:closeCard="closeCard"/>
    </div>
  </div>
</template>

<script>
import Header from './components/Header'
import Loader from './components/Loader'
import Sidebar from './components/Sidebar'
import Main from './components/Main'
import {fetchUsers} from './services/fetchUsers'

export default {
  name: 'App',
  data () {
    return {
      allUsers: [],
      loading: true,
      selectedUsers: null,
    }
  },
  methods: {
    selectUser(id) {
        this.selectedUsers = this.allUsers.find(el => el.login.uuid === id);
    },
    closeCard() {
        this.selectedUsers = null
    }
  },
  mounted () {
      (async () => {
        const data = await fetchUsers();
        setTimeout(()=>{
          this.allUsers = data.results;
          this.loading = false;
        }, 1000)
      })()
  },
  components: {
    Header, Loader, Sidebar, Main
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
    grid-template-columns: 1fr 70%;
      @media (max-width: 992px) {
        grid-template-columns: 1fr 1fr;
      }
  }
</style>
