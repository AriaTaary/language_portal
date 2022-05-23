<template>
  <div class="container">
    <div class="wrapper">
      <h1>Обучение</h1>
      <div class="progress-list">
        <div class="progress-block">
          <h2 class="verticalMargin">Прогресс</h2>
          <TrainingProgress />
        </div>
        <div class="programm-list">
          <div class="levelBlock">
            <div class="level-type centerBlock">
              <h2 class="levelTitle">Начальный <br> уровень</h2>
              <router-link to="/programpage" class="buttonLink">
                <span class="purpleButton verticalMargin bigButton">Начать обучение</span>
              </router-link>
              <router-link to="/programpageGrammar" class="type-programm">
                <span class="emptyPurpleButton bigButton">Грамматика</span>
                <span class="material-icons icon center">push_pin</span>
              </router-link>
              <router-link to="/programpageVocabulary" class="type-programm">
                <span class="emptyPurpleButton bigButton">Лексика</span>
                <span class="material-icons icon center">push_pin</span>
              </router-link>
              <router-link to="/programpageAudition" class="type-programm">
                <span class="emptyPurpleButton bigButton">Аудирование</span>
                <span class="material-icons icon center">push_pin</span>
              </router-link>
              <router-link to="/programpageTesting" class="type-programm">
                <span class="emptyPurpleButton bigButton">Тесты</span>
                <span class="material-icons icon center">push_pin</span>
              </router-link>
            </div>
            <div class="levelDescription">
              Начальный уровень подходит для тех, кто только познакомился с английским языком. Мы поможем вам подружиться и объясним всю необходимую базовую информацию: основные времена, артикли, построение вопросительных предложений, а также научим говорить на основные темы.
            </div>
          </div>
          <div class="levelBlock">
            <div class="levelDescription centerBlock">
              Средний уровень подойдет тем, кто уже знаком с языком. С помощью программы вы сможете поднять качество вашего языка на новый уровень, овладедь более сложными грамматическими конструкцими и расширить свой словарный запас.
            </div>
            <div class="level-type">
              <h2 class="levelTitle">Средний <br> уровень</h2>
              <router-link to="/programpage" class="buttonLink">
                <span class="purpleButton verticalMargin bigButton">Начать обучение</span>
              </router-link>
              <router-link to="/programpageGrammar" class="type-programm">
                <span class="emptyPurpleButton bigButton">Грамматика</span>
                <span class="material-icons icon center">push_pin</span>
              </router-link>
              <router-link to="/programpageVocabulary" class="type-programm">
                <span class="emptyPurpleButton bigButton">Лексика</span>
                <span class="material-icons icon center">push_pin</span>
              </router-link>
              <router-link to="/programpageAudition" class="type-programm">
                <span class="emptyPurpleButton bigButton">Аудирование</span>
                <span class="material-icons icon center">push_pin</span>
              </router-link>
              <router-link to="/programpageTesting" class="type-programm">
                <span class="emptyPurpleButton bigButton">Тесты</span>
                <span class="material-icons icon center">push_pin</span>
              </router-link>
            </div>
          </div>
          <div class="levelBlock">
            <div class="level-type centerBlock">
              <h2 class="levelTitle">Продвинутый <br> уровень</h2>
              <router-link to="/programpage" class="buttonLink">
                <span class="purpleButton verticalMargin bigButton">Начать обучение</span>
              </router-link>
              <router-link to="/programpageGrammar" class="type-programm">
                <span class="emptyPurpleButton bigButton">Грамматика</span>
                <span class="material-icons icon center">push_pin</span>
              </router-link>
              <router-link to="/programpageVocabulary" class="type-programm">
                <span class="emptyPurpleButton bigButton">Лексика</span>
                <span class="material-icons icon center">push_pin</span>
              </router-link>
              <router-link to="/programpageAudition" class="type-programm">
                <span class="emptyPurpleButton bigButton">Аудирование</span>
                <span class="material-icons icon center">push_pin</span>
              </router-link>
              <router-link to="/programpageTesting" class="type-programm">
                <span class="emptyPurpleButton bigButton">Тесты</span>
                <span class="material-icons icon center">push_pin</span>
              </router-link>
            </div>
            <div class="levelDescription">
              Продвинутый уровень поможет подтянуть ваш уровень языка до уровня носителя. Вы сможете спокойно общаться в языковой среде, понимать и поддерживать разговор на все популярные темы, включая специализированные направления. При успешном завершении курса вы также сможете выступать в роли преподавателя.
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TrainingProgress from '../components/ProgramComponents/TrainingProgress.vue';

export default {
  name: 'TrainingPrograms',

  components: { 
    TrainingProgress,
  },

  props: { 
    value: Number
  },
};
</script>

<style lang="scss" scoped>
.buttonLink {
  display: flex;
  align-items: center;
  justify-content: center;
}

.bigButton {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
  padding: 10px 0;
  height: 50px;
}

.levelTitle {
  background-color: rgba(170, 180, 207, 0.2);
  border-radius: 10px;
  padding: 40px;
  margin-bottom: 0;
  width: 300px;
}

.levelDescription {
  color: rgba(130, 138, 158, 1);
  padding: 40px;
  border: 1px solid #abb5d0;
  width: 300px;
  line-height: 25px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  height: 489px;
}

.theme--light.v-application {
  background: none;
}

::v-deep .v-application--wrap {
  min-height: fit-content;
}

.btn-start {
  margin: 40px;
}

.progress-list {
  display: flex;
  justify-content: space-around;
}

.progress-block {
  width: 400px;
  height: 712px;
  border-radius: 20px;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
}

.programm-list {
  width: 100%;
}

.levelBlock {
  display: flex;
  justify-content: flex-end;

  &:not(:last-child) {
    margin-bottom: 80px;
  }
}

.icon {
  position: absolute;
  left: 4px;
  top: -4px;
  color: #8892ad;
  transform: rotate(-45deg) scale(1.5);
}

.center {
  transform: rotate(25deg) scale(1);
}

.type-programm {
  position: relative;
  display: flex;
  justify-content: center;

  &:not(:last-child) {
    margin-bottom: 10px;
  }

  &:hover .icon {
    color: black;
  }
}

.level-type {
  display: flex;
  flex-direction: column;
}

.centerBlock{
  margin: 0 auto;
}
</style>