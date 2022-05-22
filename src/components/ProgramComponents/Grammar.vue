<template>
  <ArticleBase
    v-bind:article="articles[currentArticle]"
  />
</template>

<script>
import Articles from '../../db/articles';
import ArticleBase from "../../components/ArticleBase";

export default {
  name: 'Grammar',

  components: {
    ArticleBase,
  },

  data() {
    return {
      articles: Articles,
      articleId: [2, 3],
      numberArticleId: 0,
      currentArticle: 0,
    };
  },

  methods: {
    nextArticle() {
      this.numberArticleId++;
      this.currentArticle = this.articleId[this.numberArticleId];
    },

    getCurrentArticle() {
      if (this.numberArticleId == this.articleId.length - 1) {
        return true;
      }
      return false;
    },
  },
};
</script>