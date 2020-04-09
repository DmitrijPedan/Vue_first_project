<template>
    <div>
        <p>Menu:</p>
        <ul>
            <MenuItem 
                v-for="(item, i) in data" 
                v-bind:key="i+1" 
                v-bind:item="item" 
                v-bind:number="i"
                v-on:selectUser="selectUser"   
            />
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
    methods: {
        selectUser(id) {
            this.$emit('selectUser', id)
        }
    }
}
</script>

<style lang="scss" scoped>
    ul {
        padding: 0;
    }
    p {
        margin: 3px;
        color: orange;
        font-family: Arial, Helvetica, sans-serif;
        font-size: 16px;
        text-transform: uppercase;
    }
</style>