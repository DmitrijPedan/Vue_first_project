<template>
    <div>
        <p>
            {{data}}
        </p>
        <p>Menu:</p>
        <ul>
            <MenuItem v-for="item in data" v-bind:key="item.id" v-bind:item="item"/>
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