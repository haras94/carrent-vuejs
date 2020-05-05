<template>
  <div id="app">
    <div id="nav">
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'Carret App',
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
  text-align: center;
  color: #2a2a2a;
}

</style>
