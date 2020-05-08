<template>
  <div class="adminPageWrap">
    <div class="adminPage">
      <div class="request">
        <h5>Request</h5>
        <div class="requestPage" :class="{ 'dropdown': dropdown }">
          <ul>
            <li>Setting</li>
            <li @click="logout" >Logout</li>
          </ul>
        </div>
      </div>
      <div class="rentaler">
        <h5>Rentaler</h5>
      </div>
      <div class="allUser">
        <h5>All User</h5>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'AdminPage',
  data () {
    return {
      dropdown: false
    }
  }
}
</script>

<style lang="scss" scoped>
a {
  text-decoration: none;
}
.requestPage {
  width: 170px;
  height: 0px;
  background-color: white;
  position: absolute;
  z-index: 21;
  top: 100%;
  right: 45px;
  overflow: hidden;
  transition: .2s;
  border-radius: 3px;
  li {
    padding: 10px 20px;
    cursor: pointer;
    &:hover {
      background-color: rgba(0, 0, 0, 0.061);
    }
  }
  &.dropdown {
    height: 100px;
  }
}
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
