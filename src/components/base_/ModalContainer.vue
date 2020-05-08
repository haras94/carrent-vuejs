<template>
  <div id="modal" :class="{ 'modal-on': modalToggle }">
    <div @click="$emit('bg-click')" class="bg-modal" :class="{ 'bg-on': modalToggle }"></div>
    <div class="modal-wrapper" :style="`width: ${width || 'auto'}`" :class="{ 'pop-up' : modalToggle, 'pop-down': !modalToggle}">
      <div v-if="headTitle" class="head">
        <h3 class="m-0">{{ headTitle }}</h3>
        <i @click="$emit('close-click')" class="fas fa-times text-danger"></i>
      </div>
      <div class="body" :class="modalWrap && true ? 'wrap-on' : ''">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ModalContainer',
  props: {
    width: String,
    headTitle: String,
    modalToggle: Boolean,
    modalWrap: Boolean
  }
}
</script>

<style lang="scss" scoped>
@keyframes pop-up {
  0% {
    visibility: hidden;
    opacity: 0;
    transform: scale(.2);
  }
  60% {
    transform: scale(1.06);
  }
  100% {
    visibility: visible;
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes pop-down {
  0% {
    visibility: visible;
    opacity: 1;
    transform: scale(1);
  }
  40% {
    transform: scale(1.05);
  }
  100% {
    visibility: hidden;
    opacity: 0;
    transform: scale(.2);
  }
}
#modal {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 20;
  display: flex;
  justify-content: center;
  align-items: center;
  visibility: hidden;
}
.modal-on {
  visibility: visible;
}
.bg-modal {
  position: fixed;
  top: 0;
  width: 100vw;
  height: 100vh;
  opacity: 0;
  visibility: hidden;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 50;
  transition: ease-in .3s;
  &.bg-on {
    opacity: 1;
    visibility: visible;
    transition: ease-out .3s;
  }
}
.modal-wrapper {
  width: auto;
  height: auto;
  background-color: white;
  position: fixed;
  border-radius: 5px;
  visibility: hidden;
  opacity: 0;
  z-index: 60;
  max-height: 95vh;
  &.pop-up {
    animation-name: pop-up;
    animation-duration: .3s;
    animation-fill-mode: forwards;
    animation-timing-function: ease-out;
  }
  &.pop-down {
    animation-name: pop-down;
    animation-duration: .3s;
    animation-fill-mode: forwards;
    animation-timing-function: ease-in;
  }
  .head {
    padding: 0 30px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 10vh;
    i {
      cursor: pointer;
      font-size: 20px;
    }
  }
  .body {
    overflow-y: auto;
    max-height: 85vh;
  }
}
.wrap-on {
  padding: 20px 30px;
}
</style>
