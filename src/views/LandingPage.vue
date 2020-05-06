<template>
  <div class="landing-page">
    <div class="parallax">
      <img src="../assets/img/2018-bugatti-chiron-sport-2.jpg" alt="">
    </div>
    <div class="partner">
      <div class="partnerText"><h1>Our Partner</h1></div>
      <div class="partnerLogo">
        <div class="logoWrap">
          <div class="firstLine">
            <h3>Buggati</h3>
            <h3>Ferrari</h3>
            <h3>Bmw</h3>
            <h3>Ford</h3>
            <h3>Audi</h3>
            <h3>Lamborghini</h3>
          </div>
          <div class="secondLine">
            <h3>Toyota</h3>
            <h3>Suzuki</h3>
            <h3>Honda</h3>
            <h3>Wuling</h3>
            <h3>Mazda</h3>
            <h3>Hyundai</h3>
          </div>
          <div class="thirdLine">
            <h3>Volvo</h3>
            <h3>Chevorlet</h3>
            <h3>Nissan</h3>
            <h3>Jeep</h3>
            <h3>Mitsubishi</h3>
            <h3>Daihatsu</h3>
          </div>
        </div>
      </div>
    </div>
    <div class="ourService">
      <div class="ourServiceText"><p>Why you should choose us</p></div>
      <div class="ourServiceCard">
        <div class="card">
          <div class="upside">
            <img src="../assets/img/icons8-easy-100.png" alt="easy-to-rent" width="70px" height="70px">
          </div>
          <div class="downside"></div>
        </div>
        <div class="card">
          <div class="upside"><img src="../assets/img/icons8-globe-52.png" alt="easy-to-find">
          </div>
          <div class="downside"></div>
        </div>
        <div class="card">
          <div class="upside">
            <img src="../assets/img/stopwatch.png" width="70px" height="70px" alt="fast-response">
          </div>
          <div class="downside"></div>
        </div>
      </div>
    </div>
    <div class="listCar">
      <div class="upperSide"></div>
      <div class="downSide"></div>
    </div>
    <div class="bestProfile">
      <div class="upProfile"><h1>Best Rent Profile</h1></div>
      <div class="downProfile"></div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'LandingPage'
}
</script>

<style lang="scss" scoped>
.landing-page{
  display: flex;
  flex-direction: column;
  .parallax{
    width: 100%;
    height: 500px;
    background-color: wheat;
    margin-top: 70px;
    // opacity: .9;
    img{
      object-fit: cover;
      width: 100%;
      height: 100%;
    }
  }
  .partner{
    // background-color: wheat;
    width: 100%;
    height: 510px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    .partnerText{
      background-color: #C93624;
      width: 100%;
      height: 70px;
      display: flex;
      align-items: center;
      justify-content: center;
      h1{
        color: white;
      }
    }
    .partnerLogo{
      background-color: rgba(151, 151, 151, 0.26);
      width: 100%;
      height: 300px;
      display: flex;
      justify-content: center;
      .logoWrap{
        width: 80%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        opacity: .6;
        h3{
          color: rgb(92, 91, 91);
        }
        .firstLine{
          // background-color: #fff;
          width: 100%;
          height: 50px;
          display: flex;
          justify-content: space-around;
        }
        .secondLine{
          // background-color: rgb(134, 134, 134);
          width: 100%;
          height: 50px;
          display: flex;
          justify-content: space-around;
        }
        .thirdLine{
          // background-color: rgb(20, 19, 19);
          width: 100%;
          height: 50px;
          display: flex;
          justify-content: space-around;
        }
      }
    }
  }
  .ourService{
    background-color: #C93624;
    width: 100%;
    height: 600px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    .ourServiceText{
      // background-color: rgb(0, 0, 0);
      width: 100%;
      height: 70px;
      p{
        color: white;
        font-size: 25px;
        font-weight: 700;
      }
    }
    .ourServiceCard{
      // background-color: rgb(235, 165, 35);
      width: 100%;
      height: 400px;
      display: flex;
      justify-content: center;
      .card{
        background-color: white;
        width: 250px;
        height: 300px;
        transition: ease .5s;
        margin: 60px 20px;
        border-radius: 3px;
        overflow: hidden;
        &:hover{
        transform: scale(1.1);
        transition: ease .5s;
        }
        .upside{
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
  .listCar{
    background-color: #C93624;
    margin-top: 80px;
    width: 100%;
    height: 400px;
  }
  .bestProfile{
    background-color: #C93624;
    margin-top: 80px;
    width: 100%;
    height: 500px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    .upProfile{
      width: 100%;
      height: 50px;
      display: flex;
      justify-content: center;
      h1{
        color: white;
      }
    }
    .downProfile{
      background-color: beige;
      margin-top: 40px;
      width: 100%;
      height: 300px;
    }
  }
}

</style>
