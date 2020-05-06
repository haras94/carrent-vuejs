<template>
  <div id="modal" :class="{ 'modal-on': modalActive }">
    <div @click="$emit('bg-click')" class="bg-modal" :class="{ 'bg-on': modalActive }"></div>
    <div class="modal-wrapper" :style="`width: ${width}`" :class="modalActive ? 'pop-up' : 'pop-down'">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ModalContainer',
  props: {
    width: String,
    modalActive: Boolean
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
  width: 100px;
  height: 400px;
  background-color: white;
  position: fixed;
  border-radius: 5px;
  padding: 20px 30px;
  transform: translateY(-50%);
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
}
</style>
