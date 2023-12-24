<template>
  <div id="app">
    <component :is="layout">
      <router-view />
    </component>
  <Toast/>
  </div>
</template>
 
<script>
import DefaultLayout from './layouts/DefaultLayout.vue'
import MainLayout from './layouts/MainLayout.vue'
import Toast from 'primevue/toast'

export default {
  name: 'App',
  computed:{
    layout() {
      return (this.$route.meta.layout || 'default') + '-layout'
    }
  },
  components:  {
    DefaultLayout, MainLayout, Toast
  },
}
</script>

<style>
  @import 'primevue/resources/themes/lara-light-green/theme.css';
</style>
