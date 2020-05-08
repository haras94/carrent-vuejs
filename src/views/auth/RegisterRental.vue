<template>
<div class="slzkm3">
  <div class="axvbwe">
    <div class="form" >
      <h1 class="header">Daftar Toko Rental</h1>
      <div v-if="code === 1" class="alertdiv color-green">
        <p class="alert">{{error}}</p>
      </div>
      <div v-if="code === 2" class="alertdiv color-red">
        <p class="alert"><i class="fas fa-exclamation-triangle" style="color:#c72e3f"></i> {{error}} <router-link to="/login">Masuk</router-link> </p>
      </div>
      <h1 class="labelemail">Email</h1>
      <div class="formemail">
        <input v-model="$v.email.$model" type="email" class="inputemail">
        <div class="alert-password">
          <p v-if="!$v.email.email">Format Email Anda Salah!</p>
        </div>
      </div>
      <h1 class="labelemail">Password</h1>
      <div class="formemail">
        <input v-model="$v.password.$model" type="password" class="inputemail">
        <div class="alert-password">
          <p v-if="!$v.password.minLength">Password Minimal 6 Karakter!</p>
        </div>
      </div>
      <!-- <h1 class="labelemail">Nama Rental</h1>
      <div class="formemail">
        <input v-model="$v.name.$model" type="text" class="inputemail">
      </div>
      <h1 class="labelemail">Nama Pemilik</h1>
      <div class="formemail">
        <input v-model="$v.yourname.$model" type="text" class="inputemail">
      </div>
      <h1 class="labelemail">Alamat</h1>
      <div class="formemail">
        <input v-model="$v.alamat.$model" type="text" class="inputemail">
      </div>
      <h1 class="labelemail">No. Handphone</h1>
      <div class="formemail">
        <input v-model="$v.nohp.$model" type="number" class="inputemail">
      </div> -->
      <div class="login">
        <button
        id="button-success"
        @click="selanjutnya"
        v-if="$v.email.email && $v.email.required && $v.password.minLength && $v.password.required">Selanjutnya</button>
        <button
        v-if="!$v.email.email || !$v.email.required || !$v.password.required || !$v.password.minLength"
        class="default">Selanjutnya</button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import { required, email, minLength } from 'vuelidate/lib/validators'
import Axios from 'axios'

export default {
  name: 'RegisterRental',
  data () {
    return {
      email: '',
      password: '',
      name: '',
      yourname: '',
      alamat: '',
      nohp: null
    }
  },
  methods: {
    selanjutnya () {
      Axios.post('')
    }
  },
  validations: {
    name: {
      required
    },
    alamat: {
      required
    },
    yourname: {
      required
    },
    nohp: {
      required
    },
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
.slzkm3{
  position: relative;
  width: 100%;
  height: 100vh;
  background: #ebebeb;
  display: flex;
  justify-content: center;
  align-items: center;
}
.axvbwe{
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
.alertdiv{
  background-color: white;
  border-radius: 5px;
  font-size: 20px;
  border: 2px solid black;
  width: 100%;
  height: 38px;
  box-sizing: border-box;
  margin-bottom: 5px;
}
.alertdiv a{
  text-decoration: none;
  color: #c82022;
}
.color-green{
  border: 2px solid #12C200;
}
.color-red{
  border: 2px solid #c82022;
}
.alert {
  font-size: 15px;
  position: relative;
  padding: 0;
  left: 15px;
  top: 5px;
}
.labelemail{
  font-size: 13px;
  color: #555555;
  font-weight: bold;
  margin-bottom: 10px;
}
.formemail{
  width: 100%;
}
.inputemail{
  width: 100%;
  font-size: 18px;
  color: #555555;
  height: 40px;
  padding-left: 20px;
  background: transparent;
  border: 1px solid #886969;
  outline: none;
  // margin-bottom: 5px;
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
}
.forgot a{
  position: relative;
  float: right;
  top: -10px;
  color: #555555;
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
  margin-top: 15px;
}
.regis{
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

</style>
