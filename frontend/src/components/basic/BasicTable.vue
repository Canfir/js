<template>
    <div >
       <DataTable v-model:selection="selectedItem" :value="items" selectionMode="single">
        <Column v-for="header of headers" :key="header.value" :field="header.value" :header="header.text"></Column>
      </DataTable>
    </div>
  </template>
  
  <script>
  import { mapState } from 'vuex';
  import DataTable from 'primevue/datatable';
  import Column from 'primevue/column';

  export default {
      name: 'basic-table',
      props: {
        items: {type: Array, required: true},
        headers: {type: Array, required: true},
      },
      data:() => ({
        selectedItem: undefined
      }),
      components: { DataTable, Column },
      watch: {
        selectedItem: {
          handler() {
            console.log(this.selectedItem);
            if(this.selectedItem) this.$emit('updateItem', this.selectedItem.id);
          }
        }
      },
      computed: {
        ...mapState({
          user: state => state.user.user
        })
      }
      
  }
  </script>
  <style scoped>
  .login {
    display: flex;
    flex-direction: column;
    max-width: 400px;
    position: absolute;
    top: 50%;
      left: 50%;
      margin-right: -50%;
      transform: translate(-50%, -50%) 
  }
  </style>