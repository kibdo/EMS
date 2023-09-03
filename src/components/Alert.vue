<template>
    <transition name="alert">
        <div v-if="showAlert" :class="`notification-wrapper ${ getAlertClass }`">
            <p><i class="bi bi-bell"></i> <span class="notification-text">{{ getAlertText }}</span></p>
            <i class="bi bi-x" id="close-nofitication"></i>
        </div>
    </transition>
</template>

<script>
    export default {
        computed: {
            showAlert() {
                return this.$store.state.showAlertBox 
            },
            getAlertText(){
                return this.$store.state.alertBoxText
            },
            getAlertClass(){
                return this.$store.state.alertBoxClass
            }
        },
    }
</script>

<style scoped>
.alert-enter-from{
    transform: translateY(-100%);
}
.alert-enter-active{
    transition: all 0.5s ease;
}
.alert-enter-to{
    transform: translateY(0%)
}
.alert-leave-from{
    transform: translateY(0%);
}
.alert-leave-active{
    transition: all 0.5s ease;
}
.alert-leave-to{
    transform: translateY(-100%)
}

@media (min-width: 1024px) {
.alert-enter-from{
    transform: translateY(0%);
    opacity: 0;
}
.alert-enter-active{
    transition: all 0.5s ease;
}
.alert-enter-to{
    transform: translateY(0%);
    opacity: 1;
}
.alert-leave-from{
    transform: translateY(0%);
    opacity: 1;
}
.alert-leave-active{
    transition: all 0.5s ease;
}
.alert-leave-to{
    transform: translateY(0%);
    opacity: 0;
}
}

</style>