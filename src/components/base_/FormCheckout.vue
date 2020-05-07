<template>
  <form @submit.prevent="submit">
    <div class="form-group">
      <label for="departure-time">Waktu Penjemputan</label>
      <input class="form-control" type="datetime-local" v-model="departureTime" id="departure-time">
    </div>
    <div class="form-group">
      <label for="return-time">Waktu Pengembalian</label>
      <input class="form-control" type="datetime-local" v-model="returnTime" id="return-time">
    </div>
    <div class="form-check">
      <input type="checkbox" class="form-check-input" id="exampleCheck1">
      <label class="form-check-label" for="exampleCheck1">Driver</label>
    </div>
    <div class="d-flex flex-column">
      <div class="row">
        <div class="col mt-5">
          <h5 class="font-weight-bold text-success">Total Harga Rp. 120000</h5>
        </div>
      </div>
      <div v-if="withButton || false" class="row align-self-end">
        <div class="col">
          <button class="btn btn-danger">Konfirmasi Sewa</button>
        </div>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  name: 'FormCheckout',
  props: ['withButton'],
  data () {
    return {
      departureTime: new Date().toISOString().split(':')[0] + ':' + new Date().toISOString().split(':')[1],
      returnTime: new Date().toISOString().split(':')[0] + ':' + new Date().toISOString().split(':')[1]
    }
  },
  methods: {
    submit () {
      console.log(this.departureTime)
    }
  }
}
</script>
