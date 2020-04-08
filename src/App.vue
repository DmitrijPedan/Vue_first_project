<template>
  <div id="app">
    <Header/>
    <Sidebar v-bind:data = "peoples" />
    <Main/>
  </div>
</template>

<script>
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Main from './components/Main'
export default {
  name: 'App',
  data () {
    return {
      peoples: []
    }
  },
  mounted () {
      fetch('https://randomuser.me/api/?results=20')
      .then(res => res.json())
      .then(json => {
        this.peoples = json.results
      })
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
