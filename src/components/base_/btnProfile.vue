<template>
  <div class="btnProfileWrap">
    <div class="nameProfile">
      <h6>Nama User</h6>
    </div>
    <div class="photoProfile">
      <img src="../../assets/img/isyana-sarasvati.jpg" alt="user-photo">
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.btnProfileWrap{
  position: absolute;
  top: 0;
  right: 10px;
  width: 200px;
  height: 70px;
  display: flex;
  z-index: 20;
  .nameProfile{
    align-items: flex-end;
    position: absolute;
    top: 30px;
    right: 90px;
    h6{
      color: white;
    }
  }
  .photoProfile{
    background-color: aquamarine;
    width: 60px;
    height: 60px;
    border-radius: 100%;
    overflow: hidden;
    margin-top: 5px;
    margin-left: 5px;
    position: absolute;
    top: 0;
    right: 20px;
    cursor: pointer;
    img{
      object-fit: cover;
      width: 100%;
      height: 100%;
    }
  }
}
</style>
