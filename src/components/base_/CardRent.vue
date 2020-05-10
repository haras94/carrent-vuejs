<template>
  <div class="cardRentWrap">
    <div v-for="rentaller in rentalers" :key="rentaller" class="cardRent">
      <div class="leftSide">
        <p>Alamat</p>
        <p>Email</p>
        <p>Nama</p>
        <p>ID Card</p>
        <p>Phone Number</p>
        <p>Nama Toko</p>
      </div>
      <div class="rightSide">
        <p>{{ rentaller.address }}</p>
        <p>{{ rentaller.email }}</p>
        <p>{{ rentaller.fullname }}</p>
        <p>{{ rentaller.id_card }}</p>
        <p>{{ rentaller.phone_number }}</p>
        <p>{{ rentaller.rental_name }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'CardRent',
  created () {
    this.$store.dispatch('getApi', {
      url: 'rentaller',
      mutation: 'SET_RENTALERS'
    })
  },
  computed: {
    ...mapState([
      'rentalers'
    ])
  }
}
</script>

<style lang="scss" scoped>
.cardRentWrap{
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
  &.cardRentActive{
    opacity: 1;
    visibility: visible;
    transition: ease .3s;
  }
  .cardRent{
    background-color: white;
    box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.144);
    width: 700px;
    height: 300px;
    border-radius: 5px;
    display: flex;
    box-sizing: border-box;
    margin: 30px 0;
    .leftSide{
      width: 30%;
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
        margin-top: 20px;
        font-weight: 600;
      }
    }
  }
}

</style>
