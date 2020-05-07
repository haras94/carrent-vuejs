<template>
  <div>
    <form>
      <div class="form-group row">
        <label for="staticNama" class="col-sm-2 col-form-label mr-2">Nama</label>
        <div class="col-sm-9">
          <input
            type="text"
            class="form-control-plaintext"
            id="staticNama"
            v-model="userLogin.fullname"
          />
        </div>
      </div>
      <div class="form-group row">
        <label for="staticGender" class="col-sm-2 col-form-label mr-2">Gender</label>
        <div class="col-sm-9">
          <input
            type="text"
            class="form-control-plaintext"
            id="staticGender"
            v-model="gender"
          />
        </div>
      </div>
      <div v-if="withButton || false" class="form-group row">
        <label  for="staticAdress" class="col-sm-2 col-form-label mr-2">Alamat</label>
        <div class="col-sm-9">
          <textarea class="form-control-plaintext" id="staticAdress" rows="3" v-model="userLogin.address"></textarea>
        </div>
      </div>
      <div class="form-group row">
        <label for="staticPhone" class="col-sm-2 col-form-label mr-2">Phone</label>
        <div class="col-sm-9">
          <input
            type="text"
            class="form-control-plaintext"
            id="staticPhone"
            v-model="userLogin.phone"
          />
        </div>
      </div>
      <div class="form-group row">
        <label for="staticEmail" class="col-sm-2 col-form-label mr-2">Email</label>
        <div class="col-sm-9">
          <input
            type="text"
            class="form-control-plaintext"
            id="staticEmail"
            v-model="userLogin.email"
          />
        </div>
      </div>
      <div v-if="withButton || false" class="form-group row">
        <label for="inputPassword" class="col-sm-2 col-form-label mr-2">Password</label>
        <div class="col-sm-9">
          <input type="password" class="form-control-plaintext" id="inputPassword" v-model="userLogin.password"/>
        </div>
      </div>
    </form>
    <footer class="foot">
      <button v-if="withButton || false" class="save" @click="save">Save</button>
    </footer>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Swal from 'sweetalert2'

export default {
  name: 'Form',
  props: ['withButton'],
  data () {
    return {
      gender: this.cek

    }
  },
  computed: {
    ...mapState([
      'userLogin'
    ])
  },
  methods: {
    save () {
      Swal.fire({
        title: 'Data Anda Telah terupdate!',
        icon: 'success',
        showConfirmButton: false,
        timer: 1200
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.foot {
  display: flex;
  justify-content: flex-end;
  width: 100%;
  .save {
    padding: 10px 20px;
    border: none;
    background: #c82022;
    color: #ffffff;
    border-radius: 3px;
  }
}
</style>
