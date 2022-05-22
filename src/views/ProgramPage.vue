<template>
  <div class="wrapper-program">
    <div class="program-item">
      <v-app class="btn-block">
        <router-link to="/programs" v-if="currentPage=='Finish'">
          <v-btn color="primary" elevation="2" large class="btn-trigger">Завершить</v-btn>
        </router-link>
        <v-btn
          v-else
          @click="nextItem"
          color="primary"
          elevation="2"
          large
          class="btn-trigger"
        >Далее →</v-btn>
      </v-app>
      <Grammar v-if="currentPage=='Grammar'" ref="childComponent" />
      <Vocabulary v-else-if="currentPage=='Vocabulary'" />
      <Audition v-else-if="currentPage=='Audition'" />
      <Testing v-else-if="currentPage=='Testing'" />
      <div v-else-if="currentPage=='Finish'" class="finish-block">
        <h2>Поздравляю! Вы успешно окончили программу!</h2>
        <img src="../assets/img/finish.gif" />
      </div>
    </div>
  </div>
</template>

<script>
import Audition from '../components/ProgramComponents/Audition.vue';
import Grammar from '../components/ProgramComponents/Grammar.vue';
import Vocabulary from '../components/ProgramComponents/Vocabulary.vue';
import Testing from './Testing.vue';
export default {
  components: { Grammar, Vocabulary, Audition, Testing },
  name: 'ProgramPage',
  data() {
    return {
      stringForBtn: 'Далее →',
      currentPage: 'Grammar',
    };
  },
  methods: {
    nextGrammar() {
      this.$refs.childComponent.nextArticle();
    },
    nextItem() {
      switch (this.currentPage) {
        case 'Grammar':
          if (this.$refs.childComponent.getCurrentArticle()) {
            this.currentPage = 'Vocabulary';
          } else {
            this.nextGrammar();
          }
          break;
        case 'Vocabulary':
          this.currentPage = 'Audition';
          break;
        case 'Audition':
          this.currentPage = 'Testing';
          break;
        case 'Testing':
          this.currentPage = 'Finish';
          break;
      }
    },
    scrollToTop() {
      window.scrollTo(0, 0);
    },
  },
  mounted() {
    if (this.$route.params.article != null)
      this.currentPage = this.$route.params.article;
    this.scrollToTop();
  },
};
</script>

<style lang="scss" scoped>
::v-deep .v-application--wrap {
  min-height: fit-content;
}
.wrapper-program {
  max-width: 1366px;
  width: 100%;
  margin: auto;
}
.btn-trigger {
  width: 200px;
  margin-bottom: 20px;
}
.program-item {
  margin-top: 50px;
}
.finish-block {
  margin-top: 30px;
  h2 {
    font-size: 28px;
  }
  img {
    margin-left: 20%;
  }
}
</style>