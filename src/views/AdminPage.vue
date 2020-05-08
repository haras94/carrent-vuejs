<template>
  <div class="adminPageWrap">
    <div class="adminPage">
      <div class="request">
        <h3>Request</h3>
      </div>
      <div class="rentaler"><h3>Rentaler</h3></div>
      <div class="allUser"><h3>All User</h3></div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'AdminPage'
}
</script>

<style lang="scss" scoped>
.adminPageWrap{
  // background-color: rosybrown;
  width: 100%;
  height: 1000px;
  display: flex;
  .adminPage{
    width: 100%;
    height: 50px;
    margin-top: 70px;
    background-color: rgba(255, 255, 255, 0.904);
    display: flex;
    .request{
      width: 33.33%;
      height: 100%;
      // background-color: blueviolet;
      display: flex;
      justify-content: center;
      align-items: center;
      border-right: 1px solid rgba(0, 0, 0, 0.356);
      border-bottom: 1px solid rgba(0, 0, 0, 0.356);
    }
    .rentaler{
      width: 33.33%;
      height: 100%;
      // background-color: brown;
      display: flex;
      justify-content: center;
      align-items: center;
      border-right: 1px solid rgba(0, 0, 0, 0.356);
      border-bottom: 1px solid rgba(0, 0, 0, 0.356);
    }
    .allUser{
      width: 33.33%;
      height: 100%;
      // background-color: cadetblue;
      display: flex;
      justify-content: center;
      align-items: center;
      border-bottom: 1px solid rgba(0, 0, 0, 0.356);
    }
  }
}

</style>
