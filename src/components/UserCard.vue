<template>
    <div>
        <p class="title">User info:</p>
        <p>{{data[0].name}}</p>  
    </div>
</template>

<script>
export default {
    name: 'UserCard',
    props: ['data']
}
</script>

<style lang="scss" scoped>
  .title {
    text-align: center;
    color: orange;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 16px;
  }
</style>