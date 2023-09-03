import { createStore } from 'vuex'

export default createStore({
  getters: {
    getEmployees: (state) => {
      return state.employees.filter((employee) => employee.fullname.toLowerCase().includes(state.searchTerm.toLowerCase()))
    }
  },
  
  state: {
    searchTerm: '',
    activeEmployee: null,
    showAlertBox: false,
    alertBoxText: '',
    alertBoxClass: null,
    employees: [
      {
        id: 1,
        fullname: 'Abubakar Atiku',
        email: 'abuakar21@gmail.com',
        mobile: '08147751998',
        department: 'Architecture',
        doe: '2021-06-27',
        gender: 'male',
        permanent: true,
        city: 'Kaduna'
      },
      {
        id: 2,
        fullname: 'Aishatu Umaru Garba',
        email: 'aaug@gmail.com',
        mobile: '090335561212',
        department: 'Medical Lab Science',
        doe: '2021-06-27',
        gender: 'female',
        permanent: false,
        city: 'Kaduna'
      },
      {
        id: 3,
        fullname: 'Maryam Umaru Garba',
        email: 'maryamtu@gmail.com',
        mobile: '08035518722',
        department: 'architecture',
        doe: '2021-09-27',
        gender: 'female',
        permanent: false,
        city: 'Kaduna'
      }
    ]
  },
  mutations: {
    createEmployee: (state, payload) =>{
      state.employees.push(payload)
    },
    setActiveEmployee: (state, payload) =>{
      state.activeEmployee= payload
    },
    editEmployee: (state, payload) =>{
      let itemIndex = null
      state.employees.forEach((item, index) => {
        if (item.id == payload.id){
          itemIndex = index
        }
      })
      state.employees[itemIndex] = payload
    },
    deleteEmployee: (state, payload) =>{
      let itemIndex = null
      state.employees.forEach((item, index) => {
        if (item.id == payload.id){
          itemIndex = index
        }
      })
      state.employees.splice(itemIndex, 1)
    },
    setAlertProperties: (state, payload) => {
      state.alertBoxClass = payload.className
      state.alertBoxText = payload.text
    },
    toggleAlertBox: (state) => {
      state.showAlertBox = !state.showAlertBox
      setTimeout(() => {
        state.showAlertBox = !state.showAlertBox
      }, 2000)
    }
  },
  actions: {
    
  },
  modules: {
  }
})
