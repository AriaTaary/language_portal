<template>
    <transition name="modal">
      <div v-if="show" class="modal-shadow" @click.self="closeModal">
        <div class="modal">
          <span class="modal-close" >
            <i class="material-icons" @click="closeModal">close</i>
          </span>
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
  name: 'VModalWindow',
  data () {
    return {
      show: false
    }
  },
  methods: {
    closeModal () {
      this.show = false
    }
  }
}
</script>
<style lang="scss">
.v-account-info-id{
  display: flex;
}
.modal-shadow {
  position: absolute;
  top: 0;
  left: 0;
  min-height: 100%;
  width: 100%;
  background: rgba(0, 0, 0, 0.39);
}
.modal {
  background: #fff;
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
