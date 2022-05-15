<template>
  <div class="landingContainer">
    <div class="block">
      <img class="blockImage" src="../assets/img/learning-crop.jpeg" alt="фоновое изображение">
      <div class="blockText rightBlock">
        Изучение английского в школе HelpTense - это нескучное онлайн-обучение языку с помощью игр и интересных заданий в любое удобное для вас время
        <router-link
          to="/profile"
          class="startButton"
        >Начать</router-link>
    </div>
    </div>
    <div class="block">
      <img class="blockImage" src="../assets/img/notebook.png" alt="фоновое изображение">
      <div class="blockText leftBlock">
        Наша цель - сделать ваше обучение легким и увлекательным
        <br>
        Поэтому у нас много интерактива: изучение языка с помощью книг, музыки и наглядных карточек
        <router-link
          to="/profile"
          class="startButton"
        >Начать</router-link>
      </div>
    </div>
    <div class="block">
      <img class="blockImage" src="../assets/img/girl.png" alt="фоновое изображение">
      <div class="blockText rightBlock">
        Наши программы подходят для всех возрастов и любого уровня. Вы можете начать изучать язык с нуля, либо улучшить имеющиеся знания до свободного общения с носителями
        <router-link
          to="/profile"
          class="startButton"
        >Начать</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MainPage'
}
</script>

<style lang="scss">
.landingContainer {
  display: flex;
  flex-direction: column;
}

.block {
  position: relative;
  width: 100%;
  height: 650px;
}

.blockImage {
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.blockText {
  position: absolute;
  top: 250px;
  background-color: white;
  width: 50vw;
  font-size: 25px;
  padding: 20px;
  line-height: 40px;
  font-weight: 600;
  color:#ABB5D0;
  box-sizing: border-box;
}

.rightBlock {
  right: 0;
  border-radius: 10px 0 0 10px;

  & .startButton {
    right: 0;
    border-radius: 0 0 0 10px;
  }
}

.leftBlock {
  left: 0;
  border-radius: 0 10px 10px 0;

  & .startButton {
    left: 0;
    border-radius: 0 0 10px 0;
  }
}

.startButton {
  background-color: #ABB5D0;
  position: absolute;
  color: white;
  padding: 10px;
  bottom: -60px;

  &:hover {
    background-color: white;
    color: #ABB5D0;
  }
}
</style>
