<template>
  <div class="block">
    <div v-for="(question, index) in testing.questions" :key="index" class="block-tests">
      <div v-show="index === questionIndex">
        <h3>{{ question.text }}</h3>
        <ol>
          <li v-for="(response, index) in question.responses" :key="index">
            <label>
              <input
                type="radio"
                :value="response.correct"
                :name="response"
                v-model="userResponses[index]"
              />{{ response.text }}
            </label>
          </li>
        </ol>
        <div
          class="but_sad_s_2 blue_sad avd_div"
          v-if="questionIndex > 0"
          @click="prev"
        >
          Предыдущий
        </div>
        <div class="but_sad_s_2 blue_sad avd_div" v-on:click="next">
          Следующий
        </div>
      </div>
    </div>
    <div v-show="questionIndex === testing.questions.length" class="block-tests">
      <h2>Тест закончен</h2>
      <p>
        Правильных ответов: {{ countResponse() }} /
        {{ testing.questions.length }}
      </p>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      questionIndex: 0,
      testing: {
        title: "Тестирование",
        questions: [
          {
            text: "Go",
            responses: [{ text: "Вернуться" }, { text: "Идти", correct: true }],
          },
          {
            text: "Want",
            responses: [
              { text: "Надеяться" },
              { text: "Хотеть", correct: true },
            ],
          },
          {
            text: "Create",
            responses: [
              { text: "Сломать" },
              { text: "Создать", correct: true },
            ],
          },
        ],
      },
      userResponses: Array(this.testing).fill(true),
      count: 0,
    };
  },
  methods: {
    countResponse() {
      return this.userResponses.filter((item) => item).length;
    },
    next() {
      this.questionIndex++;
    },
    prev() {
      this.questionIndex--;
    },
  },
};
</script>
<style scoped>
.block{
  padding-top:50px ;
  text-align: center;
}
.block-tests {
    font-size: 20px;
}
.v-testing-cart{
  margin: 50px 0;
  padding: 25px 0;
  background: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
}
.avd_div {
  cursor: pointer;
  margin: 30px 35px;
  padding: 0;
  text-align: center;
  display: block;
}
.but_sad_s_2 {
  text-decoration: none;
  color: #fff;
  padding: 5px 10px;
  font-size: 10px;
  font-weight: bold;
  -webkit-border-radius: 10px;
  -moz-border-radius: 10px;
  -o-border-radius: 10px;
  border-radius: 10px;
  -webkit-box-shadow: 0 5px 5px #313131, 0 9px 0 #393939,
    0px 9px 10px rgba(0, 0, 0, 0.4), 0px 2px 9px rgba(255, 255, 255, 0.2) inset,
    0 -2px 9px rgba(0, 0, 0, 0.2) inset;
  -moz-box-shadow: 0 5px 5px #313131, 0 9px 0 #393939,
    0px 9px 10px rgba(0, 0, 0, 0.4), 0px 2px 9px rgba(255, 255, 255, 0.2) inset,
    0 -2px 9px rgba(0, 0, 0, 0.2) inset;
  -o-box-shadow: 0 5px 5px #313131, 0 9px 0 #393939,
    0px 9px 10px rgba(0, 0, 0, 0.4), 0px 2px 9px rgba(255, 255, 255, 0.2) inset,
    0 -2px 9px rgba(0, 0, 0, 0.2) inset;
  box-shadow: 0 5px 5px #313131, 0 9px 0 #393939,
    0px 9px 10px rgba(0, 0, 0, 0.4), 0px 2px 9px rgba(255, 255, 255, 0.2) inset,
    0 -2px 9px rgba(0, 0, 0, 0.2) inset;
  position: relative;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  text-shadow: 0 1px 1px #555;
  -webkit-border-radius: 35px 5px;
  -moz-border-radius: 35px 5px;
  -o-border-radius: 35px 5px;
  border-radius: 35px 5px;
}
.but_sad_s_2:hover {
  -webkit-box-shadow: 0 5px 5px #313131, 0 9px 0 #393939,
    0px 9px 10px rgba(0, 0, 0, 0.4), inset 0px 2px 15px rgba(255, 255, 255, 0.4),
    inset 0 -2px 9px rgba(0, 0, 0, 0.2);
  -moz-box-shadow: 0 5px 5px #313131, 0 9px 0 #393939,
    0px 9px 10px rgba(0, 0, 0, 0.4), inset 0px 2px 15px rgba(255, 255, 255, 0.4),
    inset 0 -2px 9px rgba(0, 0, 0, 0.2);
  -o-box-shadow: 0 5px 5px #313131, 0 9px 0 #393939,
    0px 9px 10px rgba(0, 0, 0, 0.4), inset 0px 2px 15px rgba(255, 255, 255, 0.4),
    inset 0 -2px 9px rgba(0, 0, 0, 0.2);
  box-shadow: 0 5px 5px #313131, 0 9px 0 #393939,
    0px 9px 10px rgba(0, 0, 0, 0.4), inset 0px 2px 15px rgba(255, 255, 255, 0.4),
    inset 0 -2px 9px rgba(0, 0, 0, 0.2);
}
.but_sad_s_2:active {
  top: 7px;
  box-shadow: 0 2px 0 #393939, 0px 4px 4px rgba(0, 0, 0, 0.4),
    0px 2px 5px rgba(0, 0, 0, 0.2) inset;
}
.blue_sad {
  background-color: #2ca0ca;
  background-image: linear-gradient(to top, #3eb8e5 0%, #2ca0ca 100%);
  background-image: -o-linear-gradient(to top, #3eb8e5 0%, #2ca0ca 100%);
  background-image: -moz-linear-gradient(to top, #3eb8e5 0%, #2ca0ca 100%);
  background-image: -webkit-linear-gradient(to top, #3eb8e5 0%, #2ca0ca 100%);
  background-image: -ms-linear-gradient(to top, #3eb8e5 0%, #2ca0ca 100%);
  -webkit-box-shadow: 0 5px 5px #267896, 0 9px 0 #156785,
    0 9px 10px rgba(0, 0, 0, 0.4), 0 2px 9px rgba(255, 255, 255, 0.2) inset,
    0 -2px 9px rgba(0, 0, 0, 0.2) inset;
  -moz-box-shadow: 0 5px 5px #267896, 0 9px 0 #156785,
    0 9px 10px rgba(0, 0, 0, 0.4), 0 2px 9px rgba(255, 255, 255, 0.2) inset,
    0 -2px 9px rgba(0, 0, 0, 0.2) inset;
  -o-box-shadow: 0 5px 5px #267896, 0 9px 0 #156785,
    0 9px 10px rgba(0, 0, 0, 0.4), 0 2px 9px rgba(255, 255, 255, 0.2) inset,
    0 -2px 9px rgba(0, 0, 0, 0.2) inset;
  box-shadow: 0 5px 5px #267896, 0 9px 0 #156785, 0 9px 10px rgba(0, 0, 0, 0.4),
    0 2px 9px rgba(255, 255, 255, 0.2) inset,
    0 -2px 9px rgba(0, 0, 0, 0.2) inset;
}
.blue_sad:hover {
  -webkit-box-shadow: 0 5px 5px #267896, 0 9px 0 #156785,
    0px 9px 10px rgba(0, 0, 0, 0.4), 0px 2px 15px rgba(255, 255, 255, 0.4) inset,
    0 -2px 9px rgba(0, 0, 0, 0.2) inset;
  -moz-box-shadow: 0 5px 5px #267896, 0 9px 0 #156785,
    0px 9px 10px rgba(0, 0, 0, 0.4), 0px 2px 15px rgba(255, 255, 255, 0.4) inset,
    0 -2px 9px rgba(0, 0, 0, 0.2) inset;
  -o-box-shadow: 0 5px 5px #267896, 0 9px 0 #156785,
    0px 9px 10px rgba(0, 0, 0, 0.4), 0px 2px 15px rgba(255, 255, 255, 0.4) inset,
    0 -2px 9px rgba(0, 0, 0, 0.2) inset;
  box-shadow: 0 5px 5px #267896, 0 9px 0 #156785,
    0px 9px 10px rgba(0, 0, 0, 0.4), 0px 2px 15px rgba(255, 255, 255, 0.4) inset,
    0 -2px 9px rgba(0, 0, 0, 0.2) inset;
}
.blue_sad:active {
  -webkit-box-shadow: 0 2px 2px #25325e, 0px 4px 4px rgba(0, 0, 0, 0.3),
    0px 2px 5px rgba(0, 0, 0, 0.2) inset;
  -moz-box-shadow: 0 2px 0 #25325e, 0px 4px 4px rgba(0, 0, 0, 0.3),
    0px 2px 5px rgba(0, 0, 0, 0.2) inset;
  -o-box-shadow: 0 2px 0 #25325e, 0px 4px 4px rgba(0, 0, 0, 0.3),
    0px 2px 5px rgba(0, 0, 0, 0.2) inset;
  box-shadow: 0 2px 0 #25325e, 0px 4px 4px rgba(0, 0, 0, 0.3),
    0px 2px 5px rgba(0, 0, 0, 0.2) inset;
}

.but_sad_xz {
  width: 100px;
  height: 100px;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #fff;
  padding: 12px 20px;
  font-size: 10px;
  font-weight: bold;
  -webkit-border-radius: 10px;
  -moz-border-radius: 10px;
  -o-border-radius: 10px;
  border-radius: 10px;
  -webkit-box-shadow: 0 5px 5px #313131, 0 9px 0 #393939,
    0px 9px 10px rgba(0, 0, 0, 0.4), 0px 2px 9px rgba(255, 255, 255, 0.2) inset,
    0 -2px 9px rgba(0, 0, 0, 0.2) inset;
  -moz-box-shadow: 0 5px 5px #313131, 0 9px 0 #393939,
    0px 9px 10px rgba(0, 0, 0, 0.4), 0px 2px 9px rgba(255, 255, 255, 0.2) inset,
    0 -2px 9px rgba(0, 0, 0, 0.2) inset;
  -o-box-shadow: 0 5px 5px #313131, 0 9px 0 #393939,
    0px 9px 10px rgba(0, 0, 0, 0.4), 0px 2px 9px rgba(255, 255, 255, 0.2) inset,
    0 -2px 9px rgba(0, 0, 0, 0.2) inset;
  box-shadow: 0 5px 5px #313131, 0 9px 0 #393939,
    0px 9px 10px rgba(0, 0, 0, 0.4), 0px 2px 9px rgba(255, 255, 255, 0.2) inset,
    0 -2px 9px rgba(0, 0, 0, 0.2) inset;
  position: relative;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  text-shadow: 0 1px 1px #555;
  -webkit-border-radius: 35px 35px 5px 5px;
  -moz-border-radius: 35px 35px 5px 5px;
  -o-border-radius: 35px 35px 5px 5px;
  border-radius: 50%;
}
.but_sad_xz:active {
  top: 7px;
  box-shadow: 0 2px 0 #393939, 0px 4px 4px rgba(0, 0, 0, 0.4),
    0px 2px 5px rgba(0, 0, 0, 0.2) inset;
}
.green_sad {
  background-color: #519000;
  background-image: linear-gradient(to top, #84c333 0%, #519000 100%);
  background-image: -o-linear-gradient(to top, #84c333 0%, #519000 100%);
  background-image: -moz-linear-gradient(to top, #84c333 0%, #519000 100%);
  background-image: -webkit-linear-gradient(to top, #84c333 0%, #519000 100%);
  background-image: -ms-linear-gradient(to top, #84c333 0%, #519000 100%);
  -webkit-box-shadow: 0 5px 5px #508530, 0 9px 0 #385e25,
    0 9px 10px rgba(0, 0, 0, 0.4), 0 2px 9px rgba(255, 255, 255, 0.2) inset,
    0 -2px 9px rgba(0, 0, 0, 0.2) inset;
  -moz-box-shadow: 0 5px 5px #508530, 0 9px 0 #385e25,
    0 9px 10px rgba(0, 0, 0, 0.4), 0 2px 9px rgba(255, 255, 255, 0.2) inset,
    0 -2px 9px rgba(0, 0, 0, 0.2) inset;
  -o-box-shadow: 0 5px 5px #508530, 0 9px 0 #385e25,
    0 9px 10px rgba(0, 0, 0, 0.4), 0 2px 9px rgba(255, 255, 255, 0.2) inset,
    0 -2px 9px rgba(0, 0, 0, 0.2) inset;
  box-shadow: 0 5px 5px #508530, 0 9px 0 #385e25, 0 9px 10px rgba(0, 0, 0, 0.4),
    0 2px 9px rgba(255, 255, 255, 0.2) inset,
    0 -2px 9px rgba(0, 0, 0, 0.2) inset;
}
.green_sad:hover {
  -webkit-box-shadow: 0 5px 5px #508530, 0 9px 0 #385e25,
    0px 9px 10px rgba(0, 0, 0, 0.4), 0px 2px 15px rgba(255, 255, 255, 0.4) inset,
    0 -2px 9px rgba(0, 0, 0, 0.2) inset;
  -moz-box-shadow: 0 5px 5px #508530, 0 9px 0 #385e25,
    0px 9px 10px rgba(0, 0, 0, 0.4), 0px 2px 15px rgba(255, 255, 255, 0.4) inset,
    0 -2px 9px rgba(0, 0, 0, 0.2) inset;
  -o-box-shadow: 0 5px 5px #508530, 0 9px 0 #385e25,
    0px 9px 10px rgba(0, 0, 0, 0.4), 0px 2px 15px rgba(255, 255, 255, 0.4) inset,
    0 -2px 9px rgba(0, 0, 0, 0.2) inset;
  box-shadow: 0 5px 5px #508530, 0 9px 0 #385e25,
    0px 9px 10px rgba(0, 0, 0, 0.4), 0px 2px 15px rgba(255, 255, 255, 0.4) inset,
    0 -2px 9px rgba(0, 0, 0, 0.2) inset;
}
.green_sad:active {
  -webkit-box-shadow: 0 2px 2px #385e25, 0px 4px 4px rgba(0, 0, 0, 0.4),
    0px 2px 5px rgba(0, 0, 0, 0.2) inset;
  -moz-box-shadow: 0 2px 0 #385e25, 0px 4px 4px rgba(0, 0, 0, 0.4),
    0px 2px 5px rgba(0, 0, 0, 0.2) inset;
  -o-box-shadow: 0 2px 0 #385e25, 0px 4px 4px rgba(0, 0, 0, 0.4),
    0px 2px 5px rgba(0, 0, 0, 0.2) inset;
  box-shadow: 0 2px 0 #385e25, 0px 4px 4px rgba(0, 0, 0, 0.4),
    0px 2px 5px rgba(0, 0, 0, 0.2) inset;
}
</style>