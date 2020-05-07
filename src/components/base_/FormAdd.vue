<template>
  <div>
    <form>
      <div class="form-group row">
        <label for="staticNama" class="col-sm-2 col-form-label mr-2">Nama Mobil</label>
        <div class="col-sm-9">
          <input type="text" class="form-control" id="staticNama" />
        </div>
      </div>
      <div class="form-group row">
        <label for="staticMerek" class="col-sm-2 col-form-label mr-2">Merek Mobil</label>
        <div class="col-sm-9">
          <input type="text" class="form-control" id="staticMerek" />
        </div>
      </div>
      <div class="form-group row">
        <label for="staticDesc" class="col-sm-2 col-form-label mr-2">Deskripsi mobil</label>
        <div class="col-sm-9">
          <textarea class="form-control" id="staticDesc" rows="3"></textarea>
        </div>
      </div>
      <div class="form-group row">
        <label for="staticSewa" class="col-sm-2 col-form-label mr-2">Harga Sewa</label>
        <div class="col-sm-9">
          <input type="text" class="form-control" id="staticSewa" />
        </div>
        / Hari
      </div>
      <div class="form-group row">
        <label for="staticTransmit" class="col-sm-2 col-form-label mr-2">transmisi</label>
        <div class="col-sm-9">
          <select class="custom-select" id="staticTransmit">
            <option value="1">nama transmisi</option>
          </select>
        </div>
      </div>
      <div class="form-group row">
        <label for="staticBagasi" class="col-sm-2 col-form-label mr-2">kapasitas bagasi</label>
        <div class="col-sm-9">
          <input type="number" class="form-control" id="staticBagasi" />
        </div>
      </div>
      <div class="form-group row">
        <label for="staticEngine" class="col-sm-2 col-form-label mr-2">Tipe Engine</label>
        <div class="col-sm-9">
          <input type="text" class="form-control" id="staticEngine" />
        </div>
      </div>
      <div class="form-group row">
        <label for="staticapacity" class="col-sm-2 col-form-label mr-2">Kapasitas Engine</label>
        <div class="col-sm-9">
          <input type="number" class="form-control" id="staticapacity" />
        </div>
      </div>
      <div class="form-group row">
        <label for="inputPeople" class="col-sm-2 col-form-label mr-2">Kapasitas Orang</label>
        <div class="col-sm-9">
          <input type="number" class="form-control" id="inputPeople" />
        </div>
      </div>
      <div class="form-group row">
        <label for="staticdoor" class="col-sm-2 col-form-label mr-2">Pintu</label>
        <div class="col-sm-9">
          <input type="number" class="form-control" id="staticdoor" />
        </div>
      </div>
      <div class="form-group row">
        <label for="staticManu" class="col-sm-2 col-form-label mr-2">Tahun Manufaktur</label>
        <div class="col-sm-9">
          <input type="date" class="form-control" id="staticManu" />
        </div>
      </div>
      <div class="form-group row">
        <label for="staticFuel" class="col-sm-2 col-form-label mr-2">avg Fuel Consumption</label>
        <div class="col-sm-9">
          <input type="number" class="form-control" id="staticFuel" />
        </div>
      </div>
      <div class="form-group row">
        <label for="staticAribag" class="col-sm-2 col-form-label mr-2">srs Airbag</label>
        <div class="col-sm-9">
          <select class="custom-select" id="staticAirbag">
            <option value="1">Ada</option>
            <option value="2">Tidak Ada</option>
          </select>
        </div>
      </div>
    </form>
    <footer class="foot">
      <button class="save" @click="save">Save</button>
    </footer>
  </div>
</template>

<script>
// import { mapState } from 'vuex'
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
    // cek () {
    //   let kntl = this.userLogin.gender
    //   if (this.userLogin.gender == null) {
    //     kntl = 'kontol'
    //     return kntl
    //   }
    //   return kntl
    // },
    // ...mapState(['userLogin'])
  },
  methods: {
    save () {
      Swal.fire({
        title: 'Makar Succes!',
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
