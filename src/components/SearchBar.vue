<template>
    <div class="search-input-wrapper">
        <span class="label">Search Employee</span>
        <i class="bi bi-search search-icon"></i>
        <input @keypress="filterEmployees" v-model="this.$store.state.searchTerm" type="text" name="" id="">
    </div>
</template>

<script>
    export default {
        data() {
            return {

            }
        },
        methods: {
            filterEmployees() {
                
            }
        },
    }
</script>

<style scoped>

</style>