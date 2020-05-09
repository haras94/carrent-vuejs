<template>
  <div class="landing-page">
    <Carousel />
    <div class="ourService">
      <div class="ourServiceText">
        <h3>Why you should choose us</h3>
      </div>
      <div class="ourServiceCard">
        <div class="card">
          <div class="upside">
            <img
              src="../assets/img/icons8-easy-100.png"
              alt="easy-to-rent"
              width="70px"
              height="70px"
            />
          </div>
          <div class="downside">
            <header>Easy to Rent</header>
            <footer>Our service makes easy to rent a car with simple privacy & policy</footer>
          </div>
        </div>
        <div class="card">
          <div class="upside">
            <img src="../assets/img/icons8-globe-52.png" alt="easy-to-find" />
          </div>
          <div class="downside">
            <header>Easy to Find</header>
            <footer>Our partner available on every city in Indonesia</footer>
          </div>
        </div>
        <div class="card">
          <div class="upside">
            <img src="../assets/img/stopwatch.png" width="70px" height="70px" alt="fast-response" />
          </div>
          <div class="downside">
            <header>Fast Response</header>
            <footer>Our partner also gives best service and</footer>
          </div>
        </div>
      </div>
    </div>
    <div class="partner">
      <div class="partnerText">
        <h3>Our Partner</h3>
      </div>
      <div class="partnerLogo">
        <div class="logoWrap">
          <div class="firstLine">
            <img src="../assets/img/logo-buggati.jpg" alt="buggati" width="120px" height="70px">
            <h5>Ferrari</h5>
            <h5>Bmw</h5>
            <h5>Ford</h5>
            <h5>Audi</h5>
            <h5>Lamborghini</h5>
          </div>
          <div class="secondLine">
            <h5>Toyota</h5>
            <h5>Suzuki</h5>
            <h5>Honda</h5>
            <h5>Wuling</h5>
            <h5>Mazda</h5>
            <h5>Hyundai</h5>
          </div>
          <div class="thirdLine">
            <h5>Volvo</h5>
            <h5>Chevorlet</h5>
            <h5>Nissan</h5>
            <h5>Jeep</h5>
            <h5>Mitsubishi</h5>
            <h5>Daihatsu</h5>
          </div>
        </div>
      </div>
    </div>
    <div class="listCar">
      <header class="text-light">
        <h1>ORDER NOW!</h1>
      </header>
      <div class="cardList">
        <Card v-for="car in cars.data" :key="car.id" :car="car" />
      </div>
      <div class="seeMore">
        <header>See more</header>
        <i class="fas fa-chevron-right"></i>
      </div>
    </div>
    <div class="bestProfile">
      <div class="upProfile">
        <h1>Best Rent Profile</h1>
      </div>
      <div v-for="cardRentail in 1" :key="cardRentail" class="downProfile">
        <cardRentail />
      </div>
    </div>
  </div>
</template>

<script>
import Card from '../components/Card.vue'
import Carousel from '../components/base_/Caroucel.vue'
import cardRentail from '../components/base_/cardRentail.vue'
import { mapState } from 'vuex'

export default {
  name: 'LandingPage',
  components: {
    Card,
    Carousel,
    cardRentail
  },
  computed: {
    ...mapState([
      'cars'
    ])
  },
  created () {
    if (localStorage.role_id === '1') this.$router.push('/admin-page')
  }
}
</script>

<style lang="scss" scoped>
.landing-page {
  display: flex;
  flex-direction: column;
  .parallax {
    width: 100%;
    height: 500px;
    background-color: wheat;
    margin-top: 70px;
    img {
      object-fit: cover;
      width: 100%;
      height: 100%;
      opacity: 0.9;
    }
  }
  .partner {
    width: 100%;
    height: 510px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    .partnerText {
      background-color: #c82022;
      width: 100%;
      height: 70px;
      display: flex;
      align-items: center;
      justify-content: center;
      h3 {
        color: white;
      }
    }
    .partnerLogo {
      background-color: rgba(151, 151, 151, 0.26);
      width: 100%;
      height: 300px;
      display: flex;
      justify-content: center;
      .logoWrap {
        width: 80%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        opacity: 0.6;
        h5 {
          color: rgb(92, 91, 91);
        }
        .firstLine {
          // background-color: #fff;
          width: 100%;
          height: 50px;
          display: flex;
          justify-content: space-around;
        }
        .secondLine {
          // background-color: rgb(134, 134, 134);
          width: 100%;
          height: 50px;
          display: flex;
          justify-content: space-around;
        }
        .thirdLine {
          // background-color: rgb(20, 19, 19);
          width: 100%;
          height: 50px;
          display: flex;
          justify-content: space-around;
        }
      }
    }
  }
  .ourService {
    background-color: #c82022;
    width: 100%;
    height: 600px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    .ourServiceText {
      // background-color: rgb(0, 0, 0);
      width: 100%;
      height: 70px;
      display: flex;
      justify-content: center;
      h3 {
        color: white;
      }
    }
    .ourServiceCard {
      // background-image: url('../assets/img/2018-bugatti-chiron-sport-2.jpg');
      // background-size: cover;
      // background-position: center;
      // background-repeat: no-repeat;
      width: 100%;
      height: 400px;
      display: flex;
      justify-content: center;
      .card {
        background-color: white;
        width: 250px;
        height: 300px;
        transition: ease 0.5s;
        margin: 60px 20px;
        border-radius: 3px;
        overflow: hidden;
        header{
          font-size: 20px;
          text-align: center;
          font-weight: 600;
          line-height: 70px;
        }
        footer{
          font-weight: 500;
          text-align: center;
        }
        &:hover {
          transform: scale(1.1);
          transition: ease 0.5s;
        }
        .upside {
          width: 100%;
          height: 50%;
          background-color: rgba(0, 0, 0, 0.123);
          display: flex;
          justify-content: center;
          align-items: center;
        }
      }
    }
  }
  .listCar {
    background-color: #c82022;
    width: 100%;
    height: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 50px;
    position: relative;
    .cardList {
      display: flex;
      justify-content: center;
      height: 400px;
    }
    .seeMore{
      width: 400px;
      height: 50px;
      position: absolute;
      right: 0;
      bottom: 0;
      display: flex;
      align-items: flex-end;
      justify-content: center;
      cursor: pointer;
      &:hover i{
        transform: translateX(5px);
      }
      header{
        color: white;
        font-weight: 700;
        font-size: 20px;
        padding-bottom: 10px;
      }
      i{
        color: white;
        font-size: 19px;
        padding-left: 15px;
        padding-bottom: 15px;
        transition: ease .2s;
      }
    }
  }
  .bestProfile {
    background-color: #c82022;
    margin-top: 80px;
    width: 100%;
    height: 500px;
    .upProfile {
      width: 100%;
      height: 50px;
      display: flex;
      justify-content: center;
      h1 {
        color: white;
      }
    }
    .downProfile{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    }
  }
}
</style>
