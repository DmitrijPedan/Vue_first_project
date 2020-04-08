<template>
    <aside>
      <div class="sidebar">
        <Menu v-bind:data = "data"/>
      </div>
    </aside>
</template>

<script>
import Menu from './Menu'
export default {
  props: ['data'],
  name: 'Sidebar',
  components: {
    Menu,
  }
}

</script>

<style lang="scss" scoped>

</style>