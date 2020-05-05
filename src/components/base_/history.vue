<template>
  <div class="container-fluid">
    <section class="up">
      <article class="name-rentaler">
        <h6 class="text-success">rentalnya isyana</h6>
      </article>
      <article class="estimation">
        <h6 class="text-success">Estimation</h6>
        <p>7 hours</p>
      </article>
      <article class="total">
        <h6 class="text-success">Rental Price</h6>
        <p>Rp. 200.000 /day</p>
      </article>
      <article class="status">
        <h6 class="text-success">Status :</h6>
        <h6 >Done !</h6>
      </article>
    </section>
    <section class="down">
      <article class="info-car">
        <img src="../../assets/img/optimus.png" alt class="car-img" />
        <div class="flash-info">
          <section>
            <h3>truck optimus prime</h3>
          </section>
          <section>
            <i class="far fa-user mr-2"></i>4
          </section>
          <section>
            <i class="fas fa-star text-warning mr-1" v-for="star in 5" :key="star.id"></i>
          </section>
        </div>
      </article>
      <article class="grand-total">
        <section>
          <H4>TOTAL BILL</H4>
        </section>
        <section>
          <h5 class="text-danger">Rp. 140.000.-</h5>
        </section>
      </article>
    </section>
  </div>
</template>

<script>
export default {
  name: 'history'
}
</script>

<style lang="scss" scoped>
.container-fluid {
  display: flex;
  flex-direction: column;
  padding: 6px;
  width: 100%;
  height: 200px;
  box-shadow: rgba(0, 0, 0, 0.384) 0px 2px 10px 0px;
  margin-bottom: 10px;
  .up {
    display: flex;
    width: 100%;
    height: 70px;
    margin-bottom: 5px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.12);
    padding: 5px;
    .name-rentaler {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 25%;
      height: 60px;
      border-right: rgba(0, 0, 0, 0.12) 1px solid;
    }
    .estimation {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 25%;
      height: 60px;
      border-right: rgba(0, 0, 0, 0.12) 1px solid;
      padding-top: 15px;
    }
    .total {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 25%;
      height: 60px;
      padding-top: 15px;
      border-right: rgba(0, 0, 0, 0.12) 1px solid;
    }
    .status {
    display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 25%;
      height: 60px;
      padding-top: 15px;
    }
  }
  .down {
    display: flex;
    width: 100%;
    height: 120px;
    .info-car {
      display: flex;
      padding: 5px;
      width: 50%;
      border-right: 1px solid rgba(0, 0, 0, 0.12);
      .car-img {
        width: 100px;
        height: 100px;
        margin-right: 10px;
      }
      .flash-info {
        display: flex;
        flex-direction: column;
        text-align: left;
      }
    }
    .grand-total {
      width: 50%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }
}
</style>
