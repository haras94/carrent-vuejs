<template>
  <div class="jkxme2">
    <ModalLogin/>
  </div>
</template>

<script>
import ModalLogin from '@/components/ModalLogin.vue'

export default {
  name: 'Login',
  components: {
    ModalLogin
  },
  beforeCreate () {
    this.$store.dispatch('patchApi', {
      url: ''
    })
  }
}
</script>

<style lang="scss" scoped>

.jkxme2{
  position: relative;
  width: 100%;
  height: 100vh;
  background: #ebebeb;
  display: flex;
  justify-content: center;
  align-items: center;
}

</style>
