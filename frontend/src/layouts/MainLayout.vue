<template>
    <div class="app-main-layout">
      <Menubar :model="items" />
      <main 
        class="app-content" 
      >
        <div class="app-page">
          <router-view />
        </div>
      </main>
  
    </div>
</template>

<script>
import Menubar from 'primevue/menubar';

export default {
  name: 'main-layout',
  setup() {

  },
  components: {Menubar},
  data() {
    return {
      items: [
        {
          label: 'Вузы',
          command: () => {
            this.$router.push('/university');
          }
        },
        {
          label: 'Пользователи',
          command: () => {
            this.$router.push('/user');
          }
        },
        {
          label: 'Группы',
          command: () => {
            this.$router.push('/group');
          }
        },
        {
          label: 'Студенты',
          command: () => {
            this.$router.push('/student');
          }
        },
        {
          label: 'Выйти',
          command: () => {
            this.$store.dispatch('user/logout', {context: this});
            this.$router.push('/login');
          }
        },
      ]
    }
  },
  computed: {
    currentUser() {
      return this.$store.state.auth.user;
    }
  },
  mounted() {
    if (!this.$store.getters['user/isLoggedIn']) {
      this.$router.push('/login');
    }
  }
}
</script>
