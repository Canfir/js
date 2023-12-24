<template>
  <div>
    <form>
        <form @submit="onSubmit" class="register">
          <label for="login">Логин</label>
          <InputText id="login" type="text" v-model="loginInfo.login"/>
          <label for="password">Пароль</label>
          <InputText id="password" type="password" v-model="loginInfo.password"/>
          <label for="fullName">Фио</label>
          <InputText id="fullName" type="text" v-model="loginInfo.fullName"/>
          <label for="date">Дата рождения</label>
          <Calendar id="date" type="text" dateFormat="dd.mm.yy" v-model="loginInfo.birthDate"/>
          <Button type="submit" style="margin-top: 10px;" label="Submit" />
        </form>
    </form>
  </div>
</template>

<script>
import Calendar from 'primevue/calendar';
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';


export default {
    name: 'register-component',
    props: {},
    data() {
        return {
            loginInfo: {
              login: '',
              password: '',
              birthDate: '',
              fullName: '',
            },
        };
    },
    components: { InputText, Calendar, Button },
    methods: {
      async onSubmit(e) {
        e.preventDefault();
        try {
          const { data } = await this.$axios.post('auth/register', this.loginInfo);
          if(data) this.$router.push("/login");
        } catch (e) {
          this.$messageError('Ошибка пароля', 'Ошибка! Минимальная длина пароля 8 символов.')
        }
      },
    }
}
</script>
<style scoped>
.register {
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