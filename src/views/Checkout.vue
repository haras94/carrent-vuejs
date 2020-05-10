<template>
  <div class="checkout">
    <h2>Form Pemesanan</h2>
    <div class="up">
      <NotFound v-if="checkout.driver === undefined"
        code="."
        msg="Oops, pesan dulu yuk"
      />
      <div v-else class="woz d-flex">
        <Card v-for="car in [carInCheckout]" :key="car.id" :car="car" />
        <div class="infoker">
          <FormCheckout :checkout="checkout"/>
        </div>
      </div>
      <div class="wozasky">
        <div class="info">
          <h5 class="dtl-pmsn mb-2 pb-2">Detail Pemesan</h5>
          <Form/>
          <p class="foot m-0 text-success">memesan untuk orang lain?</p>
        </div>
        <div class="info-foot">
          <div class="space">
            <section class="addsome d-flex">
              <p class="mr-3 m-0">Buat Permintaan Khusus</p>
              <i class="fas fa-pen"></i>
            </section>
            <section>
              <h5>Grand Total :</h5>
              <h4 class="text-success">IDR. {{ checkout.grand_total === undefined ? '0' : checkout.grand_total }}</h4>
            </section>
            <button class="for-btn">Lanjut Ke Pembayaran</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Card from '../components/Card'
import FormCheckout from '../components/base_/FormCheckout'
import Form from '../components/base_/form'
import NotFound from '../views/PageNotFound.vue'
import { mapState } from 'vuex'

export default {
  name: 'Checkout',
  components: {
    Card,
    FormCheckout,
    Form,
    NotFound
  },
  computed: {
    ...mapState([
      'checkout',
      'carInCheckout'
    ])
  }
}
</script>

<style lang="scss" scoped>
.checkout {
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 70px;
  padding: 0 100px;
  .up {
    display: flex;
    align-items: center;
    flex-direction: column;
    // width: 800px;
    padding: 10px;
    border: 1px solid rgba(0, 0, 0, 0.12);
      .woz{
        width: 100%;
        background: #fafbfc;
      }
      .wozasky{
        display: flex;
        width: 100%;
        background: #fafbfc;
      }
      .infoker{
        display: flex;
      flex-direction: column;
      border: 1px solid rgba(0, 0, 0, 0.12);
      padding: 10px;
      margin: 10px 10px 10px 20px;
      width: 100%;
      height: 100%;
      background: #fafbfc;
      }
    .info{
      display: flex;
      flex-direction: column;
      border: 1px solid rgba(0, 0, 0, 0.12);
      padding: 10px;
      margin: 10px 10px 10px 20px;
      width: 740px;
      height: 100%;
      background: #fafbfc;
    }
    .info-foot {
      display: flex;
      flex-direction: column;
      align-items: center;
      border: 1px solid rgba(0, 0, 0, 0.12);
      padding: 10px;
      margin: 10px 10px 10px 20px;
      width: 500px;
      height: 100%;
      background: #fafbfc;
        .dtl-pmsn{
          border-bottom: 1px solid rgba(0, 0, 0, 0.12);
        }
        .foot{
          border-top: 1px solid rgba(0, 0, 0, 0.12);
          font-size: 12px;
          font-weight: 600;
          text-align: end;
          cursor: pointer;
        }
        .space {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          align-items: center;
          width: 300px;
          height: 273px;
            .addsome {
              display: flex;
              justify-content: center;
              align-items: center;
              width: 100%;
              padding: 5px;
              color: #c0eb75;
              background: #ffffff;
              border: 1px solid rgba(0, 0, 0, 0.12);
              border-radius: 5px;
            }
            .for-btn {
              border: 3px solid #ffffff;
              padding: 10px 20px;
              border-radius: 5px;
              width: 100%;
              background: #c82022;
              color: #ffffff;
              font-weight: 600;
            }
        }
    }
  }
}
</style>
