<template>
  <div>
    <div class="content">
      <div class="text-center">
      <v-progress-circular
        :rotate="-90"
        :size="80"
        :width="10"
        v-model="value"
        color="#ff0000"
      >
        {{ value }}
      </v-progress-circular>
      <v-btn @click="start(); disabled = !disabled">Start</v-btn>
      
    </div>
            <input 
            type="text" 
            class="input" 
            v-model="translation"
            :disabled="!disabled"
            placeholder="Введите перевод"/>
        
    </div>
    <v-simple-table class="table">
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left">Word</th>
            <th class="text-left">Translate</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in search" :key="item.word" />
          <tr v-for="item in array" :key="item.id" class="center">
            <td align="center">{{ item.word }}</td>
            <td v-show="item.active == true" class="correct" align="center">{{ item.translation }}</td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
    <div v-if="this.value==0 && this.count==1" class="result">Вы перевели  {{count}}  слово</div>
    <div v-if="this.value==0 && this.count>1 && this.count < 4" class="result">Вы перевели  {{count}}  слова</div>
    <div v-if="this.value==0 && this.count>3" class="result">Вы перевели  {{count}}  слов</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      interval: {},
      value: 100,
      translation: '',
      searchQuery: [],
      disabled:false,
      count:0,
      activeColor: "green",
      array: [
        {id:1, word:"ox",translation:"бык",active:  false},
        {id:2, word:"owl",translation:"сова",active:  false},
        {id:3, word:"fox",translation:"лиса",active:  false},
        {id:4, word:"hare",translation:"заяц",active:  false},
        {id:5, word:"rat",translation:"крыса",active:  false},
        {id:6, word:"toad",translation:"жаба",active:  false},
        {id:7, word:"pig",translation:"свинья",active:  false},
        {id:8, word:"mole",translation:"крот",active:  false},
        {id:9, word:"cow",translation:"корова",active:  false},
        {id:10,word:"deer",translation:"олень",active:  false}
      ],
    };
  },
  methods: {
    start() {      
      this.interval = setInterval(() => {
        let { value } = this;
        value--;
        this.value = value;
        if (this.value === 0) {
          this.count = this.array.filter(e=>e.active==true).length;          
          clearInterval(this.interval);
          // this.value = 100;
        }
      }, 1000);
    },
  },
  computed: {
    search() {
      let comp = this.translation;
      return (this.array.filter((elem) => {
       
        if (comp === "") return true;
        else
          return (
            elem.translation.indexOf(comp) > -1 &&
            elem.translation.length == this.translation.length &&
            this.array.includes((elem.active = true), elem.id)
            
            );
      })
      )     
    },
  },
};
</script>

<style scoped>
.content {
  display: flex;
}
.v-progress-circular {
  margin: 1rem;
}
.table {
  margin: 0 200px 50px 200px;
  border: 1px solid #a8b4d4;
  border-radius: 10px;
}
.input {
  font-size: 16px;
  display: flex;
  margin: 40px auto;
  border: 1px solid #a8b4d4;
  justify-content: center;
}

.correct{
  color: green;
}
.result {
  display: flex;
  align-items: center;
  justify-content: center;
  color:red;
  font-size: 20px;
  margin-bottom: 10px;
}
</style>
