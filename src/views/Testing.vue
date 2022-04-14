<template>
  <div class="quiz">
     <b-nav tabs>
      <b-nav-item disabled><b>Правильные/Всего</b></b-nav-item>
      <b-nav-item disabled>Количество: {{ numCorrect }}/{{ numTotal }}</b-nav-item>
    </b-nav>

    <b-container class="bv-example-row">
      <b-row>
        <b-col sm="6" offset="3">
          <TestingBox
            v-if="questions.length"
            :currentQuestion="questions[index]"
            :next="next"
            :increment="increment"
          />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import TestingBox from '../components/v-testing-box.vue'
import Questions from '../db/tests.json'
export default {
  name: 'Testing',
  components: {
    TestingBox  
    },
  data() {
    return {
      questions: [],
      index: 0,
      numCorrect: 0,
      numTotal: 0
    }
  },
  methods: {
    next() {
      if(this.index == this.questions.length-1){
        return
      }else{      
        this.index++
      }
      
    },
    increment(isCorrect) {
      if (isCorrect) {
        this.numCorrect++
      }
      this.numTotal++
    }
  },
  mounted: function() {
    this.questions  = Questions.results
  }
}
</script>

<style>
.quiz {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.bv-example-row {
  display: flex;
  justify-content: center;
}
</style>