<template>
  <div class="wrapper-program">
    <div class="program-item">
      <Grammar ref="childComponent" />
    </div>
    <v-app>
      <v-btn
        @click="nextGrammar"
        color="primary"
        elevation="2"
        large
        class="btn-trigger"
      >Далее&nbsp; →</v-btn>
    </v-app>
  </div>
</template>

<script>
import Grammar from '../components/Grammar.vue';
export default {
  components: { Grammar },
  name: 'ProgramPage',
  data() {
    return {};
  },
  methods: {
    nextGrammar() {
      this.$refs.childComponent.nextArticle();
    },
    scrollToTop() {
      window.scrollTo(0, 0);
    },
  },
  mounted() {
    this.scrollToTop();
  },
};
</script>

<style lang="scss" scoped>
.wrapper-program {
  max-width: 1366px;
  width: 100%;
  margin: auto;
}
.btn-trigger {
  width: 200px;
}
.program-item {
  margin-top: 50px;
}
</style>