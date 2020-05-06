<template>
  <div id="app">
    <Navbar v-if="$route.name !== 'Login' && $route.name !== 'Register'"/>
    <router-view/>
    <Footer/>
  </div>
</template>

<script>
import Footer from './components/Footer.vue'
import Navbar from './components/Navbar.vue'

export default {
  name: 'CarrentApp',
  components: {
    Footer,
    Navbar
  },
  watch: {
    $route: {
      handler: (to) => {
        document.title = to.meta.title || 'Rental Mobil Terpercaya | Carrent'
      },
      immediate: true
    }
  }
}
</script>

<style lang="scss">
@import '@/assets/scss/reset.scss';

#app {
  font-family: Roboto, Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2a2a2a;
}
.our-wrapper {
  margin-top: 70px;
}

</style>
