<template>
  <div>
    <Sidebar v-bind:visible="isOpened" header="Sidebar"
      @update:visible="close()"
    >
      <form @submit="onSubmit" class="edit">
        <label for="login">Название</label>
        <InputText id="login" type="text" v-model="group.name"/>
        <label for="login">Код</label>
        <InputText id="login" type="text" v-model="group.code"/>
        <label for="univer">Универ</label>
        <Dropdown id="univer" v-model="selectedUniversity" :options="university" optionLabel="name" placeholder="Выберите универ" class="w-full md:w-14rem" />
        <Button type="submit" style="margin-top: 10px;" label="Submit" />
      </form>
    </Sidebar>
  </div>
</template>

<script>
import Sidebar from 'primevue/sidebar';
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';
import Dropdown from 'primevue/dropdown';
export default {
  name: 'add-update-slider',
  components: {Sidebar, InputText, Button, Dropdown},
  props: {
    isOpened:{type: Boolean, default: false},
  },
  data: () => ({
    university: [],
    group: {
      name: '',
      universityCode: '',
      code: '',
    },
    selectedUniversity: null,
  }),
  methods: {
    async onSubmit(e) {
      e.preventDefault();
      const { data } = await this.$axios.post('group', this.group)
      if(data) this.$emit('updateGroup', data);
    },
    clear() {
      this.group = {
        name: '',
        universityCode: '',
      }
    },
    close() {
      this.clear();
      this.$emit('toggleVisible', this.isOpened)
    }
    },
    async mounted() {
      const univers = await this.$axios.get('university')
      this.university = univers.data;
    },
    watch: {
      selectedUniversity: {
        handler(val) {
          if (val) {
            this.group.universityCode = val.code;
          }
        }
      }
    }
  }
</script>

<style>
.edit {
  display: flex;
  flex-direction: column;
}
</style>