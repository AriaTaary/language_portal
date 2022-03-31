<template>
  <div class="v-account">
      <div class="icons size">
        <router-link to="/profile">
        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15 0C6.7166 0 0 6.71557 0 15C0 23.2844 6.71594 30 15 30C23.2847 30 30 23.2844 30 15C30 6.71557 23.2847 0 15 0ZM15 4.48517C17.7409 4.48517 19.962 6.70701 19.962 9.44674C19.962 12.1871 17.7409 14.4083 15 14.4083C12.2604 14.4083 10.0393 12.1871 10.0393 9.44674C10.0393 6.70701 12.2604 4.48517 15 4.48517ZM14.9967 26.0782C12.263 26.0782 9.75929 25.0826 7.82812 23.4347C7.35768 23.0334 7.08623 22.445 7.08623 21.8276C7.08623 19.049 9.33497 16.8252 12.1141 16.8252H17.8872C20.667 16.8252 22.9072 19.049 22.9072 21.8276C22.9072 22.4456 22.637 23.0327 22.1659 23.434C20.2354 25.0826 17.731 26.0782 14.9967 26.0782Z" fill="white"/>
        </svg>
        </router-link>
      </div>
      <VModalWindow class="v-modal">
        <template v-slot:title>
              <h3 class="modal-title">Аккаунт</h3>
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
        </template>
        <template v-slot:footer>
          <div>
            <a class="nav-exit" href="../views/Main.vue">
              <span class="material-icons">
                exit_to_app
              </span>
              <p>Выйти</p>
            </a>
          </div>
        </template>
      </VModalWindow>
  </div>
</template>

<script>
import VModalWindow from './v-modal-window'
export default {
  components: { VModalWindow },
  name: 'VAccount',

  data () {
    return {
      userName: 'Ira',
      userSurname: 'Petrova'
    }
  },
}
</script>

<style lang="scss" scoped>
.v-account{
  color: black;
}
.v-account-info__img{
  border-radius: 50%;
  border: 1px solid #aaa7a7;
  width: 150px;
}
.v-modal{
  display: none;
  position: absolute;
}
.v-account:hover .v-modal{
  display: block;
}
.v-account{
  z-index: 1;
  position: relative;
  display: inline-block;
}
.nav-exit{
  padding: 10px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-weight: bold;

}
a{
  text-decoration: none;
  color: rgb(0, 0, 0);
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
  cursor: pointer;
  color: #ABB5D0;
}
.icons{
   cursor: pointer;
}
.modal-title{
  margin: 10px 0;
}
.size{
  font-size: 38px;
}
</style>
