<template>
    <i @click="toggleDeleteModal" class="bi bi-x delete-btn"></i>
</template>

<script>
    export default {
        methods: {
            toggleDeleteModal() {
                this.$emit('toggleDeleteModal')
            }
        },
    }
</script>

<style scoped>

</style>