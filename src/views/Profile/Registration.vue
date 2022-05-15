<template>
  <div>
    <div class="authorization-block">
      <div class="modal-window-authorization">
        <div class="enter-link">
          <a href="/auth" class="enter">Вход</a>
          <div class="vr"></div>
          <a href="/registration" class="registration">Регистрация</a>
        </div>
        <router-link to="/" class="crossIcon">
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
        </router-link>
        <form action="/registration" class="auth-registration" method="get">
          <label for="first_name">Имя</label>
          <input type="text" v-model="first_name" minlength="2" />
          <label for="last_name">Фамилия</label>
          <input type="text" v-model="last_name" minlength="2" />
          <label for="email">Email</label>
          <input type="email" v-model="reg_email" placeholder="Укажите email" />
          <label for="password">Пароль</label>
          <input type="password" v-model="reg_pass" placeholder="Придумайте пароль" />
          <button class="reg-btn" type="submit">Зарегистрироваться</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Registration',

  data() {
    return {
      first_name: '',
      last_name: '',
      reg_email: '',
      reg_password: '',
    };
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

  a {
    text-transform: uppercase;
    font-size: 16px;
  }

  .enter {
    color: gray;
    transition: 0.3s;

    &:hover {
      color: black;
    }
  }
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
