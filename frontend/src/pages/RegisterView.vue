<template>
    <div class="grey darken-1 empty-layout">
        <register-component/>
    </div>
</template>


<script>

import RegisterComponent from '../components/RegisterComponent.vue'
export default {
    name: 'register-view',
    components: { RegisterComponent },
    mounted() {
        if (this.$store.getters['user/isLoggedIn']) {
            this.$router.push('/main');
        }
    }
    
}
</script>