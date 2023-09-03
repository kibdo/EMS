<template>
    <table>
                            <thead>
                                <Cell :class="[]">
                                    <template v-slot:data>Employee Name</template>
                                </Cell>
                                <Cell :class="['screen-lg']">
                                    <template v-slot:data>Email Address</template>
                                </Cell>
                                <Cell :class="['screen-lg']">
                                    <template v-slot:data>Mobile(Personal)</template>
                                </Cell>
                                <Cell :class="['screen-md']">
                                    <template v-slot:data>Department</template>
                                </Cell>
                                <Cell>
                                    <template v-slot:data>Action</template>
                                </Cell>
                            </thead>
                                <transition-group tag="tbody" name="row" appear>
                                    <Row @toggleDeleteModal="toggleDeleteModal" @toggleEditModal="toggleEditModal" v-for="employee in getEmployees" :key="employee.id" :data="employee" />
                                </transition-group>
                        </table>
</template>

<script>
import Row from "@/components/Table/Row.vue"
import Cell from "@/components/Table/Cell.vue"
    export default {
        components: {
            Row,
            Cell,
        },
        computed: {
           getEmployees(){
               const employees = this.$store.getters.getEmployees
               return employees
           }
        },
        methods: {
            toggleEditModal(payload) {
                this.$emit('toggleEditModal', payload)
            },
            toggleDeleteModal() {
                this.$emit('toggleDeleteModal')
            }
        },
    }
</script>

<style scoped>
tbody{
    position: relative;
}
.row-leave-from{
    opacity: 0;
    transform: scale(1);
}
.row-leave-active{
    position: absolute;
    transition: all 0.4s ease;
}
.row-leave-to{
    opacity: 0;
    transform: scale(0.6);
}
.row-move{
    transition: all 0.3s ease;;
}
</style>