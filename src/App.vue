<template>
  <div id="app">
    <div id="nav">
    </div>
    <router-view/>
    <Footer/>
  </div>
</template>

<script>
import Footer from './components/Footer.vue'

export default {
  name: 'Carrent App',
  components: {
    Footer
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
