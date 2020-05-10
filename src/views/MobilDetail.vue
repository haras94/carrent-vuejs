<template>
  <div class="mobil-detail container-fluid our-wrapper">
    <div class="detail-wrapper gap">
      <h1 class="my-4">{{carDetail.car_title}}</h1>
      <div class="detail-car">
        <div class="images col-7">
          <div class="image-primary">
            <img :src="!selectedImage ?  carDetail.images[0].image : selectedImage" />
          </div>
          <div class="image-secondary">
            <img
              v-for="(image, i) in carDetail.images" :key="i"
              @click="selectImage($event)"
              id="image-1"
              :src="image.image"
            />
          </div>
        </div>
        <div class="features-wrapper col-5">
          <section class="info-rental mb-5">
            <h1 class="text-danger">{{this.carDetail.rentaller === undefined ? '' : carDetail.rentaller.rental_name}}</h1>
            <p>
              <i class="fas fa-map-pin mr-2 text-danger"></i> {{this.carDetail.rentaller === undefined ? '' : carDetail.rentaller.address}}
            </p>
          </section>
          <div class="price-wrapper">
            <h3 class="price">IDR. {{carDetail.price_per_day}} / day</h3>
          </div>
          <ul class="features">
            <li class="p-2">
              <i class="fas fa-check-circle text-success mr-2"></i>tahun produksi : {{carDetail.manufacturingYear === undefined ? '' : carDetail.manufacturingYear.name }}
            </li>
            <li class="p-2">
              <i class="fas fa-check-circle text-success mr-2"></i>baggage capacity :  {{carDetail.baggageCapacity  === undefined ? '' : carDetail.baggageCapacity.name}}
            </li>
            <li class="p-2">
              <i class="fas fa-check-circle text-success mr-2"></i>{{carDetail.manufacturingYear === undefined ? '' : carDetail.person_capacity}}  tempat duduk
            </li>
            <li class="p-2">
              <i class="fas fa-check-circle text-success mr-2"></i>{{carDetail.manufacturingYear === undefined ? '' : carDetail.doors}} pintu
            </li>
          </ul>
          <button @click="showModalCheckout" class="btn btn-danger mt-auto py-3">SEWA SEKARANG</button>
        </div>
      </div>
      <div class="description pt-5 mb-5">
        <h4>Deskripsi</h4>
        {{carDetail.description}}
        </div>
      <div class="mb-5">
        <h4>Fitur</h4>
        <div class="row">
          <div class="col">
            <ul class="features column">
              <li class="p-2">
              <i class="fas fa-check-circle text-success mr-2"></i>tahun produksi : {{carDetail.manufacturingYear === undefined ? '' : carDetail.manufacturingYear.name}}
            </li>
            <li class="p-2">
              <i class="fas fa-check-circle text-success mr-2"></i>kapasitas bagasi : {{carDetail.manufacturingYear === undefined ? '' : carDetail.baggageCapacity.name}}
            </li>
            <li class="p-2">
              <i class="fas fa-check-circle text-success mr-2"></i>pintu : {{carDetail.manufacturingYear === undefined ? '' : carDetail.doors}}
            </li>
            <li class="p-2">
              <i class="fas fa-check-circle text-success mr-2"></i>tempat duduk : {{carDetail.manufacturingYear === undefined ? '' : carDetail.person_capacity}}
            </li>
            <li class="p-2">
              <i class="fas fa-check-circle text-success mr-2"></i>tipe bahan bakar : {{carDetail.manufacturingYear === undefined ? '' : carDetail.fuelType.name}}
            </li>
            <li class="p-2">
              <i class="fas fa-check-circle text-success mr-2"></i>air bag : {{carDetail.manufacturingYear === undefined ? '' : carDetail.srsAirbag.name}}
            </li>
            <li class="p-2">
              <i class="fas fa-check-circle text-success mr-2"></i>transmission : {{carDetail.manufacturingYear === undefined ? '' : carDetail.transmissionType.name}}
            </li>
            <li class="p-2">
              <i class="fas fa-check-circle text-success mr-2"></i>driver : {{carDetail.manufacturingYear === undefined ? '' : carDetail.additionalDriver.name}}
            </li>
            </ul>
          </div>
        </div>
      </div>
      <button v-if="userLogin.id === parseInt($route.params.idRentaler)" @click="deleteMobil" class="del">Hapus Mobil</button>
    </div>
    <ModalContainer
      :modalToggle="modalCheckout"
      :modalWrap="true"
      :headTitle="`Sewa ${carDetail.car_title}`"
      width="600px"
      @bg-click="modalCheckout = false"
      @close-click="modalCheckout = false"
    >
      <FormCheckout :withButton="true" />
    </ModalContainer>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import ModalContainer from '../components/base_/ModalContainer.vue'
import FormCheckout from '../components/base_/FormCheckout.vue'
import Swal from 'sweetalert2'

export default {
  name: 'MobilDetail',
  components: {
    ModalContainer,
    FormCheckout
  },
  computed: {
    ...mapState([
      'carDetail',
      'userLogin'
    ])
  },
  data () {
    return {
      selectedImage: false,
      modalCheckout: false
    }
  },
  methods: {
    deleteMobil () {
      Swal.fire({
        title: 'Data Anda Telah terupdate!',
        icon: 'success',
        showConfirmButton: false,
        timer: 1200
      })
      Swal.fire({
        title: 'Yakin mau hapus mobil ' + this.carDetail.car_title + '?',
        text: 'Data akan dihapus secara permanen',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#c82022',
        cancelButtonColor: '#bbb',
        confirmButtonText: 'Iya hapus aja, gapapa'
      }).then((result) => {
        if (result.value) {
          this.$store.dispatch('deleteApi', {
            url: 'product/' + this.$route.params.idMobil
          }).then(() => {
            this.$store.dispatch('getApi', {
              url: 'product?limit=999',
              mutation: 'SET_CARS_WITHIN_LIMIT'
            })
            this.$router.push('/' + this.$route.params.idRentaler)
          })
          Swal.fire(
            'Berhasil terhapus!',
            'Mobil ' + this.carDetail.car_title + ' sudah dihapus.',
            'success'
          )
        }
      })
    },
    selectImage (e) {
      this.selectedImage = e.target.src
    },
    showModalCheckout () {
      if (!localStorage.id) {
        this.$store.commit('MODAL_LOGIN_ON')
      } else this.modalCheckout = true
    }
  },
  beforeCreate () {
    const idCar = this.$route.params.idMobil
    this.$store.dispatch('getApi', {
      url: `product/${idCar}`,
      mutation: 'SET_CAR_DETAIL'
    })
  }
}
</script>

<style lang="scss" scoped>
li {
  list-style: none;
}
.mobil-detail {
  padding: 30px 0 40px;
}
.detail-car {
  display: flex;
}
.images {
  width: (130px + 15) * 5;
  .image-primary {
    overflow: hidden;
    width: 100%;
    img {
      height: 400px;
      width: 100%;
      object-fit: cover;
    }
  }
  .image-secondary {
    display: flex;
    padding: 10px 0 0 0;
    justify-content: flex-start;
    img {
      width: 130px;
      height: 100px;
      margin: 0 10px 0 0;
      object-fit: cover;
      cursor: pointer;
      &:last-child {
        margin-right: 0;
      }
    }
  }
}
.features-wrapper {
  padding-left: 40px;
  width: 100%;
  display: flex;
  flex-direction: column;
}
.features {
  display: flex;
  flex-direction: column;
  li {
    color: grey;
    font-size: 12px;
    border-top: 1px solid rgb(214, 214, 214);
    border-bottom: 1px solid rgb(214, 214, 214);
    margin-top: -1px;
    text-transform: capitalize;
  }
}
.features.column {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  max-height: 140px;
  column-gap: 40px;
  li {
    margin-right: 20px;
  }
}
.del {
  padding: 20px 40px;
  background: #c82022;
  border: none;
  color: #ffffff;
  font-weight: 700;
}
</style>
