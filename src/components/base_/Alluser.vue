<template>
  <div class="allUserWrap">
    <div v-for="user in users" :key="user" class="allUser">
      <div class="leftSide">
        <p>Nama</p>
        <p>Gender</p>
        <p>Alamat</p>
        <p>Phone</p>
        <p>Email</p>
      </div>
      <div class="rightSide">
        <p>{{ user.fullname }}</p>
        <p>{{ user.gender }}</p>
        <p>{{ user.address }}</p>
        <p>{{ user.phone_number }}</p>
        <p>{{ user.email }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Alluser',
  created () {
    this.$store.dispatch('getApi', {
      url: 'user',
      mutation: 'SET_USERS'
    })
  },
  computed: {
    ...mapState([
      'users'
    ])
  }
}
</script>

<style lang="scss" scoped>
.allUserWrap{
  width: 100%;
  position: absolute;
  top: 120px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  padding-top: 30px;
  visibility: hidden;
  opacity: 0;
  box-sizing: border-box;
  &.allUserActive{
    opacity: 1;
    visibility: visible;
    transition: ease .3s;
  }
  .allUser{
    background-color: white;
    box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.144);
    width: 700px;
    height: 200px;
    border-radius: 5px;
    display: flex;
    box-sizing: border-box;
    margin: 30px 0;
    .leftSide{
      width: 15%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      border-right: 1px solid rgba(0, 0, 0, 0.144);
      p{
        padding:0 30px;
        font-weight: 600;
      }
    }
    .rightSide{
      width: 70%;
      height: 100%;
      p{
        padding:0 30px;
        font-weight: 600;
      }
    }
  }
}
</style>
