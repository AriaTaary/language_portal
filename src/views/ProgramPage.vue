<template>
  <div class="container">
    <div class="wrapper">
      <router-link to="/programs" v-if="currentPage=='Finish'">
        <span class="purpleButton centerButton">Завершить</span>
      </router-link>
      <span 
        v-else
        @click="nextItem"
        class="purpleButton bigBottomMargin"
      >Далее →</span>
      <Grammar v-if="currentPage=='Grammar'" ref="childComponent" />
      <Vocabulary v-else-if="currentPage=='Vocabulary'" />
      <Audition v-else-if="currentPage=='Audition'" />
      <Testing v-else-if="currentPage=='Testing'" :showMenuHeader="false"/>
      <div v-else-if="currentPage=='Finish'" class="finish-block">
        <h2>Поздравляем! Вы успешно окончили программу!</h2>
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
  components: { 
    Grammar, 
    Vocabulary, 
    Audition, 
    Testing,
  },

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

.btn-trigger {
  width: 200px;
  margin-bottom: 20px;
}

.finish-block {
  margin-top: 30px;

  img {
    height: 300px;
    margin-top: -40px;
  }
}

.centerButton {
  margin: 0 auto 40px auto;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
  padding: 10px 0;
  height: 50px;
}
</style>