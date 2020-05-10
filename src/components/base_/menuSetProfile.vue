<template>
  <div class="main-menu">
    <nav class="nav-menu">
      <h3 class="title ml-1 mt-4">{{tablist}}</h3>
      <div class="space"></div>
    </nav>
    <div class="content">
        <div class="status-order">
             <statusOrder/>
        </div>
        <div class="history">
            <history v-for="histo in 2" :key="histo.id"/>
        </div>
        <div class="setting">
            <Set/>
        </div>
    </div>
  </div>
</template>

<script>
import statusOrder from '../base_/statusOrder'
import history from '../base_/history'
import Set from '../base_/set'

export default {
  name: 'menuListCar',
  props: ['tablist'],
  components: {
    history,
    statusOrder,
    Set
  }
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
        .status-order{
            display: flex;
            flex-wrap: wrap;
            width: 100%;
        }
        .history {
            display: none;
            flex-wrap: wrap;
            width: 100%;
        }
        .setting {
            display: none;
        }
  }
}
</style>
