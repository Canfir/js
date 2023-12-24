
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import PrimeVue from 'primevue/config';
import axios from './plugins/axios';
import helpers from './plugins/helpers';
import store from './store';
import ToastService from 'primevue/toastservice';
const app = createApp(App)

app.use(router)
app.use(PrimeVue)
app.use(store)
app.use(axios)
app.use(ToastService)
app.use(helpers)
app.mount('#app')
