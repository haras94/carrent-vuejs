<template>
  <div class="btnProfileWrap">
    <div class="nameProfile">
      <h6 class="mb-0 mr-3">{{ userLogin.fullname }}</h6>
    </div>
    <div class="photoProfile">
      <img src="../../assets/img/isyana-sarasvati.jpg" alt="user-photo">
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'BtnProfile',
  computed: {
    ...mapState([
      'userLogin'
    ])
  }
}
</script>

<style lang="scss" scoped>
.btnProfileWrap{
  margin-right: 120px;
  height: 100%;
  display: flex;
  align-items: center;
  z-index: 20;
  cursor: pointer;
  .nameProfile {
    align-items: flex-end;
    h6 {
      color: white;
      white-space: nowrap;
    }
  }
  .photoProfile {
    background-color: aquamarine;
    width: 60px;
    height: 60px;
    border-radius: 100%;
    overflow: hidden;
    margin-top: 5px;
    margin-left: 5px;
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
