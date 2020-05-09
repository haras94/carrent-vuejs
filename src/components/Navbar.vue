<template>
  <div class="navbarParent">
    <router-link to="/" class="navLogo"><h1>CARRENT</h1></router-link>
    <div class="navSearch">
      <img src="../assets/img/search.svg" alt="search" width="20px" height="20px">
      <input type="text" placeholder="Search">
      </div>
    <div v-if="userLogin.id === undefined" class="navAdditional">
      <a @click="$emit('login-click')" class="btn-login"><p>Login</p></a>
      <router-link to="/register" class="btn-register"><p>Register</p></router-link>
    </div>
    <div
      v-else class="navAdditional"
      @mouseenter="dropdown = true"
      @mouseleave="dropdown = false"
    >
      <router-link to="/user">
        <btnprofile />
      </router-link>
      <div class="user-login__detail" :class="{ 'dropdown': dropdown }">
        <ul>
          <li>Setting</li>
          <li @click="logout" >Logout</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import btnprofile from '../components/base_/btnProfile'

export default {
  name: 'Navbar',
  data () {
    return {
      dropdown: false
    }
  },
  components: {
    btnprofile
  },
  computed: {
    ...mapState([
      'userLogin'
    ])
  },
  methods: {
    logout () {
      delete localStorage.id
      this.$router.go()
      this.$router.push('/login')
    }
  }
}
</script>

<style lang="scss" scoped>
a {
  text-decoration: none;
}
.user-login__detail {
  width: 170px;
  height: 0px;
  background-color: white;
  position: absolute;
  z-index: 21;
  top: 100%;
  right: 45px;
  overflow: hidden;
  transition: .2s;
  border-radius: 3px;
  li {
    padding: 10px 20px;
    cursor: pointer;
    &:hover {
      background-color: rgba(0, 0, 0, 0.061);
    }
  }
  &.dropdown {
    height: 100px;
  }
}
.navbarParent{
  background-color: #c82022;
  height: 70px;
  display: flex;
  justify-content: space-between;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.12);
  z-index: 20;
  .navLogo{
    width: 180px;
    margin-left: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    h1{
      color: white;
      font-weight: bold;
      margin: 0;
    }
  }
  .navSearch{
    // background-color: sandybrown;
    width: 600px;
    display: flex;
    align-items: center;
    position: relative;
    input{
      width: 100%;
      height: 50%;
      border-radius: 3px;
      outline: none;
      border: none;
      padding-left: 50px;
    }
    img{
      position: absolute;
      margin-left: 15px;
    }
  }
  .navAdditional{
    position: relative;
    width: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    .trolly{
      width: 30px;
      height: 30px;
      position: absolute;
      left: 120px;
      img{
        object-fit: contain;
        width: 100%;
        height: 100%;
      }
    }
    .btn-login{
      border: 3px solid white;
      border-radius: 3px;
      width: 120px;
      height: 55%;
      position: absolute;
      right: 170px;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      p{
        color: white;
        margin: 0;
      }
    }
    .btn-register{
      background-color: white;
      border: none;
      width: 120px;
      height: 55%;
      position: absolute;
      right: 40px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 3px;
      p{
        color: #C93624;
        margin: 0;
      }
    }
  }
}
</style>
