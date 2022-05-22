<template>
  <div>
    <div class="card-view-info">
      <div class="card-about-info">
        <p class="author mini-hover">{{ this.article[this.currentArticle].title }}</p>
      </div>
      <div class="card-categories">
        <p
          v-for="category in this.article[this.currentArticle].categories"
          :key="category.id"
          class="mini-hover"
        >{{ category.name }}</p>
      </div>
      <div class="card-main-info">
        <h2>{{ this.article[this.currentArticle].title }}</h2>
        <img
          class="article-photo"
          :src="this.article[this.currentArticle].image"
          alt="article-photo"
        />
        <p class="card-description">{{ this.article[this.currentArticle].text }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import Articles from '../../db/articles';
export default {
  data() {
    return {
      article: [],
      articleId: [2, 3],
      numberArticleId: 0,
      currentArticle: 0,
    };
  },
  beforeMount() {
    this.article = Articles;
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

<style lang="scss" scoped>
</style>