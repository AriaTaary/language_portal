<template>
  <div class="quiz">
    <b-nav tabs>
      <b-nav-item disabled><b>Правильные ответы/Всего</b></b-nav-item>
      <b-nav-item disabled
        >Количество: {{ numCorrect }}/{{ numTotal }}</b-nav-item>
    </b-nav>

    <b-container class="bv-example-row">
      <b-row>
        <b-col sm="6" offset="3">
          <div
            class="question-box-container"
            v-if="questions.length"
            :currentQuestion="questions[index]"
            :next="next"
            :increment="increment"
          >
            <b-jumbotron>
            <template>
                {{ currentQuestion.question }}
            </template>

              <hr class="my-4" />

              <b-list-group>
                <b-list-group-item
                    v-for="(answer, index) in shuffledAnswers"
                    :key="index"
                    @click.prevent="selectAnswer(index)"
                    :class="answerClass(index)"
                >
                  {{ answer }}
                </b-list-group-item>
              </b-list-group>

              <b-button
                variant="primary"
                @click="submitAnswer"
                :disabled="selectedIndex === null || answered"
              >
                Проверить
               </b-button>
                <b-button @click="next" variant="success">
                    Следующий
                </b-button>
                </b-jumbotron>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
import _ from 'lodash';
export default {
    props: {
        currentQuestion: {
            type: Object,
            required: true,
        },
        
    },
  name: 'Quiz',
  data() {
    return {
      questions: [],
      index: 0,
      numCorrect: 0,
      numTotal: 0,
      selectedIndex: null,
      correctIndex: null,
      shuffledAnswers: [],
      answered: false,
      question:''
      };
  },

  computed: {
    answers() {
        let answers = [...this.currentQuestion.incorrect_answers]
        answers.push(this.currentQuestion.correct_answer)
        return answers
    },
  },
  watch: {
    currentQuestion: {
    //   immediate: true,
      handler() {
        this.selectedIndex = null
        this.answered = false
        this.shuffleAnswers()
      }
    }
  },

    methods: {
    next() {
      this.index++;
    },
    increment(isCorrect) {
      if (isCorrect) {
        this.numCorrect++;
      }
      this.numTotal++;
    },
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
      let answerClass = '';
      if (!this.answered && this.selectedIndex === index) {
        answerClass = 'selected';
      } else if (this.answered && this.correctIndex === index) {
        answerClass = 'correct';
      } else if (
        this.answered &&
        this.selectedIndex === index &&
        this.correctIndex !== index
      ) {
        answerClass = 'incorrect';
      }
      return answerClass;
    },
  },

  mounted: function() {
    fetch('https://opentdb.com/api.php?amount=10&category=27&type=multiple', {
      method: 'get'
    })
      .then((response) => {
        return response.json()
      })
      .then((jsonData) => {
        this.questions = jsonData.results
        console.log(this.questions)
      })
  },
};
</script>

<style scoped>
.quiz{
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.list-group {
  margin-bottom: 15px;
}
.list-group-item:hover {
  background: #eee;
  cursor: pointer;
}
.btn {
  margin: 0 5px;
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
</style>
