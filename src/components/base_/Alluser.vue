<template>
  <div class="allUserWrap">
    <div class="allUser">
      <div class="upside">
        <div class="nameUser"><h5>nama nya</h5></div>
        <div class="addressUser"><h5>alamat nya</h5></div>
        <div class="tambah"><h5>tambahan??</h5></div>
      </div>
      <div class="downside"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Alluser'
}
</script>

<style lang="scss" scoped>
.allUserWrap{
  // background-color: rgba(0, 0, 0, 0.575);
  background-color: rgba(0, 0, 0, 0);
  width: 100%;
  // height: 600px;
  position: absolute;
  top: 120px;
  display: flex;
  justify-content: center;
  padding-top: 30px;
  visibility: hidden;
  opacity: 0;
  &.allUserActive{
    opacity: 1;
    visibility: visible;
    transition: ease .3s;
  }
  .allUser{
    background-color: white;
    box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.144);
    width: 1100px;
    height: 200px;
    position: absolute;
    left: 120px;
    top: 10px;
    border-radius: 5px;
    .upside{
      border-bottom: 1px solid rgba(0, 0, 0, 0.144);
      width: 100%;
      height: 30%;
      display: flex;
      .nameUser{
        width: 33.33%;
        height: 100%;
        border-right: 1px solid rgba(0, 0, 0, 0.144);
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .addressUser{
        width: 33.33%;
        height: 100%;
        border-right: 1px solid rgba(0, 0, 0, 0.144);
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .tambah{
        width: 33.33%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
    .downside{
      width: 100%;
      height: 70%;
    }
  }
}
</style>
