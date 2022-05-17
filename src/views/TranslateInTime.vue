<template>
  <div class="container">
    <div class="wrapper">
      <MiniHeader />
      <h1>Перевод на время</h1>
      <div class="timerBlock">
        <v-progress-circular
          :rotate="-90"
          :size="80"
          :width="10"
          v-model="secondsValue"
          color="#8892ad"
          class="timer" 
        >
          {{ secondsValue }}
        </v-progress-circular>
        <span
          v-if="!secondsValue"
          class="disabledButton" 
        >Время вышло</span>
        <button
          v-else-if="timerId"
          @click="stopTimer()"
          class="purpleButton" 
        >
          Стоп
        </button>
        <button
          v-else
          @click="updateTimer()"
          class="purpleButton" 
        >
          Начать
        </button>
      </div>
      <div class="answerInfoContainer">
        <div class="searchField">
          <button 
            class="searchButton" 
            type="submit" 
            @click="checkWord()"
            :disabled="inputDisabled"
          >
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0.157129 6.63632C-0.0582586 6.83988 -0.0513506 7.16349 0.17255 7.35928C0.396443 7.55507 0.752552 7.5488 0.967933 7.34524L6.93785 1.70456V14.4887C6.93785 14.7711 7.18971 15 7.50037 15C7.81104 15 8.0629 14.7711 8.0629 14.4887V1.70524L14.0321 7.34524C14.2475 7.5488 14.6036 7.55507 14.8275 7.35928C15.0514 7.16349 15.0583 6.83988 14.8428 6.63632L8.04055 0.209107C7.74549 -0.0697024 7.25451 -0.0697024 6.95945 0.209107L0.157129 6.63632Z" fill="#D5444C"/>
            </svg>
          </button>
          <input 
            v-model="translation"
            class="inputSearch" 
            placeholder="введите перевод" 
            type="search"
            :disabled="inputDisabled"
            @keyup.enter="checkWord()"
          >
        </div>
        <template v-if="!secondsValue || correctAnswersValue === array.length">
          <span 
            v-if="!this.correctAnswersValue" 
            class="badResult">Вы перевели 0 слов</span>
          <span 
            v-else-if="this.correctAnswersValue === 1" 
            class="goodResult">Вы перевели  {{correctAnswersValue}}  слово</span>
          <span 
            v-else-if="this.correctAnswersValue > 1 && this.correctAnswersValue < 4" 
            class="goodResult">Вы перевели  {{correctAnswersValue}}  слова</span>
          <span 
            v-else 
            class="goodResult">Вы перевели  {{correctAnswersValue}}  слов</span>
        </template>
      </div> 
      <v-simple-table class="table">
        <template v-slot:default>
          <thead>
            <tr>
              <th>Word</th>
              <th>Translate</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in array" :key="item.id">
              <td>{{ item.word }}</td>
              <td :class="{ 'answerBlock': true, 'correctColor': item.active === true }">
                <span v-if="item.active === true">{{ item.translation }}</span>
              </td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </div>
  </div>
</template>

<script>
import MiniHeader from '../components/MiniHeader.vue';
import TranslationInTimeList from '../db/translationInTimeList';

export default {
  name: 'TranslateInTime',

  components: {
    MiniHeader,
  },

  data() {
    return {
      timerId: '',
      secondsValue: 100,
      translation: '',
      inputDisabled: true,
      correctAnswersValue: 0,
      answerIndex: 0,
      array: TranslationInTimeList,
    };
  },

  beforeDestroy() {
    this.stopTimer()
  },

  methods: {
    checkWord() {
      if (this.answerIndex >= this.array.length) {
        return;

      }
      if (this.array[this.answerIndex].translation.toLowerCase() === this.translation.toLowerCase()) {
        this.array[this.answerIndex].active = true;
        this.correctAnswersValue++;
        this.answerIndex++;
        this.translation = '';
      }
    },

    updateTimer() { 
      if (this.secondsValue > 0) {
        this.secondsValue--;
        this.timerId = setTimeout(this.updateTimer, 1000);
        this.inputDisabled = false;
      } else {
        this.stopTimer()
      }
    },

    stopTimer() {
      clearTimeout(this.timerId)
      this.timerId = '';
      this.inputDisabled = true;
    },
  },
};
</script>

<style lang="scss">
.timerBlock {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.timer {
  margin-bottom: 40px;
}

.answerInfoContainer {
  width: 900px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 40px auto;
}

.table {
  margin: 40px auto 0 auto;
  border: 1px solid #a8b4d4;
  border-radius: 10px;
  width: 900px;
  overflow: hidden;
  border-collapse: collapse;

  & th {
    background-color: #abb5d0;
    color: white !important;
    width: 50%;
  }

  & tr, td {
    border: 1px solid #a8b4d4;
  }
}

.answerBlock {
  padding: 0 !important;
}

.goodResult {
  display: flex;
  align-items: center;
  justify-content: center;
  color: green;
  font-size: 20px;
}

.badResult {
  display: flex;
  align-items: center;
  justify-content: center;
  color: #D5444C;
  font-size: 20px;
}
</style>
