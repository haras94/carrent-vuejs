<template>
  <form @submit.prevent="submit">
    <div class="form-group">
      <label for="departure-time">Waktu Penjemputan</label>
      <input v-if="checkout" class="form-control" type="datetime-local" v-model="departureTime" id="disabledInput" disabled>
      <input v-else class="form-control" type="datetime-local" v-model="departureTime" id="departure-time">
    </div>
    <div class="form-group">
      <label for="return-time">Waktu Pengembalian</label>
      <input v-if="checkout" class="form-control" type="datetime-local" v-model="returnTime" id="disabledInput" disabled>
      <input v-else class="form-control" type="datetime-local" v-model="returnTime" id="return-time">
    </div>
    <div class="form-check">
      <input v-if="checkout && driver" type="checkbox" class="form-check-input" id="exampleCheck1" @change="ok($event)" checked disabled>
      <input v-if="checkout" type="checkbox" class="form-check-input" id="exampleCheck1" @change="ok($event)" disabled>
      <input v-else type="checkbox" class="form-check-input" id="exampleCheck1" @change="ok($event)">
      <label class="form-check-label m-0 p-0" for="exampleCheck1" >Driver</label><br>
      <em v-if="!checkout" style="font-size: 12px">menggunakan addtional driver dikenakan biaya sebesar idr. 50.000</em>
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
  props: ['withButton', 'checkout'],
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
    est () {
      let counter = this.counter
      if (counter < 1) {
        counter = counter * 24 + ' Jam'
        return counter
      }
      counter = counter + ' Hari'
      return counter
    },
    ...mapState([
      'carDetail',
      'userLogin'
    ])
  },
  data () {
    return {
      driver: this.checkout ? this.checkout.driver : false,
      departureTime: this.checkout ? this.checkout.departure_time : new Date().toISOString().split(':')[0] + ':' + new Date().toISOString().split(':')[1],
      returnTime: this.checkout ? this.checkout.return_time : new Date().toISOString().split(':')[0] + ':' + new Date().toISOString().split(':')[1]
    }
  },
  methods: {
    ok (e) {
      this.driver = e.target.checked
    },
    submit () {
      const data = {
        user_id: this.userLogin.id,
        product_id: this.carDetail.id,
        rent_estimation: this.est,
        status: 1,
        departure_time: this.departureTime,
        return_time: this.returnTime,
        forfeit: 0,
        payment: 0,
        grand_total: this.totalPrice,
        driver: this.driver
      }
      this.$store.commit('SET_CHECKOUT', data)
      this.$store.dispatch('getApi', {
        url: 'product/' + this.carDetail.id,
        mutation: 'SET_CAR_IN_CHECKOUT'
      }).then(res => {
        this.$router.push('/user/checkout')
      })
    }
  }
}
</script>
