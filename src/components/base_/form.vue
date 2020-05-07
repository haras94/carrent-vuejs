<template>
  <div>
    <form>
      <div class="form-group row">
        <label for="staticEmail" class="col-sm-2 col-form-label mr-2">Nama</label>
        <div class="col-sm-9">
          <input
            type="text"
            readonly
            class="form-control-plaintext"
            id="staticEmail"
            value="Isyana Sarasvati"
          />
        </div>
      </div>
      <div class="form-group row">
        <label for="staticEmail" class="col-sm-2 col-form-label mr-2">Gender</label>
        <div class="col-sm-9">
          <input
            type="text"
            readonly
            class="form-control-plaintext"
            id="staticEmail"
            value="perempuan"
          />
        </div>
      </div>
      <div v-if="withButton || false" class="form-group row">
        <label  for="staticEmail" class="col-sm-2 col-form-label mr-2">Alamat</label>
        <div class="col-sm-9">
          <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
        </div>
      </div>
      <div class="form-group row">
        <label for="staticEmail" class="col-sm-2 col-form-label mr-2">Phone</label>
        <div class="col-sm-9">
          <input
            type="text"
            readonly
            class="form-control-plaintext"
            id="staticEmail"
            value="081280908977"
          />
        </div>
      </div>
      <div class="form-group row">
        <label for="staticEmail" class="col-sm-2 col-form-label mr-2">Email</label>
        <div class="col-sm-9">
          <input
            type="text"
            readonly
            class="form-control-plaintext"
            id="staticEmail"
            value="Isyana@mail.com"
          />
        </div>
      </div>
      <div v-if="withButton || false" class="form-group row">
        <label for="inputPassword" class="col-sm-2 col-form-label mr-2">Password</label>
        <div class="col-sm-9">
          <input type="password" class="form-control" id="inputPassword" />
        </div>
      </div>
    </form>
    <footer class="foot">
      <button v-if="withButton || false" class="save" @click="save">Save</button>
    </footer>
  </div>
</template>

<script>
import Swal from 'sweetalert2'

export default {
  name: 'form',
  props: ['withButton'],
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
