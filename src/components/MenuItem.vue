<template>
    <li>
       <a href="">
            {{ item.name.first}}
        </a>
    </li>
</template>

<script>
export default {
    props: {
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