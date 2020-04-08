<template>
    <div>
        <p>Menu:</p>
        <ul>
            <MenuItem v-for="(item, i) in data" :key="i+1" :item="item"/>
        </ul>
    </div>
</template>

<script>
import MenuItem from './MenuItem'
export default {
    props: ['data'],
    name: 'Menu',
    components: {
        MenuItem,
    },
    log: function () {
    console.log(this.data)
    },
}
</script>

<style lang="scss" scoped>

</style>