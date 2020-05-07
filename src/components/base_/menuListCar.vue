<template>
  <div class="main-menu">
    <nav class="nav-menu">
      <h3 class="title ml-1 mt-4">{{tablist}}</h3>
      <div class="space"></div>
    </nav>
    <div class="content">
        <div class="list-car">
            <card v-for="car in 9" :key="car.id" />
        </div>
        <div class="enable-car">
            <card v-for="car in 3" :key="car.id" />
        </div>
        <div class="more-info">
            <Request/>
        </div>
    </div>
  </div>
</template>

<script>
import card from '../Card.vue'
import Request from '../base_/request.vue'

export default {
  name: 'menuListCar',
  components: {
    card,
    Request
  },
  props: ['tablist']
}
</script>

<style lang="scss" scoped>
.main-menu {
  display: flex;
  flex-direction: column;
  width: 73%;
  padding: 10px;
  margin-bottom: 20px;
  .nav-menu {
    display: flex;
    align-items: center;
    width: 100%;
    height: 50px;
    padding: 10px 10 0 10px;
    margin-bottom: 0px;
    .space {
      width: 87%;
      height: 100%;
      border-bottom: 1px solid rgba(0, 0, 0, 0.12);
    }
    .title {
      width: 200px;
      text-align: left;
    }
  }
  .content {
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 14px;
    border-left: 1px solid rgba(0, 0, 0, 0.12);
    border-bottom: 1px solid rgba(0, 0, 0, 0.12);
    border-right: 1px solid rgba(0, 0, 0, 0.12);
    margin-bottom: 20px;
        .list-car{
            display: flex;
            flex-wrap: wrap;
        }
        .enable-car {
            display: none;
            flex-wrap: wrap;
        }
        .more-info {
            display: none;
            width: 100%;
        }
  }
}
</style>
