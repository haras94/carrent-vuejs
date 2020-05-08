<template>
    <router-link to="/1/1" class="lmskal">
      <div class="lksmkl">
        <img src="@/assets/img/toyota-agya.png">
      </div>
      <div class="maskls">
        <div class="aslesk">
          <h2>Toyota Agya</h2>
        </div>
        <div class="qsasxz">
          <i
          v-for="star in 5" :key="star.id"
          class="fas fa-star"
          style="color:#FFC107"></i>
        </div>
        <div class="location">
        </div>
        <div class="hjams3">
          <div class="lokasi">
            <h2>Depok</h2>
          </div>
          <p>Toko Udin</p>
        </div>
        <div class="tyghsw">
          <div class="rtbnhf">
            <i class="far fa-user"></i>
            <p>4</p>
          </div>
          <div class="bhnjfd">
            <p>Rp. 120.000 / day</p>
          </div>
        </div>
      </div>
    </router-link>
</template>

<script>
export default {
  name: 'Card Car',
  computed: {
    getCar () {
      return this.$store.state.getCar
    }
  },
  // methods: {
  //   getCars () {
  //     this.$store.dispatch('getApi', {
  //       url: '',
  //       mutations: ''
  //     })
  //   }
  // },
  created () {
    this.$store.dispatch('getApi', {
      url: 'product',
      mutations: 'getCar'
    })
      .then((res) => {
        console.log(res)
      })
      .catch((err) => {
        console.log(err)
      })
  }
}
</script>

<style lang="scss" scoped>
.lokols{
  position: relative;
  display: flex;
  margin-left: 15px;
}
.lmskal{
  position: relative;
  width: 270px;
  border: none;
  margin: 20px;
  box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.25);
  text-decoration: none;
  color: #000000;
  border-radius: 3px;
  overflow: hidden;
  .lksmkl{
    position: relative;
    width: 100%;
    height: 60%;
    img{
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .maskls{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 5px 10px 0 10px;
    background: #ffffff;
    .aslesk{
      position: relative;
      h2{
        font-weight: 600;
        font-size: 22px;
      }
    }
    .qsasxz{
      position: relative;
    }
    .tyghsw{
      position: relative;
      display: flex;
      width: 100%;
      height: 100%;
      color: #5E5E5E;
      .rtbnhf{
        display: flex;
        position: absolute;
        right: 0px;
        i{
          margin-right: 3px;
        }
      }
      .bhnjfd{
        position: relative;
        height: 24px;
      }
    }
    .hjams3{
      position: relative;
      width: 100%;
      .lokasi{
        position: absolute;
        right: 0;
        h2{
          font-weight: normal;
          font-size: 17px;
          color: #5E5E5E;
        }
      }
      p{
        height: 24px;
        margin: 0;
        color: #5E5E5E;
      }
    }
  }
}

</style>
