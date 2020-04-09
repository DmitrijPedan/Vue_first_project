<template>
    <main>
      <div class="cards-area">
        <UserCard 
          v-if="user"
          v-bind:user = "user" 
          v-on:closeCard="closeCard" />
        <p v-else>Click on user to get more info!</p>
      </div>
    </main>
</template>

<script>
import UserCard from './UserCard'
export default {
  name: 'Main',
  props: ['user'],
  methods: {
    closeCard() {
        this.$emit('closeCard')
    }
  },
  components: {
    UserCard,
  }
}
</script>

<style lang="scss" scoped>
  p {
    text-align: center;
    color: orange;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 16px;
  }
  .cards-area {
    padding: 35px 5px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
