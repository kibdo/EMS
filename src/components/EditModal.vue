<template>
    <!--Modal-->
            
            <transition name="modal">
            <div v-if="showEditModal" id="modal-one-wrapper" class="modal-wrapper">
                <div class="modal-overlay"></div>
                <transition name="modall">
                  <div id="modal-one" class="modal">
                      <div class="head">
                          <h5>Edit Employee Info</h5>
                          <i id="close-modal-one" @click="close" class="bi bi-x action-icon"></i>
                      </div>
                      <div class="body">
                          <form action="#">
                              <div class="primary-form">
                                  <div class="form-group">
                                      <label class="form-text-label" for="">Full Name</label>
                                      <input v-model="forms.fullname.value" class="text-input" type="text" name="" id="" />
                                  </div>
                                  <div class="form-group">
                                      <label class="form-text-label" for="">Email</label>
                                      <input v-model="forms.email.value" class="text-input" type="text" name="" id="" />
                                  </div>
                                  <div class="form-group">
                                      <label class="form-text-label" for="">Mobile</label>
                                      <input v-model="forms.mobile.value" class="text-input" type="text" name="" id="" />
                                  </div>
                                  <div class="form-group">
                                      <label class="form-text-label" for="">City</label>
                                      <input v-model="forms.city.value" class="text-input" type="text" name="" id="" />
                                  </div>
                              </div>
                              <div class="secondary-form">
                                  <div class="form-group form-group-inline">
                                      <label class="form-check-label">
                                      <input v-model="forms.gender.value" type="radio" class="form-check-input" name="gender" value="male">
                                      <span>Male</span>
                                    </label>
                                    
                                    <label class="form-check-label">
                                      <input v-model="forms.gender.value" type="radio" class="form-check-input" name="gender" id="female-radio" value="female" >
                                      <span>Female</span>
                                    </label>
                                  </div>
                                  <div class="form-group">
                                      <select v-model="forms.department.value" name="" id="">
                                          <option value="">Department</option>
                                          <option value="Architecture">Architecture</option>
                                          <option value="quantity">QuantitySurvey</option>
                                          <option value="survey">SVG</option>
                                      </select>
                                  </div>
                                  <div class="form-group">
                                      <input v-model="forms.doe.value" type="date" name="" id="" />
                                  </div>
                                  <div class="form-group">
                                      <div class="form-check">
                                        <label class="form-check-label">
                                          <input v-model="forms.permanent.value" type="checkbox" class="form-check-input">
                                          <span>Permanent Employee</span>
                                        </label>
                                      </div>
                                  </div>
                              </div>
                          </form>
                      </div>
                      <div class="footer">
                          <a class="btn btn-secondary" id="reset-btn" href="#">Reset</a>
                          <a @click.prevent="submitForm" class="btn btn-primary" id="submit-btn" href="#">Submit</a>
                      </div>
                  </div>
                </transition>
            </div>
            </transition>
</template>

<script>
    export default {
        props: ['showEditModal'],
        methods: {
          close() {
            this.$emit('close')
          },
          submitForm(){
            let payload =  {
                id: this.getActiveEmployee.id,
                fullname: this.forms.fullname.value,
                email: this.forms.email.value,
                mobile: this.forms.mobile.value,
                department: this.forms.department.value,
                city: this.forms.city.value,
                gender: this.forms.gender.value,
                permanent: this.forms.permanent.value,
                doe: this.forms.doe.value
              }

            //Validate Form

            //Send Post Request to server

            //Add to Array
              this.$store.commit('editEmployee', payload)
              this.close()

              //Show Alert Box
              this.$store.commit('setAlertProperties', {className:'notif-success', text: 'Employee edited successfully'})
              this.$store.commit('toggleAlertBox')
          }
        },
        computed: {
          getActiveEmployee() {
            return this.$store.state.activeEmployee
          }
        },
        updated () {
          let forms = this.forms
          forms.fullname.value = this.getActiveEmployee.fullname
          forms.email.value = this.getActiveEmployee.email 
          forms.department.value = this.getActiveEmployee.department
          forms.mobile.value = this.getActiveEmployee.mobile
          forms.gender.value = this.getActiveEmployee.gender
          forms.city.value = this.getActiveEmployee.city
          forms.doe.value = this.getActiveEmployee.doe
          forms.permanent.value = this.getActiveEmployee.permanent
          

        },
        mounted () {
          
        },
        data() {
          return {
            fullname: '',
            forms: {
          fullname: {
            value: '',
            validators: ['dataRequired']
          },
          email: {
            value: '',
            validators: ['dataRequired']
          },
          department: {
            value: '',
            validators: ['dataRequired']
          },
          mobile: {
            value: '',
            validators: ['dataRequired']
          },
          gender: {
            value: '',
            validators: ['dataRequired']
          },
          city: {
            value: '',
            validators: ['dataRequired']
          },
          doe: {
            value: '',
            validators: ['dataRequired']
          },
          permanent: {
            value: '',
            validators: ['dataRequired']
          }
          },
        }
      }
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
/*Form*/
.form-check-label {
  display: flex;
  align-items: center;
}
.form-check-label span {
  margin-left: 0.4rem;
}
.form-group-inline {
  display: flex;
  flex-direction: row;
}
.form-check-input {
  height: 1.2rem;
  width: 1.2rem;
}

label {
  font-weight: 500;
}
.form-group {
  padding: 0.5rem 0rem;
}
.text-input {
  width: 100%;
  height: 2.5rem;
  border: 1px solid #bdbdbd;
  padding: 0rem 0.5rem;
  border-radius: 0.5rem;
}
input:focus {
  outline-color: #bdbdbd;
}
#female-radio {
  margin-left: 1rem;
}

select:focus {
  outline-color: #bdbdbd;
}
input[type="date"] {
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #bdbdbd;
  border-radius: 0.5rem;
}


@media (min-width: 768px) {
  .modal {
    max-width: 55rem;
  }
  .modal form {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }
}
@media (min-width: 768px) {
  .primary-form {
    width: 48%;
  }
  .secondary-form {
    width: 48%;
  }
  table .screen-md {
    display: table-cell;
  }
}
</style>