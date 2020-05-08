<template>
    <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
    <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
    <li data-target="#carouselExampleCaptions" data-slide-to="3"></li>
  </ol>
  <div class="carousel-inner our-wrapper">
    <div class="carousel-item active">
      <img src="../../assets/img/isyana-sarasvati.jpg" class="d-block w-100" alt="...">
      <div class="carousel-caption d-none d-md-block">
        <h5>Isyana Sarasvati</h5>
        <p>Artis asal Indonesia</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="../../assets/img/2018-bugatti-chiron-sport-2.jpg" class="d-block w-100" alt="...">
      <div class="carousel-caption d-none d-md-block">
        <h5>Buggati Cheron</h5>
        <p>Mobil pabrikan asala negara france yang telah berdiri sejak 1909 oleh Ettore Buggati</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="../../assets/img/toyota-agya.png" class="d-block w-100" alt="...">
      <div class="carousel-caption d-none d-md-block">
        <h5>Bmw 320i</h5>
        <p>Mobil pabrikan asal german yang telah berdiri sejak 1916 oleh Franz Josef Popp</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="../../assets/img/ferrarifix.jpg" class="d-block w-100" alt="...">
      <div class="carousel-caption d-none d-md-block">
        <h5>Ferrari 458</h5>
        <p>Mobil pabrikan asal negara itali yang telah berdiri sejak 1947 oleh Enzo Ferrari</p>
      </div>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.carousel-inner{
  // margin-top: 120px;
  .carousel-item{
    height: 500px;
    img{
      object-fit: cover;
      width: 100%;
      height: 100%;
    }
  }
}
</style>
