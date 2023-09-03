<template>
    <i @click="toggleEditModal" class="bi bi-pen-fill edit-btn"></i>
</template>

<script>
    export default {
        methods: {
            toggleEditModal() {
                this.$emit('toggleEditModal')
            }
        },
    }
</script>

<style scoped>

</style>