<template>
  <div class="add-car">
    <div class="line">
      <h1>Add Car</h1>
    </div>
    <div class="line">
      <div class="upload d-flex justify-content-center p-3 mb-3">
      <section class="img-temp" v-for="img in 5" :key="img.id"></section>
      </div>
      <div class="pick">
      <pickFile/>
      </div>
    </div>
   <div class="line">
     <FormAdd/>
   </div>
  </div>
</template>

<script>
import FormAdd from '../components/base_/FormAdd'
import pickFile from '../components/module_/pickFile'

export default {
  name: 'AddCar',
  components: {
    FormAdd,
    pickFile
  }
}

</script>

<style lang="scss">
.add-car {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 100px;
    .line {
      display: flex;
      flex-direction: column;
      justify-content: center;
      width: 100%;
      padding: 20px;
      box-shadow: rgba(0, 0, 0, 0.08) 0px 2px 10px 0px;
      margin: 10px;
        .img-temp {
          width: 180px;
          height: 200px;
          border: 1px green dashed;
          margin: 5px;
        }
        .pick {
          width: 100%;
          display: flex;
          justify-content: center;
        }
    }
}
</style>
