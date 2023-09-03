<template>
    
            <div class="header">
                <i class="bi bi-people shadow"></i>
                <div class="title-wrapper">
                    <h3>All Employees</h3>
                    <p>List of Employees with CRUD Operations</p>
                    <div class="notification-outer-wrapper">
                        <Alert />
                    </div>
                    
                </div>
            </div>
            <div class="table-section-wrapper">
                <div class="list-wrapper">
                    <div class="tools-wrapper">
                        <SearchBar />
                        <div class="tools-btn-wrapper">
                            <button @click="toggleCreateModal" id="toggle-modal" class="btn btn-outline-primary">+ Add New</button>
                        </div>
                    </div>
                    <div class="table-wrapper">
                        <Table @toggleDeleteModal="toggleDeleteModal" @toggleEditModal="toggleEditModal" />
                    </div>
                    <div class="table-footer">
                        <label class="paginator" for="">
                            <span class="select-label">Rows per page:</span>
                            <select name="" id="">
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                                <option value="8">8</option>
                                <option value="9">9</option>
                                <option value="10">10</option>
                            </select>
                        </label>
                        <div class="pagination-details">
                            1-5 of 8
                        </div>
                        <div class="pagination-controls">
                            <i class="bi bi-arrow-left" id="prev-page"></i>
                            <i class="bi bi-arrow-right" id="next-page"></i>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <CreateModal :showCreateModal="showCreateModal" @close="toggleCreateModal" />
            </div>
            <div>
                <EditModal :showEditModal="showEditModal" @close="toggleEditModal"/>
            </div>
            <div>
                <DeleteModal :showDeleteModal="showDeleteModal" @close="toggleDeleteModal"/>
            </div>
            
</template>
        
<script>
import CreateModal from '@/components/CreateModal.vue'
import EditModal from '@/components/EditModal.vue'
import DeleteModal from '@/components/DeleteModal.vue'
import Alert from '@/components/Alert.vue'
import Table from '@/components/Table.vue'
import SearchBar from '@/components/SearchBar.vue'

export default {
    components: {
        CreateModal,
        EditModal,
        DeleteModal,
        Table,
        Alert,
        SearchBar
    },
    data() {
        return {
            showCreateModal: false,
            showEditModal: false,
            showDeleteModal: false,
        }
    },
    computed: {
      
    },
    methods: {
      setBodyToNoScroll(set){
        if (set){
          document.getElementsByTagName('body')[0].classList.add('noscroll-body')
        }else{
          document.getElementsByTagName('body')[0].classList.remove('noscroll-body')
        }
      },
      toggleCreateModal(){        
        this.showCreateModal = !this.showCreateModal
        this.setBodyToNoScroll(this.showCreateModal)
      },
      toggleEditModal(){
        this.showEditModal = !this.showEditModal
        this.setBodyToNoScroll(this.showEditModal)
      },
      toggleDeleteModal(){
         this.showDeleteModal = !this.showDeleteModal
        this.setBodyToNoScroll(this.showDeleteModal)
      }
    }
};
</script>

<style>

    * {
  padding: 0px;
  margin: 0px;
  box-sizing: border-box;
}
.table-section-wrapper {
  width: 100%;
  background-color: #bdbdbd;
  padding: 0rem;
  padding-bottom: 2rem;
  min-height: 100vh;
}
/*Header*/
.header {
  background-color: rgb(248, 247, 244);
  padding: 0.7rem;
  display: flex;
  position: relative;
}
.title-wrapper h3 {
  font-weight: bold;
  font-size: 1.2rem;
}
.notification-outer-wrapper {
  display: flex;
  justify-content: center;
  right: 0rem;
  position: absolute;
  top: 0rem;
  width: 100%;
}
.notification-wrapper {
  padding: 0.5rem 1rem;
  display: flex;
  align-items: center;
  color: green;
  background-color: rgb(212, 233, 212);
}

.notification-wrapper p {
  margin-right: 1rem;
}
#close-nofitication {
  cursor: pointer;
  font-size: 1.2rem;
  opacity: 0.7;
  transition: all 0.3s ease;
}
#close-nofitication:hover {
  opacity: 1;
}
.notification-wrapper .notif-success {
  color: green;
  background-color: rgb(212, 233, 212);
}
.notification-wrapper i {
  margin-right: 0.3rem;
}
.title-wrapper p {
}
.header .bi-people {
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 4rem;
  width: 4rem;
  font-size: 2.5rem;
  color: #2b6f78;
  margin-right: 1rem;
}
/*List Wrapper*/
.paginator {
  margin-right: 2rem;
}
.pagination-details {
  margin-right: 2rem;
}
.pagination-controls .bi {
  cursor: pointer;
}
.pagination-controls #prev-page {
  margin-right: 0.5rem;
}
.table-footer {
  display: flex;
  justify-content: flex-end;
  padding: 1rem 0rem;
}
.table-footer label {
  display: flex;
  align-items: center;
}
.select-label {
  margin-right: 0.5rem;
}
.tools-wrapper {
  position: relative;
  height: auto;
}
.add-btn {
  border: 0.15rem solid #3e377d;
  color: #3e377d;
  padding: 0.5rem 2rem;
}
.tools-btn-wrapper {
  margin-top: 0.5rem;
}
.list-wrapper {
  width: 100%;
  background-color: white;
  margin: 0rem auto;
  padding: 2rem 1rem;
  display: flex;
  flex-direction: column;
}
.search-input-wrapper {
  position: relative;
}
.search-input-wrapper input {
  width: 100%;
  border: 1px solid #bdbdbd;
  height: 2.8rem;
  border-radius: 0.3rem;
  padding: 0.5rem;
  padding-right: 3.2rem;
}
.search-input-wrapper .search-icon {
  position: absolute;
  right: 0rem;
  background-color: #3e377d;
  height: 2.8rem;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 3rem;
  color: white;
  cursor: pointer;
  transition: all 0.3s ease;
}
.search-input-wrapper .search-icon:hover {
  background-color: #1f1953;
}
.search-input-wrapper .label {
  font-size: 80%;
  position: absolute;
  top: -0.6rem;
  left: 1rem;
  background-color: white;
  font-weight: 500;
}
/*Table Classes*/
.table-wrapper {
  margin-top: 1.5rem;
}
table {
  width: 100%;
}
table thead {
  background-color: #2b6f78;
  color: white;
  border-top-left-radius: 0.3rem;
  border-bottom-right-radius: 0.3rem;
}
table td {
  padding: 1rem 0.5rem;
}
table .screen-lg {
  display: none;
}
table .screen-md {
  display: none;
}
table td a {
  color: #3e377d;
  transition: all 0.3s ease;
}
table td a:hover {
  color: #8f0e5b;
}
table tbody tr {
  border-bottom: 1px solid #bdbdbd;
}
.action-btn-wrapper {
  display: flex;
}
.action-btn-wrapper .bi {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 2rem;
  width: 2rem;
  border-radius: 0.3rem;
  cursor: pointer;
  transition: all 0.3s ease;
}
.action-btn-wrapper .delete-btn {
  background-color: #fed7d7;
  color: #e53e3e;
  font-size: 1.5rem;
  margin-left: 1rem;
}
.action-btn-wrapper .delete-btn:hover {
  color: #fed7d7;
  background-color: #e53e3e;
}
.action-btn-wrapper .edit-btn {
  background-color: #bfbdd6;
  color: #3e377d;
}
.action-btn-wrapper .edit-btn:hover {
  color: #ecebf0;
  background-color: #3e377d;
}
/*General Classes*/
.hidden {
  display: none;
}
.show {
  display: block;
}
body {
  color: #1c1c1c;
}
.wrapper {
  width: 100%;
  display: flex;
}
main {
  width: 100%;
  position: relative;
}
h5 {
  font-size: 1.2rem;
}
.btn {
  padding: 0.5rem 2rem;
  border-radius: 0.3rem;
  transition: all 0.3s ease;
}
.btn-primary {
  background-color: #3e377d;
  color: rgb(250, 250, 250);
}
.btn-danger {
  background-color: #c53030;
  color: rgb(250, 250, 250);
}
.btn-danger:hover {
  background-color: #9b2c2c;
  color: rgb(250, 250, 250);
}
.btn-outline-primary {
  color: #3e377d !important;
  border: 0.1rem solid #3e377d;
  color: rgb(250, 250, 250);
}
.btn-outline-primary:hover {
  color: white !important;
  border: 0.1rem solid #3e377d;
  background-color: #3e377d;
}
.btn-secondary {
  background-color: #2b6f78;
  color: rgb(250, 250, 250);
}
#reset-btn,
#submit-btn {
  width: 10rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
#submit-btn {
  margin-left: 1rem;
}
.action-icon {
  cursor: pointer;
}


@media (min-width: 640px) {
}

@media (min-width: 768px) {
  table .screen-md {
    display: table-cell;
  }
}

@media (min-width: 1024px) {
  .notification-outer-wrapper {
    top: 2.5rem;
    right: 2.5rem;
    width: auto;
  }

  .table-section-wrapper {
    padding: 2.5rem 2.5rem 8rem 2.5rem;
  }
  .header {
    padding: 2.5rem;
  }
  nav {
    position: sticky;
    top: 0rem;
  }
  table .screen-lg {
    display: table-cell;
  }
  .tools-wrapper {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
  }
  .search-input-wrapper {
    width: 100%;
  }
  .tools-btn-wrapper {
    margin-top: 0rem;
    min-width: 9.5rem;
    margin-left: 1rem;
  }
}

@media (min-width: 1280px) {
}

</style>
