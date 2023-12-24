<template>
  <div>
    <Sidebar v-bind:visible="isOpened" header="Sidebar"
      @update:visible="close()"
    >
      <form @submit="onSubmit" class="edit">
        <label for="login">Логин</label>
        <InputText id="login" type="text" v-model="user.login"/>
        <div v-if="!id">
          <label for="password">Пароль</label>
          <InputText id="password" type="password" v-model="user.password"/>
        </div>
        <label for="fullName">Фио</label>
        <InputText id="fullName" type="text" v-model="user.fullName"/>
        <label for="date">Дата рождения</label>
        <Calendar id="date" dateFormat="dd.mm.yy" v-model="user.birthDate"/>
        <Button type="submit" style="margin-top: 10px;" label="Submit" />
      </form>
    </Sidebar>
  </div>
</template>

<script>
import Sidebar from 'primevue/sidebar';
import InputText from 'primevue/inputtext';
import Calendar from 'primevue/calendar';
import Button from 'primevue/button';
export default {
  name: 'add-update-slider',
  components: {Sidebar, InputText, Calendar, Button},
  props: {
    isOpened:{type: Boolean, default: false},
    id: {type: Number, default: null}
  },
  data: () => ({
    user: {
      login: '',
      password: '',
      fullName: '',
      birthDate: '',
    },
  }),
  methods: {
    async onSubmit(e) {
      e.preventDefault();
      let data;
      if(this.user.id) {
         data  = await this.$axios.put('user', this.user)
      } else {
         data = await this.$axios.post('user', this.user)
      }
      if (data.data) this.$emit('updateUser', data.data);
    },
    clear() {
      this.user = {
        login: '',
        password: '',
        fullName: '',
        birthDate: '',
      }
    },
    close() {
      console.log('close');
      this.clear();
      this.$emit('toggleVisible', this.isOpened)
    }
  },
  watch: {
    id: {
      async handler(val) {
        this.clear();
        console.log(val);
        if (val) {
          const { data } = await this.$axios(`user/${val}`);
          if (data) {
            this.user.id = data.id;
            this.user.login = data.login;
            this.user.fullName = data.fullName
            this.user.birthDate = data.birthDate
          }
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