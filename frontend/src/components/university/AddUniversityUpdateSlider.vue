<template>
  <div>
    <Sidebar v-bind:visible="isOpened" header="Sidebar"
      @update:visible="close()"
    >
      <form @submit="onSubmit" class="edit">
        <label for="login">Название</label>
        <InputText id="login" type="text" v-model="university.name"/>
        <label for="code">Код</label>
        <InputText id="code" type="text" v-model="university.code"/>
        <Button type="submit" style="margin-top: 10px;" label="Submit" />
      </form>
    </Sidebar>
  </div>
</template>

<script>
import Sidebar from 'primevue/sidebar';
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';
export default {
  name: 'add-update-slider',
  components: {Sidebar, InputText, Button},
  props: {
    isOpened:{type: Boolean, default: false},
  },
  data: () => ({
    university: {
      name: '',
      code: '',
    },
  }),
  methods: {
    async onSubmit(e) {
      e.preventDefault();
      const { data } = await this.$axios.post('university', this.university)
      if(data) this.$emit('updateUniversity', data);
    },
    clear() {
      this.university = {
        name: '',
        code: '',
      }
    },
    close() {
      this.clear();
      this.$emit('toggleVisible', this.isOpened)
    }
    },
  }
</script>

<style>
.edit {
  display: flex;
  flex-direction: column;
}
</style>