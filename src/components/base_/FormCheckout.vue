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
      <input type="checkbox" class="form-check-input" id="exampleCheck1" @change="ok($event)">
      <label class="form-check-label m-0 p-0" for="exampleCheck1" >Driver</label><br>
      <em style="font-size: 12px">menggunakan addtional driver dikenakan biaya sebesar idr. 50.000</em>
    </div>
    <div class="d-flex flex-column">
      <div class="row">
        <div class="col mt-5">
          <h5 v-if="withButton || false" class="font-weight-bold text-success">Total Harga : IDR: {{ totalPrice }}</h5>
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
import { mapState } from 'vuex'

export default {
  name: 'FormCheckout',
  props: ['withButton'],
  computed: {
    totalPrice () {
      const price = this.carDetail.price_per_day
      const departure = Date.parse(this.departureTime)
      const returnTime = Date.parse(this.returnTime)
      let resultTime = ((returnTime - departure) / 3600000) / 24
      if (resultTime < 0.5) resultTime = 0.5
      if (this.driver) {
        return Math.floor((parseInt(price) * resultTime) + 50000)
      }
      return Math.floor(price * resultTime)
    },
    counter () {
      const departure = Date.parse(this.departureTime)
      const returnTime = Date.parse(this.returnTime)
      return ((returnTime - departure) / 3600000) / 24
    },
    ...mapState([
      'carDetail'
    ])
  },
  data () {
    return {
      driver: false,
      departureTime: new Date().toISOString().split(':')[0] + ':' + new Date().toISOString().split(':')[1],
      returnTime: new Date().toISOString().split(':')[0] + ':' + new Date().toISOString().split(':')[1]
    }
  },
  methods: {
    ok (e) {
      this.driver = e.target.checked
    },
    submit () {
      console.log(this.departureTime)
      this.$router.push('/user/checkout')
    }
  }
}
</script>
