<template>
    <div>
        <p>Users ({{data.length}}):</p>
        <md-list>
            <MenuItem 
                v-for="(item, i) in data" 
                v-bind:key="i+1" 
                v-bind:item="item" 
                v-bind:number="i"
                v-on:selectUser="selectUser"   
            />
        </md-list>
    </div>
</template>

<script>
import MenuItem from './MenuItem'
export default {
    name: 'Menu',
    props: ['data'],
    methods: {
        selectUser(id) {
            this.$emit('selectUser', id)
        }
    },
    components: {
        MenuItem,
    },
}
</script>

<style lang="scss" scoped>
    .md-list {
        width: 320px;
        max-width: 100%;
        display: inline-block;
        vertical-align: top;
        border: 1px solid rgba(#000, .12);
    }
    ul {
        padding: 0;
    }
    p {
        text-align: center;
        font-weight: 700;
        margin: 0px 0px 10px 0px;
        color: orange;
        font-family: Arial, Helvetica, sans-serif;
        font-size: 16px;
        text-transform: uppercase;
    }
</style>