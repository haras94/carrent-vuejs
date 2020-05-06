<template>
<div class="klemsa1">
  <div>

  </div>
  <div class="ksmen2">
    <div class="mmsan32">
      <h2>List Car</h2>
    </div>
    <div class="eersa23">
      <h2>Urutkan</h2>
      <select name="sortby" id="product-sorty">
        <option selected="selected" value="">Relevansi</option>
        <option value="price:asc">Termurah</option>
        <option value="price:desc">Termahal</option>
        <option value="rating:desc">Rating Tertinggi</option>
      </select>
    </div>
  </div>
  <div class="lkaskm">
    <!-- <div class="meksl1"> -->
      <div v-for="item in 20" :key="item.id" class="klsme3">
        <Card/>
      </div>
    </div>
  <!-- </div> -->
</div>
</template>

<script>
import Card from '@/components/Card.vue'

export default {
  name: 'ListCar',
  components: {
    Card
  }
}

</script>

<style lang="scss" scoped>
.klemsa1{
  width: 100%;
  height: auto;
  padding: 20px 20px;
  // top: 70px;
  margin-top: 70px;
  position: relative;
  .ksmen2{
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
    .mmsan32{
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      h2{
        font-weight: 400;
        font-size: 22px;
      }
    }
    .eersa23{
      display: flex;
      align-items: center;
      justify-content: center;
      margin-right: 45px;
      select{
        height: 40px;
      }
      h2{
        position: relative;
        top: 3px;
        margin-right: 10px;
        font-weight: normal;
        font-size: 17px;
      }
    }
  }
  .lkaskm{
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    border-top: 2px solid #353535;
  }
}
.meksl1{
  width: 100%;
  position: relative;
  display: flex;
  flex-wrap: wrap;
}
.klsme3{
  // margin-top: 10px;
  display: flex;
  flex-wrap: wrap;
  width: 270px;
}
</style>
