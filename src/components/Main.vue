<template>
    <main>
      <div class="title">
        <p>User info:</p>
        <!-- <Loader/> -->
        <UserCard v-bind:data = "data"/>
      </div>
      
    </main>
</template>

<script>
import Loader from './Loader'
import UserCard from './UserCard'
export default {
  name: 'Main',
  props: ['data'],
  components: {
    Loader,
    UserCard,
  }
}
</script>

<style lang="scss" scoped>
  .title {
    text-align: center;
    color: orange;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 16px;
    text-transform: uppercase;
  }
</style>
