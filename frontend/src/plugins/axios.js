const API_URL = 'http://localhost:3000'

import axios from "axios"
export default  {
  install(Vue) {
    const instance = axios.create({
      baseURL: API_URL,
      timeout: 1000,
      headers: {'Access-Control-Allow-Origin': '*'}
    });
    
    Vue.config.globalProperties.$axios = instance
  }
}