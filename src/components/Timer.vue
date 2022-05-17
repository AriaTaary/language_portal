<template>
  <div class="text-center">
    <v-progress-circular
      :rotate="-90"
      :size="100"
      :width="15"
      :value="value"
      color="teal"
    >
      {{ value }}
    </v-progress-circular>
    <button @click="start">Start</button>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        interval: {},
        value: 10,
      }
    },
    methods: {
      start(){ this.interval = setInterval(() => {
        let { value } = this
        value--;
        this.value = value;
        if(this.value === 0) {
          alert("Время вышло!")
          clearInterval(this.interval)
        }
      },1000)
      }
    },
  }
</script>

<style scoped>
.v-progress-circular {
  margin: 1rem;
}
</style>