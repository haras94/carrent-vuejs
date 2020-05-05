<template>
  <div class="user-detail">
    <div class="info-user">
      <section class="image-user">
        <img src="../assets/img/isyana-sarasvati.jpg" alt="foto" class="img-user" />
      </section>
      <section class="flash-info">
        <article class="name-user"><h1>Isyana Sarasvati</h1></article>
        <article class="adress">
          <i class="fas fa-home mr-4"></i>
          <p>Jl. Pesona Depok Estate Blok B No.2 , Depok, Kec. Pancoran Mas, Kota Depok, Jawa Barat 16431</p>
        </article>
        <article class="adress">
          <i class="far fa-envelope mr-4"></i>
          <p>isyana@gmail.com</p>
        </article>
        <article class="adress">
          <i class="fas fa-venus-mars mr-4"></i>
          081290892277
        </article>
        <article class="icon-grup"></article>
      </section>
    </div>
    <div class="sub-menu">
      <section class="tablist">
        <div class="tab">
          <section class="menu">
            <p>List Car</p>
          </section>
          <section class="menu">
            <p>Enable Car </p>
          </section>
          <section class="menu">
            <p>More Info</p>
          </section>
        </div>
      </section>
      <section class="main-menu"></section>
    </div>
  </div>
</template>

<script>

export default {
  name: 'RentalerDetail'
}
</script>

<style lang="scss" scoped>
.user-detail {
  width: 100%;
  display: flex;
  flex-direction: column;
  font-family: 'Roboto', sans-serif;
  .info-user {
    display: flex;
    height: 450px;
    background: #c82022;
    padding: 16px;
    .image-user {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 35%;
      height: 410px;
      // background: salmon;
      .img-user {
        width: 350px;
        height: 350px;
        border-radius: 50%;
        border: 2px solid #ffffff;
      }
    }
    .flash-info {
      display: flex;
      flex-direction: column;
      justify-content: center;
      width: 50%;
      height: 410px;
      margin-left: 50px;
      font-family: 'Roboto', sans-serif;
        .name-user h1 {
          font-size: 30px;
          color: #ffffff;
          padding-bottom: 10px;
          border-bottom: 2px solid #ffffff;
          margin-bottom: 10px;
        }
        .adress{
          width: 100%;
          margin-bottom: 10px;
          display: flex;
          justify-self: start;
              color: #ffffff;
              font-size: 17px;
              text-align: left;
        }
    }
  }
  .sub-menu {
    display: flex;
    height: 500px;
    padding: 16px;
      .tablist {
        display: flex;
        width: 25%;
          .tab{
            display: flex;
            flex-direction: column;
            width: 200px;
            height: 150px;
            background: #ffffff;
            box-shadow: rgba(0, 0, 0, 0.08) 0px 2px 10px 0px;
            margin: 20px 0 0 100px;
            padding: 16px;
              .menu{
                font-size: 16px;
                width: 100%;
                text-align: left;
                cursor: pointer;
              }
              .menu:hover{
                    background: #f8f6f6;
              }
          }
      }
      .main-menu {
        display: flex;
        width: 70%;
        background: lightcoral;
      }
  }
}
</style>
