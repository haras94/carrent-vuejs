<template>
  <div id="app">
    <Navbar v-if="$route.name !== 'Login' && $route.name !== 'Register'"
      @login-click="$store.commit('MODAL_LOGIN_ON')"
    />
    <router-view/>
    <Footer/>
    <ModalContainer
      :modalToggle="modalLogin"
      :modalWrap="false"
      @bg-click="$store.commit('MODAL_LOGIN_OFF')"
    >
      <Login/>
    </ModalContainer>
  </div>
</template>

<script>
import Footer from './components/Footer.vue'
import Navbar from './components/Navbar.vue'
import ModalContainer from './components/base_/ModalContainer.vue'
import Login from './components/ModalLogin.vue'
import { mapState } from 'vuex'

export default {
  name: 'CarrentApp',
  data () {
    return {
    }
  },
  computed: {
    ...mapState([
      'modalLogin'
    ])
  },
  components: {
    Footer,
    Navbar,
    ModalContainer,
    Login
  },
  watch: {
    $route: {
      handler: (to) => {
        document.title = to.meta.title || 'Rental Mobil Terpercaya | Carrent'
      },
      immediate: true
    }
  },
  created () {
    if (localStorage.id) {
      if (localStorage.id.length !== 0) {
        this.$store.dispatch('getApi', {
          url: 'user/' + localStorage.id,
          mutation: 'SET_USER_LOGIN'
        })
      }
    }
    this.$store.dispatch('getApi', {
      url: 'product',
      mutation: 'SET_CARS'
    })
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
.gap {
  width: 1200px;
  margin: 0 auto;
}

</style>
