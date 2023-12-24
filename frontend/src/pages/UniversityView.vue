
import Button from 'primevue/button';
<template>
    <div class="grey darken-1 empty-layout">
        <basic-table
          :items="items"
          :headers="headers"
        />
        <Button type="submit" style="margin-top: 10px;" label="Submit" @Click="openSidebar()"/>
        <add-university-update-slider
        :is-opened="isOpened"
        @toggleVisible="close()"
        @updateUniversity="(university) => updateItems(university)"
        />
    </div>
</template>


<script>
import BasicTable from '@/components/basic/BasicTable.vue'
import Button from 'primevue/button'
import AddUniversityUpdateSlider from '@/components/university/AddUniversityUpdateSlider.vue'
export default {
    name: 'university-view',
    components: {BasicTable, Button, AddUniversityUpdateSlider},
    data: () => {
      return {
        items: [],
        headers: [
          {value: 'id', text: 'id'},
          {value: 'name', text: 'Название'},
        ],
        isOpened: false,
      }
    },
    async mounted() {
      const { data } = await this.$axios.get('/university');
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
        console.log(this.items)
      }
    }
}
</script>