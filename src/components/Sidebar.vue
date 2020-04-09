<template>
    <aside>
      <div class="sidebar">
        <Menu 
        v-bind:data = "data"
        v-on:selectUser="selectUser"
        />
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
  	},
  	methods: {
		selectUser(id) {
			this.$emit('selectUser', id)
		}
  }
}

</script>

<style lang="scss" scoped>
  .sidebar {
    padding: 15px;
  }
</style>