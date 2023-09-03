<template>
    <tr>
        <Cell :classList="[]">
            <template v-slot:data><a href="#">{{ data.fullname }}</a></template>
        </Cell>
        <Cell :classList="['screen-lg']">
            <template v-slot:data>{{ data.email }}</template>
        </Cell>
        <Cell :classList="['screen-lg']">
            <template v-slot:data>{{ data.mobile }}</template>
        </Cell>
        <Cell :classList="['screen-md']">
            <template v-slot:data>{{ data.department }}</template>
        </Cell>
        <Cell :classList="['action-btn-wrapper']">
            <template v-slot:data><EditBtn @toggleEditModal="toggleEditModal"/><DeleteBtn @toggleDeleteModal="toggleDeleteModal"/></template>
        </Cell>
    </tr>
</template>

<script>
import Cell from "@/components/Table/Cell.vue"
import EditBtn from "@/components/Table/EditBtn.vue"
import DeleteBtn from "@/components/Table/DeleteBtn.vue"
    export default {
        props: ['data'],
        components: {
            Cell,
            EditBtn,
            DeleteBtn
        },
        methods: {
            toggleEditModal() {
                this.$store.commit('setActiveEmployee', this.data)
                this.$emit('toggleEditModal', this.data)
            },
            showDeleteBtn() {
                this.$store.commit('setActiveEmployee', this.data)
                this.$emit('showDeleteBtn', this.data)
            },
            toggleDeleteModal(){
                this.$store.commit('setActiveEmployee', this.data)
                this.$emit('toggleDeleteModal')
            }
        },
    }
</script>

<style scoped>

</style>