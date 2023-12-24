<template>
    <div class="grey darken-1 empty-layout">
        <basic-table
          :items="items"
          :headers="headers"
          @updateItem="(id) => openSideBarForEdit(id)"
        />
        <Button type="submit" style="margin-top: 10px;" label="Submit" @Click="openSidebar()"/>
        <add-users-update-slider
        :is-opened="isOpened"
        :id="pickedItemId"
        @toggleVisible="close()"
        @updateUser="(user) => updateUser(user)"
        />
    </div>
</template>


<script>
import BasicTable from '@/components/basic/BasicTable.vue'
import Button from 'primevue/button';
import AddUsersUpdateSlider from '@/components/users/AddUsersUpdateSlider.vue';

export default {
    name: 'user-view',
    components: {BasicTable, AddUsersUpdateSlider, Button},
    data: () => {
      return {
        items: [],
        headers: [
          {value: 'id', text: 'id'},
          {value: 'fullName', text: 'ФИО'},
          {value: 'birthDate', text: 'Дата рождения'},
          {value: 'login', text: 'Логин'},
        ],
        isOpened: false,
        pickedItemId: null,
      }
    },
    async mounted() {
      const { data } = await this.$axios.get('/user');
      this.items = data;
    },
    methods: {
      openSidebar() {
        this.isOpened = true;
      },
      openSideBarForEdit(id) {
        this.pickedItemId = id;
        this.isOpened = true;
      },
      updateUser(updateUser) {
        const updateIndex = this.items.findIndex((users) => updateUser.id === users.id);
        if (updateIndex) {
          this.items.splice(updateIndex, 1, updateUser);
        } else {
          this.items = [...this.items, updateUser];
        }
      },
      close() {
        this.isOpened = false;
        this.pickedItemId = null;
      }
    }
    
}
</script>