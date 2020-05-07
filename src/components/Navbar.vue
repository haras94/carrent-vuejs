<template>
  <div class="navbarParent">
    <router-link to="/" class="navLogo"><h1>CARRENT</h1></router-link>
    <div class="navSearch"><input type="text" placeholder="Search"></div>
    <div class="navAdditional">
      <div class="trolly">
        <img src="../assets/img/trolly.png" alt="trolly">
      </div>
      <router-link to="login" class="btn-login"><p>Login</p></router-link>
      <div class="btn-register"><p>Register</p></div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.navbarParent{
  background-color: #c82022;
  width: 100vw;
  height: 70px;
  display: flex;
  justify-content: space-between;
  position: fixed;
  top: 0;
  max-width: 100%;
  z-index: 5;
  border-bottom: 1px solid rgba(0, 0, 0, 0.12);
  .navLogo{
    width: 180px;
    margin-left: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    h1{
      color: white;
      font-weight: bold;
      margin: 0;
    }
  }
  .navSearch{
    // background-color: sandybrown;
    width: 400px;
    display: flex;
    align-items: center;
    input{
      width: 400px;
      height: 50%;
      border-radius: 3px;
      outline: none;
      border: none;
      padding-left: 80px;
    }
  }
  .navAdditional{
    // background-color: royalblue;
    width: 500px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    cursor: pointer;
    .trolly{
      // background-color: #fff;
      width: 30px;
      height: 30px;
      position: absolute;
      left: 120px;
      img{
        object-fit: contain;
        width: 100%;
        height: 100%;
      }
    }
    .btn-login{
      // background-color: yellowgreen;
      border: 3px solid white;
      border-radius: 3px;
      width: 120px;
      height: 55%;
      position: absolute;
      right: 170px;
      display: flex;
      justify-content: center;
      align-items: center;
      p{
        color: white;
        margin: 0;
      }
    }
    .btn-register{
      background-color: white;
      border: none;
      width: 120px;
      height: 55%;
      position: absolute;
      right: 40px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 3px;
      p{
        color: #C93624;
        margin: 0;
      }
    }
  }
}
</style>
