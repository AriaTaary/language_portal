<template>
  <div class="v-account">
     <div class="v-account-cart" @click="showModal">
        <span class="material-icons size"> account_circle </span>
        <VModalWindow
        v-if="show"
        @closeModal="closeInfoModal"
        >
          <template v-slot:title>
                <h3 class="modal-title">Профиль</h3>
          </template>
          <template v-slot:body>
            <div class="v-account-info">
              <div class="v-account-info-id">
                <img class="v-account-info__img" src="../assets/img/Layer_5.png" alt="img"/>
                <div class="v-account-username">
                  <span class="v-account-info__name">{{userName}} </span>
                  <span class="v-account-info__surname"> {{userSurname}}</span>
                </div>
              </div>
            </div>
            <div id="nav">
              <router-link to="/profile">Профиль</router-link>
            </div>
            <div class="nav-exit">
              <a class="nav-exit" href="../App.vue">
                <span class="material-icons">
              exit_to_app
              </span>
              <p>Выйти</p>
              </a>
              </div>
              <router-view/>
          </template>
        </VModalWindow>
    </div>
  </div>
</template>

<script>
import VModalWindow from './v-modal-window'
export default {
  components: { VModalWindow },
  name: 'VAccount',

  data () {
    return {
      show: false,
      userName: 'Ira',
      userSurname: 'Petrova'
    }
  },

  mounted () {
  },

  methods: {
    showModal () {
      this.show = true
    },
    closeModal () {
      this.show = false
    }
  }
}
</script>

<style lang="scss" scoped>
.nav-exit{
  padding: 10px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-weight: bold;
}
a{
  text-decoration: none;
}

#nav{
  padding: 10px;
  display: flex;
  justify-content: center;
}
.material-icons{
  margin-right: 10px;
}
.v-account-info{
  padding: 10px 25px;
  font-size: 18px;
}
.v-account-info__img{
  width: 25%;
}
.v-account-username{
  padding: 0 25px;
  align-self: center;
}
.material-icons {
  color: #a4a4a4;
}
.size{
  font-size: 100px;
}
</style>
