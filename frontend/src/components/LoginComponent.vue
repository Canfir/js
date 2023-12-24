<template>
  <div >
    <form @submit="onSubmit" class="login">
      <label for="login">Логин</label>
      <InputText id="login" type="text" v-model="loginInfo.login"/>
      <label for="password">Пароль</label>
      <InputText id="password" type="password" v-model="loginInfo.password"/>
      <Button type="submit" style="margin-top: 10px;" label="Submit" />
    </form>
  </div>
</template>

<script>
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';
import { mapState } from 'vuex';
export default {
    name: 'login-component',
    props: {},
    data() {
        return {
            loginInfo: {
              login: '',
              password: '',
            },
        };
    },
    components: { InputText, Button },
    methods: {
      async onSubmit(e) {
        e.preventDefault();
        try {
          const { data } = await this.$axios.post('auth/login', this.loginInfo);
          this.$store.dispatch('user/setUser', {context: this, ...data});
          if(data) this.$router.push("/main");
        } catch (e) {
          console.log(e);
          this.$messageError('Ошибка логина', 'Неправильный логин или пароль')
        }
      },
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