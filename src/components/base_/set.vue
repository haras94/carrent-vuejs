<template>
  <div class="container-fluid">
    <aside class="side">
      <img src="../../assets/img/isyana-sarasvati.jpg" alt="">
      <pickFile/>
    </aside>
    <div class="line">
      <h4>Biodata</h4>
      <Form/>
    </div>
  </div>
</template>

<script>
import Swal from 'sweetalert2'
import pickFile from '../module_/pickFile.vue'
import Form from '../base_/form.vue'

export default {
  name: 'set',
  components: {
    pickFile,
    Form
  },
  methods: {
    sweet () {
      Swal.fire(
        'Succes!',
        'data anda terlah terupdate !',
        'success'
      )
    }
  }
}
</script>

<style lang="scss" scoped>
.container-fluid{
  display: flex;
  width: 880px;
  display: flex;
  // background: #c82022;
  padding: 10px;
    .side {
      width: 30%;
      height: 300px;
      border: 1px solid rgba(0, 0, 0, 0.12);
      margin: 10px;
      border-radius: 3px;
      overflow: hidden;
        img {
          width: 250px;
          height: 250px;
        }
    }
    .line {
      width: 70%;
      // height: 700px;
      border: 1px solid rgba(0, 0, 0, 0.12);
      margin: 10px;
      background:  #FAFBFC;
      border-radius: 3px;
      padding: 10px;
    }
}
</style>
