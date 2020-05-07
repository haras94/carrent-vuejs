<template>
  <div class="checkout">
    <h2>Form Pemesanan</h2>
    <div class="up">
      <Card />
      <div class="info">
          <FormCheckout/>
      </div>
      <div class="info">
        <h5 class="dtl-pmsn mb-2 pb-2">Detail Pemesan</h5>
        <Form/>
        <p class="foot m-0 text-success">memesan untuk orang lain?</p>
      </div>
      <div class="info">
        <div class="space">
          <section class="addsome d-flex">
            <p class="mr-3 m-0">Buat Permintaan Khusus</p>
            <i class="fas fa-pen"></i>
          </section>
          <button class="for-btn">Lanjut Ke Pembayaran</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Card from '../components/Card'
import FormCheckout from '../components/base_/FormCheckout'
import Form from '../components/base_/form'

export default {
  name: 'Checkout',
  components: {
    Card,
    FormCheckout,
    Form
  }
}
</script>

<style lang="scss" scoped>
.checkout {
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 70px;
  padding: 16px;
  .up {
    display: flex;
    align-items: center;
    width: 100%;
    padding: 10px;
    border: 1px solid rgba(0, 0, 0, 0.12);
    .info {
      border: 1px solid rgba(0, 0, 0, 0.12);
      padding: 10px;
      margin: 10px 10px 10px 20px;
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
