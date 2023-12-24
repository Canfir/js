<template>
    <div class="grey darken-1 empty-layout">
        <basic-table
          :items="formattedItems"
          :headers="headers"
        />
        <Button type="submit" style="margin-top: 10px;" label="Submit" @Click="openSidebar()"/>
        <add-group-update-slider-vue
        :is-opened="isOpened"
        @toggleVisible="close()"
        @updateGroup="(group) => updateItems(group)"
        />
    </div>  
</template>


<script>
import BasicTable from '@/components/basic/BasicTable.vue'
import Button from 'primevue/button'
import AddGroupUpdateSliderVue from '@/components/groups/AddGroupUpdateSlider.vue'
export default {
    name: 'groups-view',
    components: {BasicTable, Button, AddGroupUpdateSliderVue},
    data: () => {
      return {
        items: [],
        headers: [
          {value: 'id', text: 'id'},
          {value: 'name', text: 'Название'},
          {value : 'university', text: 'универ'}
        ],
        isOpened: false,
      }
    },
    async mounted() {
      const { data } = await this.$axios.get('/group');
      this.items = data;
    },
    computed: {
      formattedItems() {
        console.log(this.items);
        return this.items.map(item => ({id: item.id, name: item.name, code: item.code, university: item.university?.name}))
      },
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