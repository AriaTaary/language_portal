<template>
  <div>
    <input 
    v-model="searchRequest"
    type="text" 
    placeholder="word">

    <div v-for="item in array" :key="item.id">
      <input type="text"
      
      >{{item.word}}</div>


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
    <button @click="start">Start</button>
  </div>

    </div>


  
</template>

<script>
  export default {
    data () {
      return {
        searchRequest:null,
        interval: {},
        value: 100,
        array: [
          {id:1, word:'мужчина',translate:'man'},
          {id:2, word:'женщина',translate:'woman'}

        ]
      }
    },
    methods: {
      start(){ 
        this.interval = setInterval(() => {
        let { value } = this
        value--;
        this.value = value;
        if(this.value === 0) {
          clearInterval(this.interval);
          this.value = 100;
        }
      },1000)
      }
    },
     computed: {
    filteredList() {
      return this.array.filter(searchRequest => {
        return searchRequest.word.toLowerCase().includes(this.search.toLowerCase())
      })
    }
    }
  }
</script>

<style scoped>
.v-progress-circular {
  margin: 1rem;
}
</style>