<template>
  <div class="jkxme2">
    <div class="lsmeax">
      <div class="form">
        <h1 class="header">Account Login</h1>
          <form @submit.prevent="login">
            <div v-if="code === 1" class="alertdiv color-red">
              <p class="alert"><i class="fas fa-exclamation-triangle" style="color:#c72e3f"></i> Email Atau Password Salah!</p>
            </div>
            <h1 class="labelemail">EMAIL</h1>
            <div class="formemail">
              <input v-model="$v.email.$model" type="text" class="inputemail put">
            </div>
            <div class="alert-password">
              <p v-if="!$v.email.email">Format Email Salah! Contoh: name@mobil.com</p>
            </div>
            <h1 class="labelemail">PASSWORD</h1>
            <div class="formemail">
              <input v-model="$v.password.$model" type="password" class="inputemail">
            </div>
            <div class="alert-password">
              <p v-if="!$v.password.minLength">Password Minimal 6 karakter!</p>
            </div>
            <!-- <div class="forgot">
            </div> -->
            <div class="checkbox">
              <a href="#">Forgot Password?</a>
              <input type="checkbox" id="checkbox">
              <label for="checkbox">Remember Me</label>
            </div>
            <div class="login">
              <button>Login</button>
              <button id="google"><img src="@/assets/img/Google.svg"> Google</button>
            </div>
          </form>
        <div class="regis">
          <h1>Don't Have Account?</h1>
          <router-link to="/register">Register</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { required, email, minLength } from 'vuelidate/lib/validators'

export default {
  name: 'Login',
  data () {
    return {
      email: '',
      password: '',
      code: 0
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
.alert-password{
  position: relative;
  margin-top: 5px;
  font-size: 14px;
  color: #E15461;
  margin-bottom: 5px;
  height: 16px;
}
.jkxme2{
  position: relative;
  width: 100%;
  height: 100vh;
  background: #ebebeb;
  display: flex;
  justify-content: center;
  align-items: center;
}
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
  width: 205px;
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
  color: green;
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

.checkbox{
  position: relative;
  top: 10px;
  color: #555555;
  height: auto;
}
.checkbox a{
  position: absolute;
  right: 0;
  color: #555555;
  text-decoration: none;
}
.login button{
  color: white;
  padding: 0px 20px;
  height: 50px;
  width: 100%;
  background: #333333;
  border-radius: 27px;
  font-size: 16px;
  border: none;
  outline: none;
  cursor: pointer;
  position: relative;
  margin-bottom: 10px;
}
.login{
  position: relative;
  margin-top: 30px;
}
#google{
  background: white;
  color: black;
  border: 1px solid #333333;
}
.alertdiv{
  background-color: #fff7f7;
  border-radius: 5px;
  font-size: 20px;
  border: 2px solid black;
  width: 100%;
  height: 38px;
  box-sizing: border-box;
  padding: 7px 0px 0 15px;
  margin-bottom: 5px;
}
.color-red{
  border: 2px solid #c72e2e;
}
.alert {
  // margin-left: 40px;
  // margin-top: 8px;
  font-size: 15px;
  // margin-bottom: 8px;
  // margin-right: 20px;
}

</style>
