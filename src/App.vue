<template>
  <div id="app">
    <Header/>
    <Sidebar/>
    <Main/>
  </div>
</template>

<script>
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Main from './components/Main'
export default {
  name: 'App',
  components: {
    Header,
    Sidebar,
    Main
  }
}
</script>

<style lang="scss">

</style>
