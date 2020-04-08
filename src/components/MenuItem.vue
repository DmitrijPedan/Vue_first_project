<template>
    <li>
       <a href="">{{ number + 1 }} {{ item.name.first}} {{ item.name.last}}</a>
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
    }
</style>