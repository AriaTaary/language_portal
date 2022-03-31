<template>
    <transition name="modal">
      <div class="modal-shadow" >
        <div class="modal">
          <slot name="title">
              <h3 class="modal-title">Заголовок</h3>
          </slot>
          <slot name="body">
              <div class="modal-content">
                  Дефолтный контент модального окна
              </div>
          </slot>
          <slot name="footer">
              <div class="modal-footer">
              </div>
          </slot>
        </div>
      </div>
  </transition>
</template>
<script>
export default {
  name: 'VModalWindow'
}
</script>
<style lang="scss">
.v-account-info-id{
  display: flex;
}
.modal-shadow {
  position: absolute;
  top: 140px;
  left: -110px;
  height: 100%;
  width: 100%;
  background: rgba(0, 0, 0, 0.39);
  z-index: 2;
}
.modal {
  background: #fff;
  box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
  border-radius: 8px;
  padding: 15px;
  min-width: 280px;
  max-width: 380px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  &-close {
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      position: absolute;
      top: 7px;
      right: 7px;
      width: 30px;
      height: 30px;
      cursor: pointer;
  }
  &-content {
    margin-bottom: 20px;
  }
  .modal-enter-active, .modal-leave-active {
      transition: opacity 2s
  }
  .modal-enter, .modal-leave-to {
      opacity: 0
  }}
</style>
