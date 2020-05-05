<template>
  <div class="mobil-detail">
    <div class="nav-route">
      <ul class="route gap">
        <li><router-link to="/"><i class="fas fa-home"></i>Home</router-link><i class="fas fa-angle-right"></i></li>
        <li><router-link to="/list-car">All Vehicles</router-link><i class="fas fa-angle-right"></i></li>
        <li><router-link to="/">View Car</router-link></li>
      </ul>
    </div>
  </div>
</template>

<script>

export default {
  name: 'MobilDetail'
}

</script>

<style lang="scss" scoped>
.mobil-detail {
  padding: 0 0 40px;
}
.gap {
  width: 1200px;
  margin: 0 auto;
}
.nav-route {
  padding: 20px 0;
  background-color: #f3f3f3;
}
.route {
  display: flex;
  li {
    list-style: none;
    font-size: 12px;
    a {
      color: #858585;
      text-decoration: none;
      i {
        margin: 0 6px 0 0;
      }
      &:hover {
        text-decoration: underline;
      }
    }
    i {
      color: #858585;
      margin: 0 20px;
    }
  }
}
</style>
