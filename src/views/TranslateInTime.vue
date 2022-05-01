<template>
  <div>
            <input class="input" v-model="translation" type="text" placeholder="Введите перевод"/>

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
    <div class="text-center">
      <v-progress-circular
        :rotate="-90"
        :size="100"
        :width="10"
        v-model="value"
        color="#ff0000"
      >
        {{ value }}
      </v-progress-circular>
      <v-btn @click="start">Start</v-btn>
      
    </div>

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
      activeColor: "green",
      array: [
        {id:1, word:"ox",translation:"бык",actve:  false},
        {id:2, word:"owl",translation:"сова",actve:  false},
        {id:3, word:"fox",translation:"лиса",actve:  false},
        {id:4, word:"hare",translation:"заяц",actve:  false},
        {id:5, word:"rat",translation:"крыса",actve:  false},
        {id:6, word:"toad",translation:"жаба",actve:  false},
        {id:7, word:"pig",translation:"свинья",actve:  false},
        {id:8, word:"mole",translation:"крот",actve:  false},
        {id:9, word:"cow",translation:"корова",actve:  false},
        {id:10,word:"deer",translation:"олень",actve:  false}
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
          clearInterval(this.interval);
          this.value = 100;
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
.v-progress-circular {
  margin: 1rem;
}
.table {
  margin: 0 200px;
  border: 1px solid #a8b4d4;
}
.input {
  font-size: 16px;
  display: flex;
  margin: 10px auto;
  border: 1px solid #a8b4d4;
  justify-content: center;
}

.correct{
  color: green;
}
</style>
