<template>
  <div class="container-fluid our-wrapper">
    <div class="pembungkus-aja" v-if="rentallerDetail.id !== undefined">
      <div class="info-user row">
        <section class="image-user col-md-4">
          <img src="../assets/img/isyangif.gif" alt="foto" class="img-user" />
        </section>
        <section class="flash-info col-md-6">
          <article class="name-user">
            <h1>{{ rentallerDetail.rental_name }}</h1>
          </article>
          <article class="adress">
            <i class="fas fa-map-pin mr-4"></i>
            <p>{{ rentallerDetail.address }}</p>
          </article>
          <article class="adress">
            <i class="far fa-envelope mr-4"></i>
            <p>{{ rentallerDetail.email }}</p>
          </article>
          <article class="adress">
            <i class="fas fa-phone-alt mr-4"></i>
            {{ rentallerDetail.phone_number || '-' }}
          </article>
          <article class="adress">
            <i class="fas fa-car mr-4"></i>
            <p>10 armada</p>
          </article>
          <article class="adress">
            <i class="fas fa-star text-warning mr-1" v-for="star in 5" :key="star"></i>
          </article>
        </section>
      </div>
      <div class="sub-menu">
        <section class="tablist">
          <div class="tab">
            <section class="menu" @click="listCar">
              <p  class="m-0 p-2">List Car</p>
            </section>
            <section class="menu" @click="enableCar">
              <p  class="m-0 p-2">Enable Car</p>
            </section>
            <section class="menu"
              @click="info"
              v-if="userLogin.id === parseInt($route.params.idRentaler)"
            >
              <p  class="m-0 p-2">Request</p>
            </section>
            <section class="menu"
              v-if="userLogin.id === parseInt($route.params.idRentaler)"
            >
              <router-link :to="'/' + $route.params.idRentaler + '/add-car'"><p  class="m-0 p-2">Add Car</p></router-link>
            </section>
          </div>
        </section>
        <menuListCar v-bind:tablist="tablist" v-bind:cars="carsOnRentallerDetail" />
      </div>
    </div>
    <PageNotFound v-else
      code="403"
      msg="Mohon maaf rentaler yang anda cari tidak ditemukan"
    />
  </div>
</template>

<script>
import menuListCar from '../components/base_/menuListCar.vue'
import PageNotFound from '../views/PageNotFound.vue'
import { mapState } from 'vuex'

export default {
  name: 'RentalerDetail',
  components: {
    menuListCar,
    PageNotFound
  },
  data () {
    return {
      tablist: 'List Car'
    }
  },
  computed: {
    carsOnRentallerDetail () {
      const idRentaler = this.$route.params.idRentaler
      const array = this.$store.state.cars.data.filter(item => item.rentaller_id === parseInt(idRentaler))
      const data = { data: array }
      return data
    },
    ...mapState([
      'rentallerDetail',
      'userLogin',
      'cars'
    ])
  },
  methods: {
    listCar () {
      this.tablist = 'List Car'
      document.querySelector('.list-car').style.display = 'flex'
      document.querySelector('.enable-car').style.display = 'none'
      document.querySelector('.more-info').style.display = 'none'
    },
    enableCar () {
      this.tablist = 'Enable Car'
      document.querySelector('.enable-car').style.display = 'flex'
      document.querySelector('.list-car').style.display = 'none'
      document.querySelector('.more-info').style.display = 'none'
    },
    info () {
      this.tablist = 'Request'
      document.querySelector('.more-info').style.display = 'flex'
      document.querySelector('.enable-car').style.display = 'none'
      document.querySelector('.list-car').style.display = 'none'
    }
  },
  created () {
    const idRentaler = this.$route.params.idRentaler
    this.$store.dispatch('getApi', {
      url: `rentaller/${idRentaler}`,
      mutation: 'SET_RENTALLER_DETAIL'
    })
  }
}
</script>

<style lang="scss" scoped>
.container-fluid {
  display: flex;
  flex-direction: column;
  font-family: "Roboto", sans-serif;
  .info-user {
    display: flex;
    background: #c82022;
    padding: 16px;
    .image-user {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 410px;
      padding: 16px;
      margin-left: 20px;
      margin-right: 50px;
      .img-user {
        width: 350px;
        height: 350px;
        border-radius: 50%;
        border: 2px solid #ffffff;
        object-fit: cover;
      }
    }
    .flash-info {
      display: flex;
      flex-direction: column;
      justify-content: center;
      height: 410px;
      margin-left: 50px;
      font-family: "Roboto", sans-serif;
      .name-user h1 {
        font-size: 30px;
        color: #ffffff;
        padding-bottom: 10px;
        border-bottom: 2px solid #ffffff;
        margin-bottom: 10px;
      }
      .adress {
        width: 100%;
        margin-bottom: 10px;
        display: flex;
        justify-self: start;
        color: #ffffff;
        font-size: 17px;
        text-align: left;
      }
    }
  }
  .sub-menu {
    display: flex;
    padding: 16px;
    .tablist {
      width: 20%;
      .tab {
        width: 200px;
        background: #ffffff;
        box-shadow: rgba(0, 0, 0, 0.164) 0px 2px 10px 0px;
        margin: 20px 0 0 50px;
        padding: 16px;
        .menu {
          display: flex;
          flex-direction: column;
          font-size: 16px;
          font-weight: 600;
          width: 100%;
          text-align: left;
          cursor: pointer;
        }
        .menu:hover {
          background: #f8f6f6;
        }
      }
    }
  }
}
</style>
