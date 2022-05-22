<template>
  <div class="wrapper">
    <h1>Обучение</h1>
    <div class="progress-list">
      <div class="progress-block">
        <h3 class="progress-block__heading">Прогресс</h3>
        <TrainingProgress />
      </div>
      <div class="programm-list">
        <div class="type-item">
          <div class="level">
            <div class="level-type">
              <div class="type-box">Начальный</div>
              <div class="override">
                <v-app id="inspire">
                  <div class="text-center">
                    <router-link to="/programpage">
                      <v-btn class="btn-start" x-large rounded color="primary" dark>начать обучение</v-btn>
                    </router-link>
                  </div>
                </v-app>
              </div>
              <router-link to="/programpageGrammar" class="type-programm">
                <p>Грамматика</p>
                <span class="material-icons icon center">push_pin</span>
              </router-link>
              <router-link to="/programpageVocabulary" class="type-programm">
                <p>Лексика</p>
                <span class="material-icons icon center">push_pin</span>
              </router-link>
              <router-link to="/programpageAudition" class="type-programm">
                <p>Аудирование</p>
                <span class="material-icons icon center">push_pin</span>
              </router-link>
              <router-link to="/programpageTesting" class="type-programm">
                <p>Тесты</p>
                <span class="material-icons icon center">push_pin</span>
              </router-link>
            </div>
          </div>
          <div class="text-progress">
            <span class="material-icons icon icon-txt">turned_in_not</span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est eos doloribus, reprehenderit incidunt illum quisquam pariatur officiis sunt, debitis, deleniti enim sit quas facilis repudiandae. Est aliquid magni et aliquam.
          </div>
        </div>
        <div class="type-item">
          <div class="text-progress">
            <span class="material-icons icon icon-txt">turned_in_not</span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est eos doloribus, reprehenderit incidunt illum quisquam pariatur officiis sunt, debitis, deleniti enim sit quas facilis repudiandae. Est aliquid magni et aliquam.
          </div>
          <div class="level">
            <div class="level-type">
              <div class="type-box">Средний</div>
              <div class="override">
                <v-app id="inspire">
                  <div class="text-center">
                    <router-link to="/programpage">
                      <v-btn class="btn-start" x-large rounded color="primary" dark>начать обучение</v-btn>
                    </router-link>
                  </div>
                </v-app>
              </div>
              <router-link to="/programpageGrammar" class="type-programm">
                <p>Грамматика</p>
                <span class="material-icons icon center">push_pin</span>
              </router-link>
              <router-link to="/programpageVocabulary" class="type-programm">
                <p>Лексика</p>
                <span class="material-icons icon center">push_pin</span>
              </router-link>
              <router-link to="/programpageAudition" class="type-programm">
                <p>Аудирование</p>
                <span class="material-icons icon center">push_pin</span>
              </router-link>
              <router-link to="/programpageTesting" class="type-programm">
                <p>Тесты</p>
                <span class="material-icons icon center">push_pin</span>
              </router-link>
            </div>
          </div>
        </div>
        <div class="type-item">
          <div class="level">
            <div class="level-type">
              <div class="type-box">Продвинутый</div>
              <div class="override">
                <v-app id="inspire">
                  <div class="text-center"></div>
                  <router-link to="/programpage">
                    <v-btn class="btn-start" x-large rounded color="primary" dark>начать обучение</v-btn>
                  </router-link>
                </v-app>
              </div>
              <router-link to="/programpageGrammar" class="type-programm">
                <p>Грамматика</p>
                <span class="material-icons icon center">push_pin</span>
              </router-link>
              <router-link to="/programpageVocabulary" class="type-programm">
                <p>Лексика</p>
                <span class="material-icons icon center">push_pin</span>
              </router-link>
              <router-link to="/programpageAudition" class="type-programm">
                <p>Аудирование</p>
                <span class="material-icons icon center">push_pin</span>
              </router-link>
              <router-link to="/programpageTesting" class="type-programm">
                <p>Тесты</p>
                <span class="material-icons icon center">push_pin</span>
              </router-link>
            </div>
          </div>
          <div class="text-progress">
            <span class="material-icons icon icon-txt">turned_in_not</span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est eos doloribus, reprehenderit incidunt illum quisquam pariatur officiis sunt, debitis, deleniti enim sit quas facilis repudiandae. Est aliquid magni et aliquam.
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TrainingProgress from '../components/ProgramComponents/TrainingProgress.vue';

export default {
  components: { TrainingProgress },
  props: { value: Number },
  name: 'TrainingPrograms',

  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="scss" scoped>
.theme--light.v-application {
  background: none;
}
::v-deep .v-application--wrap {
  min-height: fit-content;
}
.btn-start {
  margin: 40px;
}

.wrapper {
  text-align: center;
  margin: 25px auto;
  width: 100%;
  max-width: 1600px;
}
.wrapper h1 {
  margin-top: 30px;
  margin-bottom: 70px;
  text-align: center;
  font-size: 24px;
  color: #666e83;
}
.progress-list {
  display: flex;
  justify-content: space-around;
}
.progress-block {
  margin: 0 50px;
  width: 400px;
  height: 630px;
  border-radius: 20px;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  .progress-block__heading {
    margin-top: 20px;
    font-size: 16px;
    color: #1976d2;
  }
}
.programm-list {
  width: 100%;
}
.type-item {
  display: flex;
  justify-content: space-evenly;
  margin-bottom: 200px;
}
.text-progress {
  position: relative;
  padding: 30px 0;
  border: 1px solid black;
  width: 300px;
  height: 250px;
}

.type-box {
  font-weight: 600;
  text-align: center;
  font-size: 20px;
  color: #666e83;
  cursor: pointer;
  padding: 70px 100px;
  background-color: rgb(232, 232, 232);
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
}
.icon {
  position: absolute;
  left: 4px;
  top: -4px;
  color: #868ea1;
  transform: rotate(-45deg) scale(1.5);
}
.center {
  transform: rotate(25deg) scale(1);
}
.icon-txt {
  color: red;
  transform: rotate(0deg) scale(1.7);
  top: 0;
  left: 18px;
}
.type-programm {
  margin-bottom: 10px;
  cursor: pointer;
  position: relative;
  font-size: 18px;
  padding: 15px;
  box-shadow: 0 7px 14px rgba(0, 0, 0, 0.25), 0 5px 5px rgba(0, 0, 0, 0.22);
  background-color: rgb(232, 232, 232);
  display: flex;
  justify-content: center;
}
.level-type {
  display: flex;
  flex-direction: column;
}

.type-programm:hover {
  background-color: #666e83;
  color: white;
  background: linear-gradient(
      rgba(135, 60, 255, 0.4),
      rgba(135, 60, 255, 0) 80%
    ),
    linear-gradient(
      -45deg,
      rgba(120, 155, 255, 0.9) 25%,
      rgba(255, 160, 65, 0.9) 75%
    );
  font-weight: 700;
}
</style>