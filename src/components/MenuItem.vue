<template>
    <md-list-item v-on:click="$emit('selectUser', item.login.uuid)">
        <md-avatar>
        <img :src = "item.picture.thumbnail" alt="People">
        </md-avatar>
        <span class="md-list-item-text">{{ item.name.first}} {{ item.name.last}}</span>
    </md-list-item>
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
</style>