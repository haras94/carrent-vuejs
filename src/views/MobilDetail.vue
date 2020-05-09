<template>
  <div class="mobil-detail container-fluid our-wrapper">
    <div class="detail-wrapper gap">
      <h1 class="my-4">Toyota Agya</h1>
      <div class="detail-car">
        <div class="images">
          <div class="image-primary">
            <img :src="selectedImage" />
          </div>
          <div class="image-secondary">
            <img
              @click="selectImage($event)"
              id="image-1"
              src="https://images.unsplash.com/photo-1494976388531-d1058494cdd8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80"
            />
            <img
              @click="selectImage($event)"
              id="image-2"
              src="https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80"
            />
            <img
              @click="selectImage($event)"
              id="image-3"
              src="https://images.unsplash.com/photo-1517994112540-009c47ea476b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80"
            />
            <img
              @click="selectImage($event)"
              id="image-4"
              src="https://images.unsplash.com/photo-1494976388531-d1058494cdd8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80"
            />
            <img @click="selectImage($event)" id="image-5" src="../assets/img/isyana-sarasvati.jpg" />
          </div>
        </div>
        <div class="features-wrapper">
          <section class="info-rental mb-5">
            <h1 class="text-danger">agya rental</h1>
            <p>
              <i class="fas fa-map-pin mr-2 text-danger"></i> Jl.Cendana, Jalan Cendana 10, Menteng, Jakarta Pusat 10350
            </p>
          </section>
          <div class="price-wrapper">
            <h3 class="price">Rp. 120000 / hari</h3>
          </div>
          <ul class="features">
            <li class="p-2">
              <i class="fas fa-check-circle text-success mr-2"></i>4 Tempat Duduk
            </li>
            <li class="p-2">
              <i class="fas fa-check-circle text-success mr-2"></i>4 Tempat Duduk
            </li>
            <li class="p-2">
              <i class="fas fa-check-circle text-success mr-2"></i>4 Tempat Duduk
            </li>
            <li class="p-2">
              <i class="fas fa-check-circle text-success mr-2"></i>4 Tempat Duduk
            </li>
          </ul>
          <button @click="showModalCheckout" class="btn btn-danger mt-auto py-3">SEWA SEKARANG</button>
        </div>
      </div>
      <div class="description pt-5 mb-5">
        <h4>Deskripsi</h4>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda facilis incidunt praesentium quam nobis, architecto aliquam. Eum quaerat numquam beatae ab autem at tempore esse expedita hic dicta! Odit facere deleniti adipisci suscipit officiis delectus nostrum illum repellendus beatae cupiditate asperiores sint autem aliquam, ea aperiam possimus. Sunt aliquid consequuntur neque nisi ducimus unde harum itaque explicabo sint eveniet nostrum quo rerum in, porro molestiae optio veritatis ea eos iusto. Atque, temporibus ipsam eaque laboriosam quod architecto vero qui! Nam repudiandae aliquam atque libero quia repellendus eius qui necessitatibus distinctio, delectus ex voluptatum. Nemo obcaecati illum ullam totam distinctio autem.</p>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque odio repudiandae explicabo in nihil iusto animi molestiae possimus consequatur neque, numquam debitis, sequi minus sed quidem nostrum ad laborum? Incidunt iure inventore, facere voluptate, reiciendis ut asperiores, ipsa laudantium repudiandae numquam architecto fugit laboriosam! Accusantium quas laborum quod, quos cum eaque ut ullam labore numquam perferendis obcaecati enim ipsum expedita, omnis deleniti quo ab aperiam qui id minima? Fuga, quaerat.</p>
      </div>
      <div class="mb-5">
        <h4>Fitur</h4>
        <div class="row">
          <div class="col">
            <ul class="features column">
              <li v-for="feature in 8" :key="feature" class="p-2">
                <i class="fas fa-check-circle text-success mr-2"></i>4 Tempat Duduk
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <ModalContainer
      :modalToggle="modalCheckout"
      :modalWrap="true"
      headTitle="Sewa Toyota Agya"
      width="600px"
      @bg-click="modalCheckout = false"
      @close-click="modalCheckout = false"
    >
      <FormCheckout :withButton="true" />
    </ModalContainer>
  </div>
</template>

<script>
import ModalContainer from '../components/base_/ModalContainer.vue'
import FormCheckout from '../components/base_/FormCheckout.vue'

export default {
  name: 'MobilDetail',
  components: {
    ModalContainer,
    FormCheckout
  },
  data () {
    return {
      selectedImage:
        'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=350&q=80',
      modalCheckout: false
    }
  },
  methods: {
    selectImage (e) {
      this.selectedImage = e.target.src
    },
    showModalCheckout () {
      if (!localStorage.id) {
        this.$store.commit('MODAL_LOGIN_ON')
      } else this.modalCheckout = true
    }
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
    justify-content: space-between;
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
</style>
