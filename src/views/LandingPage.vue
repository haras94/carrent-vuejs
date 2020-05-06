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
          <div class="downside"></div>
        </div>
        <div class="card">
          <div class="upside">
            <img src="../assets/img/icons8-globe-52.png" alt="easy-to-find" />
          </div>
          <div class="downside"></div>
        </div>
        <div class="card">
          <div class="upside">
            <img src="../assets/img/stopwatch.png" width="70px" height="70px" alt="fast-response" />
          </div>
          <div class="downside"></div>
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
            <h5>Buggati</h5>
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
      <Card />
      <footer class="foot"></footer>
    </div>
    <div class="bestProfile">
      <div class="upProfile">
        <h1>Best Rent Profile</h1>
      </div>
      <div class="downProfile"></div>
    </div>
  </div>
</template>

<script>
import Card from '../components/Card.vue'
import Carousel from '../components/base_/Caroucel.vue'

export default {
  name: 'LandingPage',
  components: {
    Card,
    Carousel
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
      // background-color: rgb(235, 165, 35);
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
        &:hover {
          transform: scale(1.1);
          transition: ease 0.5s;
        }
        .upside {
          width: 100%;
          height: 50%;
          background-color: rgba(128, 128, 128, 0.123);
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
    height: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;
    .cardList {
      background-color: white;
      width: 300px;
      height: 250px;
      border-radius: 3px;
      overflow: hidden;
      &:active {
        background-color: rgba(128, 128, 128, 0.24);
      }
      .upside {
        background-color: rgba(128, 128, 128, 0.233);
        width: 100%;
        height: 60%;
        img {
          object-fit: cover;
          width: 100%;
          height: 100%;
        }
      }
      .downside {
        width: 100%;
        height: 40%;
        .headCard {
          width: 100%;
          height: 30px;
          p {
            font-size: 20px;
            font-weight: 500;
          }
        }
        .bodyCard {
          width: 10%;
          height: 20px;
          display: flex;
          img {
            object-fit: contain;
            width: 100%;
            height: 100%;
          }
        }
      }
    }
  }
  .bestProfile {
    background-color: #000000;
    margin-top: 80px;
    width: 100%;
    height: 500px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    .upProfile {
      width: 100%;
      height: 50px;
      display: flex;
      justify-content: center;
      h1 {
        color: white;
      }
    }
    .downProfile {
      background-color: beige;
      margin-top: 40px;
      width: 100%;
      height: 300px;
    }
  }
}
</style>
