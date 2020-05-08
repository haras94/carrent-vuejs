<template>
  <div class="page-not-found our-wrapper">
    <h1>{{ code || '404' }}</h1>
    <p>{{ msg || 'Halaman tidak ditemukan' }}</p>
  </div>
</template>

<script>

export default {
  name: 'PageNotFound',
  props: {
    code: String,
    msg: String
  }
}

</script>

<style lang="scss" scoped>
.page-not-found {
  padding: 50px 0 100px;
  h1 {
    text-align: center;
    letter-spacing: 20px;
    color: #c82022;
    font-size: 20em;
    margin: 0;
  }
  p {
    text-align: center;
    font-size: 2em;
    color: #c8202378;
  }
}
</style>
