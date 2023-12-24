<template>
    <div class="grey darken-1 empty-layout">
        <login-component/>
    </div>
</template>


<script>

import LoginComponent from '../components/LoginComponent.vue'
export default {
    name: 'login-view',
    components: { LoginComponent },
    mounted() {
        console.log(this.$store.getters)
        if (this.$store.getters['user/isLoggedIn']) {
            this.$router.push('/main');
        }
    }
}
</script>