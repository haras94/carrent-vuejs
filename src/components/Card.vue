<template>
  <!-- <div class="lokols"> -->
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
  <!-- </div> -->
</template>

<script>
export default {

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
        // margin-top: 5px;
        h2{
          font-weight: 600;
          font-size: 22px;
        }
      }
      .qsasxz{
        position: relative;
        margin-bottom: 20px;
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
      }
    }
  }

</style>
