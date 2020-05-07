<template>
  <div class="cardRentailWrap">
    <div class="downside">
      <header>PT. Minjem mobil boleh</header>
      <div class="qsxc">
        <i
          v-for="star in 5" :key="star.id"
          class="fas fa-star"
          style="color:#FFC107">
        </i>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.cardRentailWrap{
  width: 250px;
  height: 250px;
  border-radius: 100%;
  background-image: url('../../assets/img/isyana-sarasvati.jpg');
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  opacity: .9;
  position: relative;
  overflow: hidden;
  .downside{
    background-color: rgba(0, 0, 0, 0.212);
    width: 100%;
    height: 40%;
    position: absolute;
    bottom: 0;
    header{
      color: white;
      text-align: center;
      font-weight: 600;
      opacity: .9;
      margin-top: 10px;
    }
    .qsxc{
      position: absolute;
      top: 40px;
      left: 80px;
    }
  }
}
</style>
