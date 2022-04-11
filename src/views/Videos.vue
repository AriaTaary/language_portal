<template>
  <div class="video-wrapper">
    <div class="video-container">
      <div class="search-block">
        <input
          type="text"
          class="search-block__item"
          v-model="searchRequest"
          placeholder="Найти видео"
        />
        <svg
          @click="sortArray"
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="25"
          fill="currentColor"
          class="bi bi-search"
          viewBox="0 0 16 16"
        >
          <path
            d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"
          />
        </svg>
      </div>
      <div v-show="notFound" class="search-fail">К сожалению, видео не найдено</div>
      <h1 class="main-heading">Фильмы и видео</h1>
      <div class="video-themes-block">
        <div v-for="theme in getThemeArray" :key="theme.id" @click="toActivateTheme(theme)">
          <span v-if="theme !== currentTheme" class="video-themes">{{ theme }}</span>
          <span v-else class="video-themes active-item">{{ theme }}</span>
        </div>
        <span @click="clearTheme" class="video-themes">Сбросить</span>
      </div>
      <div class="content-block">
        <router-link
          class="video"
          v-for="item in searchResult"
          :key="item.id"
          :to="{
            name: 'VideoPage',
            params: { videoTitle: item.name, videoUrl: item.url },}"
        >
          <h1 class="video__name">{{ item.name }}</h1>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Videos',
  data() {
    return {
      videoArray: [],
      searchRequest: null,
      searchResult: [],
      notFound: false,
      currentTheme: '',
    };
  },
  created() {
    this.fetchFilms();
  },
  methods: {
    getJson(url) {
      return fetch(url).then((result) => result.json());
    },
    fetchFilms() {
      this.getJson(
        'https://raw.githubusercontent.com/Anna-Naily/json/main/dataFilms.json'
      ).then((data) => {
        this.videoArray = data.films;
        this.searchResult = this.videoArray;
      });
    },
    sortArray() {
      this.searchResult = this.videoArray.filter((item) => {
        if (
          item.name.toUpperCase().includes(this.searchRequest.toUpperCase())
        ) {
          return true;
        }
        return false;
      });
      if (this.searchResult.length == 0) {
        this.notFound = true;
        this.searchResult = this.videoArray;
      } else {
        this.notFound = false;
      }
    },
    sortByTheme() {
      this.searchResult = this.videoArray.filter((item) => {
        if (item.theme === this.currentTheme) {
          return true;
        }
      });
    },
    toActivateTheme(theme) {
      this.currentTheme = theme;
      this.sortByTheme();
    },
    clearTheme() {
      this.searchResult = this.videoArray;
      this.currentTheme = '';
    },
  },
  computed: {
    getThemeArray() {
      let themeArray = [];
      for (let i = 0; i < this.videoArray.length; i++) {
        if (!themeArray.includes(this.videoArray[i].theme)) {
          themeArray.push(this.videoArray[i].theme);
        }
      }
      return themeArray;
    },
  },
};
</script>
<style lang="scss">
.video-container {
  width: 990px;
  margin: auto;
}
.video-wrapper {
  background: url('../assets/img/videos-page-bcg.jpg');
  background-size: cover;
}
.search-block {
  display: flex;
  align-items: center;
}
.search-block__item {
  margin-top: 40px;
  margin-bottom: 40px;
  padding: 10px 15px;
  font-size: 16px;
  color: #596070;
  width: 238px;
  border: 2px solid #abb5d0;
  background-color: #fff;
}
.search-fail {
  display: block;
  color: black;
  margin-bottom: 40px;
  font-size: 16px;
}
.content-block {
  margin-top: 60px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.main-heading {
  margin-top: 30px;
  margin-bottom: 40px;
  font-size: 22px;
  color: #666e83;
}
.video {
  background-image: url('../assets/img/video_icon3.jpg');
  padding-top: 60px;
  width: 248px;
  height: 166px;
  border-radius: 5px;
  text-align: center;
  margin-bottom: 40px;
  transition: 0.3s;
  text-decoration: none;
  &:hover {
    filter: hue-rotate(180deg);
    scale: 1.2;
  }
}
.video__name {
  font-size: 14px;
  background-color: rgba(0, 0, 0, 0.753);
  color: rgb(255, 255, 255);
}
.video-themes-block {
  display: flex;
  justify-content: space-between;
  width: 600px;
  align-items: center;
}
.video-themes {
  border: 2px solid #abb5d0;
  padding: 10px 15px;
  border-radius: 5px;
  color: #6d7a9e;
  font-size: 15px;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    background-color: #dae6f3;
  }
}
.active-item {
  border-color: #eea6ea;
  color: #fff;
}
</style>>
