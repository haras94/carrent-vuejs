<template>
  <div class="cardRequestWrap">
    <div class="requestCard">
      <div class="upSide">
        <div class="owner">
          <header>Nama Perusahaan Rental</header>
          <footer>Perusahaan nya</footer>
        </div>
        <div class="name">
          <header>Nama Pemilik</header>
          <footer>Pemilik nya</footer>
        </div>
        <div class="address">
          <header>Alamat Perusahaan</header>
          <footer>jl. dimana?</footer>
        </div>
      </div>
      <div class="downSide">
        <button class="acc">Accept</button>
        <button class="dec">Decline</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'CardRequest',
  created () {
    this.$store.dispatch('getApi', {
      url: 'auth',
      mutation: 'SET_REQUESTS'
    })
  },
  computed: {
    ...mapState([
      'requests'
    ])
  }
}
</script>

<style lang="scss" scoped>
.cardRequestWrap{
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
  &.cardRequestActive{
    opacity: 1;
    visibility: visible;
    transition: ease .3s;
  }
  .requestCard{
    background-color: #fff;
    box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.075);
    width: 1100px;
    height: 300px;
    border-radius: 5px;
    .upSide{
      width: 100%;
      height: 50%;
      background-color: rgba(255, 255, 255, 0.568);
      border-bottom: 1px solid rgba(116, 116, 116, 0.315);
      display: flex;
      header{
        color: #51A846;
        font-weight: 600;
      }
      .owner{
        width: 33.33%;
        height: 100%;
        border-right: 1px solid rgba(116, 116, 116, 0.315);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        line-height: 40px;
      }
      .name{
        width: 33.33%;
        height: 100%;
        border-right: 1px solid rgba(116, 116, 116, 0.315);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        line-height: 40px;
      }
      .address{
        width: 33.33%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        line-height: 40px;
      }
    }
    .downSide{
      width: 100%;
      height: 40%;
      background-color: rgb(255, 255, 255);
      display: flex;
      justify-content: center;
      align-items: center;
        .acc{
          background-color: #3F8220;
        }
        .dec{
          background-color: #c82022;
        }
        button{
          width: 100px;
          height: 40px;
          border-radius: 3px;
          outline: none;
          border: none;
          margin: 0 5px;
          box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.075);
          color: white;
          font-weight: 600;
          cursor: pointer;
      }
    }
  }
}

</style>
