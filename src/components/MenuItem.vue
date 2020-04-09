<template>
    <li v-on:click="$emit('selectUser', item.login.uuid)">
        <span>{{ number + 1 }} {{ item.name.first}} {{ item.name.last}}</span>
    </li>
</template>

<script>
export default {
    props: {
        number: {
            type: Number
        },
        item: {
            type: Object,
            required: true
        }
    },
    name: 'MenuItem',
}
</script>

<style lang="scss" scoped>
    li {
        list-style: none;
        font-family: Arial, Helvetica, sans-serif;
        color: gray;
        cursor: pointer;
        margin: 3px;
    }
    li :hover {
        color: orange;
    }
</style>