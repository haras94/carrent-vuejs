<template>
<div class="lsmeax">
  <div class="form">
    <h1 class="header">Masuk Akun</h1>
        <div v-if="code === 1" class="alertdiv color-red">
          <p class="alert"><i class="fas fa-exclamation-triangle" style="color:#c72e3f"></i> {{error}}</p>
        </div>
        <h1 class="labelemail">EMAIL</h1>
        <div class="formemail">
          <input @keydown.enter="login" v-model="$v.email.$model" type="text" class="inputemail put">
        </div>
        <div class="alert-password">
          <p v-if="!$v.email.email">Format Email Salah! Contoh: name@email.com</p>
        </div>
        <h1 class="labelemail">Kata Sandi</h1>
        <div class="formemail">
          <input @keydown.enter="login" v-model="$v.password.$model" type="password" class="inputemail">
        </div>
        <div class="alert-password">
          <p v-if="!$v.password.minLength">Kata Sandi Minimal 6 karakter!</p>
        </div>
        <div class="checkbox">
          <a href="#">Lupa Kata Sandi?</a>
          <input type="checkbox" id="checkbox">
          <label for="checkbox">Ingat Saya</label>
        </div>
        <div class="login">
          <button
          id="button-success"
          @click="login"
          v-if="$v.email.email && $v.email.required && $v.password.minLength && $v.password.required">Masuk</button>
          <button
          v-if="!$v.email.email || !$v.email.required || !$v.password.required || !$v.password.minLength"
          class="default">Masuk</button>
          <button id="google"><img src="@/assets/img/Google.svg"> Masuk Dengan Google</button>
        </div>
    <div class="regis">
      <h1>Belum Punya Akun?</h1>
      <router-link to="/register">Daftar</router-link>
    </div>
  </div>
</div>
</template>

<script>
// import Axios from 'axios'
import { required, email, minLength } from 'vuelidate/lib/validators'

export default {
  name: 'ModalLogin',
  data () {
    return {
      email: '',
      password: '',
      code: 0,
      error: false
    }
  },
  methods: {
    login () {
      this.$store.dispatch('postApi', {
        url: 'user/login',
        data: {
          email: this.email,
          password: this.password
        }
      })
        .then((res) => {
          console.log(res)
          if (res.status === 203) {
            this.code = 1
            this.error = res.messages
          }
          // if (res.data.status === 0) {
          //   this.code = 1
          //   this.error = 'Email Belum Di Aktivasi'
          // }
          if (res.data.status === 0) {
            this.code = 0
            localStorage.id = res.data.id
            this.$store.commit('MODAL_LOGIN_OFF')
            this.code = 0
            this.$router.go('/')
          }
        })
        .catch((err) => {
          console.log(err)
        })
    }
  },
  validations: {
    email: {
      required,
      email
    },
    password: {
      required,
      minLength: minLength(6)
    }
  }

}
</script>

<style lang="scss" scoped>
.lsmeax{
  border-radius: 10px;
  width: 560px;
  height: auto;
  padding-top: 50px;
  padding-bottom: 40px;
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;
}
.form{
  width: 420px;
  height: auto;
}
.header{
  font-size: 30px;
  font-weight: bold;
  text-transform: uppercase;
  color: #555555;
  margin-bottom: 10px;
}
.regis{
  height: 24px;
  width: 185px;
  margin-top: 10px;
}
.regis h1{
  position: absolute;
  font-size: 15px;
}
.regis a{
  position: relative;
  float: right;
  text-decoration: none;
  top: -3px;
  color: #c82022;
}
.labelemail{
  font-size: 13px;
  color: #555555;
  font-weight: bold;
  margin-bottom: 20px;
}
.formemail{
  width: 100%;
}
.inputemail{
  width: 100%;
  font-size: 18px;
  color: #555555;
  height: 45px;
  padding-left: 20px;
  background: transparent;
  border: 1px solid #886969;
  outline: none;
  box-sizing: border-box;
  border-radius: 5px;
}
.alert-password{
  position: relative;
  margin-top: 5px;
  font-size: 14px;
  color: #c82022;
  margin-bottom: 5px;
  height: 16px;
}
.checkbox{
  position: relative;
  top: 10px;
  color: #555555;
  height: auto;
}
.checkbox a{
  position: absolute;
  right: 0;
  color: #c82022;
  text-decoration: none;
}
.login button{
  color: white;
  padding: 0px 20px;
  height: 50px;
  width: 100%;
  border-radius: 27px;
  font-size: 16px;
  border: none;
  outline: none;
  cursor: not-allowed;
  position: relative;
  margin-bottom: 10px;
}
#button-success{
  background: #c82022;
  cursor: pointer;
}
.login{
  position: relative;
  margin-top: 30px;
}
#google{
  background: white;
  color: black;
  border: 1px solid #333333;
  cursor: pointer;
}
.alertdiv{
  background-color: #fff7f7;
  border-radius: 5px;
  font-size: 20px;
  border: 2px solid black;
  width: 100%;
  height: 38px;
  box-sizing: border-box;
  margin-bottom: 5px;
}
.color-red{
  border: 2px solid #c72e2e;
}
.alert {
  font-size: 15px;
  position: relative;
  padding: 0;
  left: 15px;
  top: 5px;
}

</style>
