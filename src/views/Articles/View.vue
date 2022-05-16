<template>
  <div class="container">
    <div class="wrapper">
      <div v-if="loading" class="loading-main">
        <img src="../../assets/img/loader.svg" alt="Загрузка данных">
      </div>
      <div v-else class="rowContent">
        <ArticleBase
          v-bind:article="article"
        />
        <RecommendationBlock />
      </div>
    </div>
  </div>
</template>


<script>
import ArticleBase from "../../components/ArticleBase"
import RecommendationBlock from "../../components/RecommendationBlock"
import Articles from "../../db/articles"

export default {
  components: {
      ArticleBase,
      RecommendationBlock
  },

  data: () => ({
      loading: true,
      article:{}
  }),

  beforeMount() {
      const articleId = this.$route.params.id;
      this.article = Articles.find(article => article.id === articleId);
      this.loading = false;
  },
}
</script>

<style lang="scss">
.loading-main {
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;

    & img {
      height: 200px;
    }
}
</style>