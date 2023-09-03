<template>
    <td :class="getClasses">
        <slot name="data"></slot>
    </td>
</template>

<script>

    export default {
        props: ['classList'],
        computed: {
            getClasses() {
                let classes = ''
                for (let class_index in this.classList){
                    classes = classes + ' ' + this.classList[class_index]
                }
            return classes 
            }
        },       
    }
</script>

<style scoped>

</style>