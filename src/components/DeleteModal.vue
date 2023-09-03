<template>

    <!--Modal-->
        <transition name="modal">
          <div v-if="showDeleteModal" id="modal-two-wrapper" class="modal-wrapper">
              <div class="modal-overlay"></div>
              <div id="modal-two" class="modal">
                  <div class="head">
                      <h5>Delete Employee</h5>
                      <i @click="close" id="close-modal-two"  class="bi bi-x action-icon"></i>
                  </div>
                  <div class="body">
                      Are you sure you want to delete employee?
                  </div>
                  <div class="footer">
                      <a class="btn btn-secondary" id="reset-btn" href="#">No</a>
                      <a @click.prevent="deleteEmployee" class="btn btn-danger" id="submit-btn" href="#">Yes</a>
                  </div>
              </div>
          </div>
        </transition>
    <!--/Modal-->
</template>

<script>
    export default {
        props: ['showDeleteModal'],
        methods: {
          close() {
            this.$emit('close')
          },
          deleteEmployee(){
            
            this.$store.commit('deleteEmployee', this.$store.state.activeEmployee)
            this.close();
            
            //Show Alert Box
              this.$store.commit('setAlertProperties', {className:'notif-success', text: 'Employee deleted successfully'})
              this.$store.commit('toggleAlertBox')
          }
        },
    }
</script>

<style scoped>
.modal-enter-from{
  opacity: 0;
}
.modal-enter-active{
  transition: all 0.3s ease;
}
.modal-leave-from{
  opacity: 1;
}
.modal-leave-active{
  transition: all 0.3s ease;
}
.modal-leave-to{
 opacity: 0;
}

.modal select {
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #bdbdbd;
  border-radius: 0.5rem;
}
/* Modal */
@keyframes slideModalIn {
  0% {
    transform: translateY(-70%);
  }
  100% {
    transform: translateY(0rem);
  }
}
.slide-modal-in {
  opacity: 1 !important;
  animation: slideModalIn 0.4s ease-out;
}
.fade-out {
  opacity: 0;
}

.modal-wrapper {
  z-index: 10;
  position: fixed;
  top: 0rem;
  padding: 3rem 1rem 0rem 1rem;
  height: 100vh;
  overflow-y: auto;
  overflow-x: hidden;
  width: 100%;
}
.modal-overlay {
  background-color: black;
  position: absolute;
  opacity: 0.8;
  height: 100%;
  width: 100%;
  top: 0;
  right: 0;
}

.modal {
  z-index: 20;
  position: relative;
  margin: 0rem auto;
  width: 100%;
  background-color: white;
  border-radius: 0.3rem;
  overflow: hidden;
  transition: all 0.5s ease;
}
.modal .head {
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 0.1rem solid rgb(235, 235, 235);
}
.modal .head h5 {
  font-weight: 500;
}
.modal .head i {
  font-size: 1.5rem;
  font-weight: bold;
  color: #bdbdbd;
}
.modal .body {
  padding: 1rem;
}
.modal .footer {
  padding: 1rem;
  background-color: rgb(245, 245, 245);
  display: flex;
  justify-content: flex-end;
}


@media (min-width: 768px) {
  .modal {
    max-width: 55rem;
  }
}
</style>