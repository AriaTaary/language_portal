<template>
  <div class="box">
    <template v-if="testIsOver">
      <h3 class="question">Тест завершен</h3>
      <h3 class="question">Ваш результат: {{result}}</h3>
    </template>
    <template v-else>
      <h3 class="question">
        {{ currentQuestion.question }}
      </h3>
      <div class="answersBlock">
        <div class="answer" 
          v-for="(answer, index) in shuffledAnswers"
          :key="index"
          @click.prevent="selectAnswer(index)"
          :class="answerClass(index)"
        >
          {{ answer }}
        </div>
      </div>
      <div class="buttonsList">
        <button
          class="emptyPurpleButton"
          @click="submitAnswer"
          :disabled="selectedIndex === null || answered"
        >
          Проверить
        </button>
        <button 
          class="emptyPurpleButton buttonMarginLeft"
          @click="$emit('next')" variant="success"
          :disabled="answered === false"      
        >
          Следующий
        </button>
      </div>
    </template>
  </div>
</template>

<script>
import _ from 'lodash'

export default {
  name:'TestingBox',

  props: {
    currentQuestion: {
      type: Object,
      default: () => ({}),
    },
    testIsOver: {
      type: Boolean,
      default: false,
    },
    result: {
      type: String,
      default: '',
    }
  },

  data: function() {
    return {
      selectedIndex: null,
      correctIndex: null,
      shuffledAnswers: [],
      answered: false
    }
  },

  watch: {
    currentQuestion: {
      handler() {
        this.selectedIndex = null;
        this.answered = false;
        this.shuffleAnswers();
      },
      immediate: true,
    }
  },

  methods: {
    selectAnswer(index) {
      this.selectedIndex = index;
    },

    submitAnswer() {
      let isCorrect = false;

      if (this.selectedIndex === this.correctIndex) {
        isCorrect = true;
      }

      this.answered = true;

      this.$emit('increment', isCorrect);
    },

    shuffleAnswers() {
      let answers = [...this.currentQuestion.incorrect_answers, this.currentQuestion.correct_answer];
      this.shuffledAnswers = _.shuffle(answers);
      this.correctIndex = this.shuffledAnswers.indexOf(this.currentQuestion.correct_answer);
    },
    
    answerClass(index) {
      if (!this.answered && this.selectedIndex === index) {
        return 'selected';
      } else if (this.answered && this.correctIndex === index) {
        return 'correctColor';
      } else if (this.answered && this.selectedIndex === index && this.correctIndex !== index) {
        return 'incorrectColor';
      }
    }
  }
}
</script>

<style lang="scss">
.box{
  margin-top: 40px;
  padding: 40px 100px 0 100px;
  background: #abb5d0;
  border-radius: 10px;
  width: 900px;
}

.question{
  color: white;
  font-weight: 500;
  margin-bottom: 40px;
}

.answersBlock {
  background: #fff;
  border-radius: 10px;
}

.answer {
  padding: 15px 10px;
  border: 1px solid #abb5d0;
  color: #8892ad;
  font-weight: 500;

  &:hover {
    cursor: pointer;
    color: white;
    background-color: #abb5d0;
  }
}

.selected {
  color: white;
  background-color: #abb5d0;
}

.buttonsList {
  margin: 40px 0;
}
</style>