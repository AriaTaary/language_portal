<template>
      <div class="modal-shadow">
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
        </div>
      </div>
</template>
<script>
export default {
  name: 'ModalWindow',
  data () {
    return {
    }
  },
  methods: {
    closeModal () {
      this.$emit('closeModal')
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
}
</style>
