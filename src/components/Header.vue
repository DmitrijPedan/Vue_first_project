<template>
    <header>
        <div class="container">
            <div class="logo">
                <img src="../assets/vue.png" alt="vue">
            </div>
            <div class="title">
                <h1>Vue first project</h1>
            </div>
        </div>
    </header>
</template>

<script>
export default {
  name: 'Header'
}
</script>>

<style lang="scss" scoped>
    header {
        border-bottom: 1px solid gray;
    }
    .container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 90%;
        margin: auto;
    }
    img {
        height: 50px;
        width: 50px;;
    }
    h1 {
        margin: 20px;
        font-size: 16px;
        color: rgb(27, 160, 109);
        font-family: Arial, Helvetica, sans-serif;
        text-transform: uppercase;
    }
</style>
