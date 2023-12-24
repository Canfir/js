<template>
    <div class="grey darken-1 empty-layout">
        <basic-table
          :items="items"
          :headers="headers"
        />
        <Button type="submit" style="margin-top: 10px;" label="Submit" @Click="openSidebar()"/>
        <add-update-student-slider
        :is-opened="isOpened"
        @toggleVisible="close()"
        @updateStudents="(student) => updateItems(student)"/>
    </div>
</template>


<script>
import BasicTable from '@/components/basic/BasicTable.vue'
import AddUpdateStudentSlider from '@/components/students/AddUpdateStudentSlider.vue';
import Button from 'primevue/button';
export default {
    name: 'students-view',
    components: {BasicTable, AddUpdateStudentSlider, Button},
    data: () => {
      return {
        items: [],
        headers: [
          {value: 'id', text: 'id'},
          {value: 'fullName', text: 'Фио'},
          {value: 'birthDate', text: 'Дата рождения'},
          {value: 'admissionYear', text: 'Год поступления'},
        ],
        isOpened: false,
      }
    },
    async mounted() {
      const { data } = await this.$axios.get('/student');
      this.items = data;
    },
    methods: {
      openSidebar() {
        this.isOpened = true;
      },
      close() {
        this.isOpened = false;
      },
      updateItems(item) {
        this.items = [...this.items, item];
      }
    }
    
}
</script>