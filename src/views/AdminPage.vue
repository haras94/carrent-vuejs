<template>
  <div class="adminPageWrap">
    <div class="adminPage">
      <div class="request">
        <h5>Request</h5>
      </div>
      <div class="rentaler">
        <h5>Rentaler</h5>
      </div>
      <div class="allUser">
        <h5>All User</h5>
      </div>
    </div>
    <CardRequest />
  </div>
</template>

<script>
import CardRequest from '../components/base_/CardRequest.vue'

export default {
  name: 'AdminPage',
  components: {
    CardRequest
  }
}
</script>

<style lang="scss" scoped>
.adminPageWrap{
  background-color: rgba(0, 0, 0, 0.055);
  width: 100%;
  height: 1000px;
  display: flex;

  .adminPage{
    width: 100%;
    height: 50px;
    margin-top: 70px;
    background-color: rgba(255, 255, 255, 0.904);
    display: flex;
    cursor: pointer;
    .request{
      width: 33.33%;
      height: 100%;
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      border-right: 1px solid rgba(0, 0, 0, 0.199);
      border-bottom: 1px solid rgba(0, 0, 0, 0.199);
    }
    .rentaler{
      width: 33.33%;
      height: 100%;
      // background-color: brown;
      display: flex;
      justify-content: center;
      align-items: center;
      border-right: 1px solid rgba(0, 0, 0, 0.199);
      border-bottom: 1px solid rgba(0, 0, 0, 0.199);
    }
    .allUser{
      width: 33.33%;
      height: 100%;
      // background-color: cadetblue;
      display: flex;
      justify-content: center;
      align-items: center;
      border-bottom: 1px solid rgba(0, 0, 0, 0.199);
    }
  }
}

</style>
