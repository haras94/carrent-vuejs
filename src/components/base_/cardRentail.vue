<template>
  <div class="cardRentailWrap" :style="{'background-image': 'url('+require('../../assets/img/optimus.png')+')'}">
    <div class="downside">
      <header>PT. Minjem mobil boleh</header>
      <footer>Boleh nya minjem mobil nya aja</footer>
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
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  opacity: .9;
  position: relative;
  overflow: hidden;
  transition: ease 1.5s;
  cursor: pointer;
  &:hover{
    border-radius: 3px;
    transition: ease .6s;
  }
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
      text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.9);
    }
    footer{
      color: white;
      line-height: 90px;
      text-align: center;
      text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.7);
    }
    .qsxc{
      position: absolute;
      top: 40px;
      left: 80px;
    }
  }
}
</style>
