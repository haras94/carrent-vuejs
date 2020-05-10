<template>
  <div class="cardRequestWrap">
    <a href="https://mail.google.com/mail/u/1/#inbox">
      <div class="btnToGmail"><p>Ke Gmail</p></div>
    </a>
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
  .btnToGmail{
    width: 150px;
    height: 50px;
    border-radius: 5px;
    background-color: white;
    box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.288);
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
  }
}

</style>
