<template>
  <div class="jkxme2">
    <LoginRental/>
  </div>
</template>

<script>
import LoginRental from '@/components/LoginRental.vue'

export default {
  name: 'Login',
  components: {
    LoginRental
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
