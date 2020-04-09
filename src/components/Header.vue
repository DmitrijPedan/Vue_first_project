<template>
    <header>
        <h1>Header</h1>
    </header>
</template>

<script>
export default {
  name: 'Header'
}
</script>>

<style lang="scss" scoped>
    header {
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        background-color: silver;
    }
    h1 {
        margin: 20px;
        color: white;
        font-family: Arial, Helvetica, sans-serif;
        text-transform: uppercase;
    }
</style>
