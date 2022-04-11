<template>
  <div class="headerContainer">
    <div class="content">
      <span class="logo">HelpTense</span>
      <div class="menu">
        <router-link to="/" class="menuItem">Главная</router-link>
        <router-link to="/articles" class="menuItem">Учебные материалы</router-link>
        <router-link to="/program" class="menuItem">Обучение по программе</router-link>
        <router-link to="/interactive" class="menuItem">Интерактив</router-link>
        <router-link to="/songs" class="menuItem">Песни</router-link>
        <router-link to="/dictionary" class="menuItem">Словарь</router-link>
        <router-link to="/videos" class="menuItem">Фильмы и видео</router-link>
        <div v-if="authFlag">
          <router-link to="/auth" class="menuItem">
            <svg
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15 0C6.7166 0 0 6.71557 0 15C0 23.2844 6.71594 30 15 30C23.2847 30 30 23.2844 30 15C30 6.71557 23.2847 0 15 0ZM15 4.48517C17.7409 4.48517 19.962 6.70701 19.962 9.44674C19.962 12.1871 17.7409 14.4083 15 14.4083C12.2604 14.4083 10.0393 12.1871 10.0393 9.44674C10.0393 6.70701 12.2604 4.48517 15 4.48517ZM14.9967 26.0782C12.263 26.0782 9.75929 25.0826 7.82812 23.4347C7.35768 23.0334 7.08623 22.445 7.08623 21.8276C7.08623 19.049 9.33497 16.8252 12.1141 16.8252H17.8872C20.667 16.8252 22.9072 19.049 22.9072 21.8276C22.9072 22.4456 22.637 23.0327 22.1659 23.434C20.2354 25.0826 17.731 26.0782 14.9967 26.0782Z"
                fill="white"
              />
            </svg>
          </router-link>
        </div>
        <div v-else class="btn-account">
          <VAccount></VAccount>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import VAccount from './v-account';
export default {
  components: { VAccount },
  name: 'vHeder',
  data() {
    return {
      authFlag: false,
    };
  },
};
</script>
<style lang="scss">
.headerContainer {
  background-color: #abb5d0;
  height: 55px;
  display: flex;
  align-items: center;
  justify-content: center;

  & .content {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 1366px;
  }

  & .logo {
    font-weight: 600;
    font-size: 20px;
    color: white;
  }

  & .menu {
    display: flex;
    flex-direction: row;
    list-style: none;
    align-items: center;
    color: white;

    & .menuItem {
      color: white;
      text-decoration: none;
      margin-left: 30px;

      &.router-link-exact-active {
        font-weight: 600;
      }
    }
  }
}
.btn-account {
  margin-left: 30px;
}
</style>
