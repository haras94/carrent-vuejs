<template>
  <div class="slzkm3">
    <ModalRegister/>
  </div>
</template>

<script>
import ModalRegister from '@/components/ModalRegister.vue'

export default {
  name: 'SignUp',
  components: {
    ModalRegister
  },
  created () {
    this.$store.commit('MODAL_LOGIN_OFF')
  }
}
</script>

<style lang="scss" scoped>
.slzkm3{
  position: relative;
  width: 100%;
  height: 100vh;
  background: #ebebeb;
  display: flex;
  justify-content: center;
  align-items: center;
}

</style>
