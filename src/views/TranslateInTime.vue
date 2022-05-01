<template>
  <div>
    <input class="input" v-model="translate" type="text" />

    <div v-for="item in sortArray" :key="item.id">
      {{ item.translate }}
    </div>

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
      translate: "",
      isActive: false,
      activeColor: "green",
      array: [
        { id: 1, word: "мужчина", translate: "man", active: false },
        { id: 2, word: "женщина", translate: "woman", active: false },
        { id: 3, word: "дом", translate: "home", active: false },
        { id: 4, word: "окно", translate: "window", active: false },

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
    sortArray() {
      let comp = this.translate;
      return  this.array.filter((elem) => {
        if (comp === '') return true;
        else
          return (
            elem.translate.indexOf(comp) > -1 &&
            elem.translate.length == this.translate.length &&
            this.array.splice((elem.active = true), elem.id)
          );
      });
    },
  },
};
</script>

<style scoped>
.v-progress-circular {
  margin: 1rem;
}
.input {
  border: 1px solid;
}
</style>
