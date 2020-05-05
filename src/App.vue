<template>
  <div id="app">
    <div id="nav">
    </div>
    <router-view/>
    <Footer/>
    <!-- <navbar/> -->
  </div>
</template>

<script>
import Footer from './components/Footer.vue'
// import Navbar from './components/Navbar.vue'

export default {
  name: 'Carrent App',
  components: {
    Footer
    // Navbar
  },
  watch: {
    $route: {
      handler: (to) => {
        document.title = to.meta.title || 'Rental Mobil Kurang Terpercaya | Carrent'
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

</style>
