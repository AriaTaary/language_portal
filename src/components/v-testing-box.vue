<template>
  <div class="question-box-container">
    <div class="box">
      <div class="question">
        {{ currentQuestion.question }}
      </div>

      <hr/>

      <div class="box-table">
        <div class="box-table__item" 
          v-for="(answer, index) in shuffledAnswers"
          :key="index"
          @click.prevent="selectAnswer(index)"
          :class="answerClass(index)"
        >
          {{ answer }}
        </div>
      </div>

      <div class="btns">
        <v-btn elevation="2"
        class="btn"
        variant="primary"
        @click="submitAnswer"
        :disabled="selectedIndex === null || answered"
      >
        Провеить
      </v-btn>
      <v-btn elevation="2" 
        class="btn"
        @click="next" variant="success"
        :disabled="answered === false"      
        
      >
        Следующий
      </v-btn>
      </div>
    </div>
  </div>
</template>

<script>
import _ from 'lodash'

export default {
    name:'Testing',
  props: {
    currentQuestion: Object,
    next: Function,
    increment: Function,
  },
  data: function() {
    return {
      selectedIndex: null,
      correctIndex: null,
      shuffledAnswers: [],
      answered: false
    }
  },
  computed: {
    answers() {
      let answers = [...this.currentQuestion.incorrect_answers]
      answers.push(this.currentQuestion.correct_answer)
      return answers
    }
  },
  watch: {
    currentQuestion: {
      immediate: true,
      handler() {
        this.selectedIndex = null
        this.answered = false
        this.shuffleAnswers()
      }
    }
  },
  methods: {
    selectAnswer(index) {
      this.selectedIndex = index
    },
    submitAnswer() {
      let isCorrect = false

      if (this.selectedIndex === this.correctIndex) {
        isCorrect = true
      }
      this.answered = true

      this.increment(isCorrect)
    },
    shuffleAnswers() {
      let answers = [...this.currentQuestion.incorrect_answers, this.currentQuestion.correct_answer]
      this.shuffledAnswers = _.shuffle(answers)
      this.correctIndex = this.shuffledAnswers.indexOf(this.currentQuestion.correct_answer)
    },
    answerClass(index) {
      let answerClass = ''

      if (!this.answered && this.selectedIndex === index) {
        answerClass = 'selected'
      } else if (this.answered && this.correctIndex === index) {
        answerClass = 'correct'
      } else if (this.answered &&
        this.selectedIndex === index &&
        this.correctIndex !== index
      ) {
        answerClass = 'incorrect'
      }

      return answerClass
    }
  }
}
</script>

<style scoped>
.box{
  margin-top: 30px;
  padding: 50px 100px;
  background: #e2e2e2;
  border-radius:10px;
  
}
.question{
  color: #000;
  text-shadow:
    2px 1px 0 #fff,
    2px -1px 0 #fff,
    -2px 1px 0 #fff,
    -2px -1px 0 #fff;
}
.box-table {
  background: #fff;
  -webkit-box-shadow: 0px -5px 5px -5px rgba(34, 60, 80, 0.6);
  -moz-box-shadow: 0px -5px 5px -5px rgba(34, 60, 80, 0.6);
  box-shadow: 0px -5px 5px -5px rgba(34, 60, 80, 0.6);

}
.box-table__item {
  padding: 15px 10px;
  -webkit-box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
  -moz-box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
  box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
}
.list-group {
  margin-bottom: 15px;
}

.list-group-item:hover {
  background: #EEE;
  cursor: pointer;
}

.btns {
  margin-top: 30px;
}
.btn {
  margin: 5px;
}

.selected {
  background-color: lightblue;
}

.correct {
  background-color: lightgreen;
}

.incorrect {
  background-color: red;
}
.question-box-container {
    min-width: 300px;
}

</style>