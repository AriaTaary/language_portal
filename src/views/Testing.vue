<template>
  <div class="container">
    <div :class="{'wrapper': showMenuHeader, 'wrapperWithoutHeader': !showMenuHeader}">
      <MiniHeader v-if='showMenuHeader' />
      <h1>Тестирование</h1>
      <div class="quiz">
        <div class="quizInfo">Правильных ответов: 
          <b>{{ numCorrect }}</b>
        </div>
        <div class="quizInfo">Пройдено вопросов: 
          <b>{{ numTotal }}</b>
        </div>
        <TestingBox
          v-if="questions.length"
          :currentQuestion="questions[index]"
          :testIsOver="testIsOver"
          :result="result"
          @next="next"
          @increment="increment"
        />
      </div>
    </div>
  </div>
</template>

<script>
import MiniHeader from '../components/MiniHeader.vue'
import TestingBox from '../components/TestingBox.vue'
import Questions from '../db/tests.json'

export default {
  name: 'Testing',

  components: {
    TestingBox,
    MiniHeader,
  },

  props: {
    showMenuHeader: {
      type: Boolean,
      default: true,
    },
  },

  data() {
    return {
      questions: [],
      index: 0,
      numCorrect: 0,
      numTotal: 0,
      testIsOver: false,
      result: '',
    };
  },

  beforeMount() {
    this.questions = Questions.results;
  },

  methods: {
    next() {
      if (this.index !== this.questions.length-1) {
        this.index++;
      } else {
        this.result = `${this.numCorrect}/${this.numTotal}`
        this.testIsOver = true;
      }
    },

    increment(isCorrect) {
      if (isCorrect) {
        this.numCorrect++;
      }
      this.numTotal++;
    }
  },
}
</script>

<style lang="scss">
.quiz {
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.quizInfo {
  margin-bottom: 10px;

  & b {
    color: #8892ad;
  }
}
</style>