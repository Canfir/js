export default  {
  install(Vue) {
    const toast = Vue.config.globalProperties.$toast;
    Vue.config.globalProperties.$messageSuccess = (title, msg) => {
        toast.add({ severity: 'success', summary: title, detail: msg, life: 3000 });
    }

    Vue.config.globalProperties.$messageError = (title, msg) => {
        toast.add({ severity: 'error', summary: title, detail: msg, life: 3000 });
    }
  }
}