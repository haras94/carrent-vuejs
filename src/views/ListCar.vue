<template>
<div class="klemsa1">
  <div class="ksmen2">
    <div class="mmsan32">
      <h2>List Car</h2>
    </div>
    <div class="eersa23">
      <h2>Pilih Kota</h2>
      <select name="kota" id="kota">
        <option selected="selected" value="">Semua Kota</option>
        <option value="depok">Depok</option>
        <option value="jakarta">Jakarta</option>
        <option value="bogor">Bogor</option>
        <option value="bekasi">Bekasi</option>
        <option value="tanggerang">Tanggerang</option>
      </select>
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
    <!-- <div class="klsme3"> -->
      <Card v-for="car in cars.data" :key="car.id" :car="car"/>
    <!-- </div> -->
  </div>
  <div class="mmask2">
    <nav aria-label="Page navigation example">
      <ul class="pagination">
        <li @click="prevPages" class="page-item"><a class="page-link" >Previous</a></li>
        <li v-for="pagination in cars.total_page" :key="pagination" class="page-item"><a @click="pages(pagination)" class="page-link">{{pagination}}</a></li>
        <!-- <li class="page-item"><a class="page-link" href="#">2</a></li>
        <li class="page-item"><a class="page-link" href="#">3</a></li> -->
        <li @click="nextPages" class="page-item"><a class="page-link">Next</a></li>
      </ul>
    </nav>
  </div>
</div>
</template>

<script>
import Card from '@/components/Card.vue'
import { mapState } from 'vuex'

export default {
  name: 'ListCar',
  data () {
    return {
      currentPage: 1
    }
  },
  components: {
    Card
  },
  computed: {
    ...mapState([
      'cars'
    ])
  },
  methods: {
    pages (id) {
      this.cars.current_page = 0 + id
      this.$store.dispatch('getApi', {
        url: 'product?page=' + this.cars.current_page,
        mutation: 'SET_PAGE'
      })
    },
    prevPages () {
      console.log(this.cars.current_page)
      if (this.cars.current_page === 1) {
        this.cars.current_page = 1
      } else {
        this.cars.current_page -= 1
        this.$store.dispatch('getApi', {
          url: 'product?page=' + this.cars.current_page,
          mutation: 'SET_PAGE'
        })
      }
    },
    nextPages () {
      // this.$store.dispatch('getApi', {
      //   url: 'product?page=2',
      //   mutation: 'SET_PAGE'
      // })
      console.log(this.cars.current_page)

      if (this.cars.current_page === this.cars.total_page) {
        this.cars.current_page = this.cars.total_page
        console.log(this.cars.current_page)
      } else {
        this.cars.current_page += 1
        console.log(this.cars.current_page)
        this.$store.dispatch('getApi', {
          url: 'product?page=' + this.cars.current_page,
          mutation: 'SET_PAGE'
        })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.mmask2{
  display: flex;
  justify-content: center;
}
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
      #kota{
        margin-right: 20px;
      }
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
  display: flex;
  flex-wrap: wrap;
}
</style>
