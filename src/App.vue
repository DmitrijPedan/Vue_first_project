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
  data () {
    return {
      peoples: [
        { id: 1, fullName: 'Oleh Lev', position: 'Web Dev', skill: 'PHP,JS', exp: 3, sex: 'Male', salary: 4500 },
        { id: 2, fullName: 'John White', position: 'Web Dev', skill: 'PHP', exp: 1, sex: 'Male', salary: 1200 },
        { id: 3, fullName: 'Jany Rad', position: 'Sale', skill: '-', exp: 2, sex: 'Famale', salary: 3500 },
        { id: 4, fullName: 'Ivan Brown', position: 'iOS', skill: 'Swift', exp: 3, sex: 'Male', salary: 4000 },
        { id: 5, fullName: 'Pet Bool', position: 'Android', skill: 'Java', exp: 2, sex: 'Male', salary: 3520 },
      ]
    }
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
