<template>
  <div class="accountContainer">
      <router-link to="/profile">
        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15 0C6.7166 0 0 6.71557 0 15C0 23.2844 6.71594 30 15 30C23.2847 30 30 23.2844 30 15C30 6.71557 23.2847 0 15 0ZM15 4.48517C17.7409 4.48517 19.962 6.70701 19.962 9.44674C19.962 12.1871 17.7409 14.4083 15 14.4083C12.2604 14.4083 10.0393 12.1871 10.0393 9.44674C10.0393 6.70701 12.2604 4.48517 15 4.48517ZM14.9967 26.0782C12.263 26.0782 9.75929 25.0826 7.82812 23.4347C7.35768 23.0334 7.08623 22.445 7.08623 21.8276C7.08623 19.049 9.33497 16.8252 12.1141 16.8252H17.8872C20.667 16.8252 22.9072 19.049 22.9072 21.8276C22.9072 22.4456 22.637 23.0327 22.1659 23.434C20.2354 25.0826 17.731 26.0782 14.9967 26.0782Z" fill="white"/>
        </svg>
      </router-link>
      <div class="modal">
        <div class="modal-content">
          <router-link 
            class="accountInfo"
            to="/profile"
          >
            <img class="accountImage" src="../assets/img/Layer_5.png" alt="img"/>
            <div class="accountUsername">
              <span>{{userName}} </span>
              <span> {{userSurname}}</span>
            </div>
          </router-link>
        </div>
        <div class="modal-footer">
          <button class="nav-exit" href="../views/Main.vue">
            <span class="material-icons">exit_to_app</span>
            Выйти
          </button>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'AccountMenu',

  data () {
    return {
      userName: 'Ira',
      userSurname: 'Petrova'
    }
  },
}
</script>

<style lang="scss" scoped>
.accountContainer {
  z-index: 1;
  position: relative;
  display: inline-block;

  &:hover .modal{
    display: block;
  }
}

.accountInfo {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.accountImage{
  border-radius: 50%;
  width: 150px;
  width: 25%;
  margin-bottom: 20px;
}

.accountUsername{
  font-size: 20px;
  padding: 0 25px;
  align-self: center;
  color: white;

  &:hover {
    color: #5a6172;
  }
}

.nav-exit{
  display: flex;
  align-items: center;
  font-weight: 500;
  color: white;
  margin: 20px auto 0 auto;

  &:hover,
  &:hover span {
    color: #5a6172;
  }
}

.material-icons{
  margin-right: 10px;
}

.modal {
  display: none;
  position: absolute;
  top: 35px;
  right: 0;
  z-index: 2;
  background: white;
  border-radius: 0 0 10px 10px;
  padding: 30px 20px 20px 20px;
  min-width: 280px;
  max-width: 380px;
  background-color: #abb5d0;

  .modalTitle {
    color: white;
  }
}
</style>
