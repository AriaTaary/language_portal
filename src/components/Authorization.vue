<template>
  <div>
    <div class="authorization-block">
      <div class="modal-window-authorization">
        <nav class="enter-link" v-bind:class="active" @click.prevent>
          <span @click="makeActive(PROFILE_ENTER.auth)" class="authorization">Вход</span>
          <div class="vr"></div>
          <span @click="makeActive(PROFILE_ENTER.reg)" class="registration">Регистрация</span>
        </nav>
        <button @click="$parent.controlAuthWindow" class="crossIcon">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.442892 20L10 10.4421L19.5571 20L20 19.5581L10.4422 9.99984L20 0.441265L19.5571 0L10 9.55759L0.442892 0L0 0.441265L9.5578 9.99984L0 19.5581L0.442892 20Z"
              fill="black"
            />
          </svg>
        </button>
        <div v-if="active===PROFILE_ENTER.auth">
          <form action="#" class="auth-enter" method="get">
            <label for="email">Email</label>
            <input type="email" v-model="auth_email" placeholder="Введите email" />
            <label for="password">Пароль</label>
            <input type="password" v-model="auth_password" placeholder="Пароль" />
            <button class="auth-btn" type="submit">Войти</button>
          </form>
        </div>
        <div v-else>
          <form action="#" class="auth-registration" method="get">
            <label for="first_name">Имя</label>
            <input type="text" v-model="first_name" minlength="2" />
            <label for="last_name">Фамилия</label>
            <input type="text" v-model="last_name" minlength="2" />
            <label for="email">Email</label>
            <input type="email" v-model="reg_email" placeholder="Укажите email" />
            <label for="password">Пароль</label>
            <input type="password" v-model="reg_password" placeholder="Придумайте пароль" />
            <button class="reg-btn" type="submit">Зарегистрироваться</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { PROFILE_ENTER } from '../constants';

export default {
  name: 'Authorization',
  data() {
    return {
      auth_email: '',
      auth_password: '',
      first_name: '',
      last_name: '',
      reg_email: '',
      reg_password: '',
      active: '',
      PROFILE_ENTER,
    };
  },
  mounted() {
    this.active = PROFILE_ENTER.auth;
  },
  methods: {
    makeActive(item) {
      this.active = item;
    },
  },
};
</script>
<style lang="scss" scoped>
.authorization-block {
  background-color: rgba(0, 0, 0, 0.4);
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
  position: absolute;
  top: 0;
  left: 0;
}
.enter-link {
  display: flex;
  justify-content: space-between;
  width: 200px;
  span {
    text-decoration: none;
    color: gray;
    text-transform: uppercase;
    font-size: 16px;
    cursor: pointer;
  }
}
nav.authorization .authorization,
nav.registration .registration {
  color: black;
}
.vr {
  display: inline;
  border-left: 2px solid #d0d0d0;
}
.modal-window-authorization {
  width: 470px;
  border-radius: 10px;
  background-color: white;
  padding: 20px 20px;
  z-index: 2;
  box-shadow: 5px 5px 100px 5px rgba(0, 0, 0, 0.55);
  position: relative;
}
.auth-enter {
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-top: 35px;
  label {
    text-transform: uppercase;
    color: black;
    font-size: 14px;
  }
  input {
    padding: 5px 10px;
    margin-top: 15px;
    margin-bottom: 15px;
    border: 1px solid rgb(187, 187, 187);
  }
}
.auth-btn {
  background: #d8474e;
  border: none;
  color: white;
  width: 85px;
  margin: auto;
  margin-top: 30px;
  padding: 6px 15px;
  font-size: 14px;
  border-radius: 6px;
  transition: all 0.4s ease;
  cursor: pointer;
  box-sizing: border-box;
  &:hover {
    background: rgba(0, 0, 0, 0);
    color: #d8474e;
    box-shadow: inset 0 0 0 2px #d8474e;
  }
}
.auth-registration {
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-top: 35px;
  label {
    text-transform: uppercase;
    color: black;
    font-size: 14px;
  }
  input {
    padding: 5px 10px;
    margin-top: 15px;
    margin-bottom: 15px;
    border: 1px solid rgb(187, 187, 187);
  }
}
.reg-btn {
  background: #d8474e;
  border: none;
  color: white;
  width: 200px;
  margin: auto;
  margin-top: 30px;
  padding: 6px 15px;
  font-size: 14px;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.4s ease;
  box-sizing: border-box;
  &:hover {
    background: rgba(0, 0, 0, 0);
    color: #d8474e;
    box-shadow: inset 0 0 0 2px #d8474e;
  }
}
.crossIcon {
  position: absolute;
  top: 15px;
  right: 15px;
}
</style>
