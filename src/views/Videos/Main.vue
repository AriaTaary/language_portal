<template>
  <div class="container">
    <div class="wrapper">
      <MiniHeader />
      <h1>Фильмы и видео</h1>
      <div class="search-block">
          <Search 
              ref="search"
              @clickEvent="searchVideo"
              @enterEvent="searchVideo"
          />
          <button 
              @click="clearTheme" 
              class="purpleButton buttonMarginLeft"
          >Сбросить</button>
      </div>
      <div 
        v-if="notFound" 
        class="search-fail"
      >
        К сожалению, видео не найдено
      </div> 
      <div class="videoThemesList">
        <div 
          v-for="theme in getThemeArray" 
          :key="theme.id" 
          @click="toActivateTheme(theme)"
          :class="{'emptyPurpleButton': theme !== currentTheme, 'purpleButton': theme === currentTheme}"
        >
          {{ theme }}
        </div>
      </div>
      <div class="itemsList">
        <router-link
          class="itemContainer"
          v-for="item in searchResult"
          :key="item.id"
          :to="{
            name: 'VideoView',
            params: { videoTitle: item.name, videoUrl: item.url }
          }"
        >
          <img
            :src="'https://i.ytimg.com/vi/'+item.url+'/hqdefault.jpg'"
            alt="img"
            class="itemImage"
          />
          <p class="itemTitle">{{ item.name }}</p>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import MiniHeader from '../../components/MiniHeader.vue';
import Search from '../../components/Search.vue';

export default {
  name: 'Videos',

  components: { 
    MiniHeader,
    Search,
  },

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

    searchVideo() {
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

      const inputElement = this.$refs.search;
      if (inputElement) {
          inputElement.clearInput();
      }
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
.main-heading {
  margin-top: 30px;
  margin-bottom: 40px;
  font-size: 22px;
  color: #666e83;
}

.videoThemesList {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;
}
</style>
