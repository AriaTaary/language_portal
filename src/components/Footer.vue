<template>
  <div class="footerContainer">
    <div class="menu">
      <div class="menuColumn leftColumn">
        <router-link
          to="/"
          class="menuItem"
        >Главная</router-link>
        <router-link
          to="/empty"
          class="menuItem"
        >Учебные материалы</router-link>
        <router-link
          to="/empty"
          class="menuItem"
        >Обучение по программе</router-link>
      </div>
      <div class="menuColumn centerColumn">
        <router-link
          to="/empty"
          class="menuItem"
        >Книги</router-link>
        <router-link
          to="/empty"
          class="menuItem"
        >Фильмы</router-link>
        <router-link
          to="/empty"
          class="menuItem"
        >Обучающие карточки</router-link>
      </div>
      <div class="menuColumn rightColumn">
        <router-link
          to="/profile"
          class="menuItem"
        >Личный кабинет</router-link>
        <router-link
          to="/empty"
          class="menuItem"
        >Мое обучение</router-link>
        <router-link
          to="/empty"
          class="menuItem"
        >Тестирование</router-link>
      </div>
    </div>
    <span class="logo">
      © 2022 HELPTENSE
    </span>
  </div>
</template>

<style lang="scss">
.footerContainer {
  background-color: #ABB5D0;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 35px 35px 10px;

    & .logo {
      font-weight: 400;
      font-size: 15px;
      color: white;
    }

    & .menu {
    display: flex;
    flex-direction: row;
    list-style: none;
    align-items: center;
    color: white;
    justify-content: space-between;
    width: 100%;
    padding-bottom: 25px;
    position: relative;

    & .menuColumn {
      display: flex;
      flex-direction: column;
    }

    & .leftColumn {
      text-align: left;
    }

    & .centerColumn {
      position: absolute;
      top: 0;
      left: 50%;
      transform: translate(-50%, 0);
      margin-left: auto;
      margin-right: auto;
      text-align: center;
    }

    & .rightColumn {
      text-align: right;
    }

    & .menuItem {
      color: white;
      padding-bottom: 10px;

      &.router-link-exact-active {
        font-weight: 600;
      }
    }
  }
}
</style>
