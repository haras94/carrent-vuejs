<template>
  <div class="container-fluid">
    <section> ok</section>
  </div>
</template>

<script>
import Swal from 'sweetalert2'

export default {
  name: 'set',
  methods: {
    sweet () {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong!'
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.container-fluid{
  width: 880px;
  height: 500px;
  display: flex;
  background: #c82022;
}
</style>
