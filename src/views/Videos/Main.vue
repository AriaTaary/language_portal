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
          v-for="theme in themesArray" 
          :key="theme.id" 
          @click="toActivateTheme(theme.id)"
          :class="{'emptyPurpleButton': theme.id !== currentTheme, 'purpleButton': theme.id === currentTheme}"
        >
          {{ theme.name }}
        </div>
      </div>
      <div class="itemsList">
        <router-link
          class="itemContainer"
          v-for="item in videoArray"
          :key="item.id"
          :to="{
            name: 'VideoView',
            params: { id: item.id, url: item.url }
          }"
        >
          <img
            :src="'https://i.ytimg.com/vi/'+item.videoid+'/hqdefault.jpg'"
            alt="img"
            class="itemImage"
          />
          <p class="itemTitle">{{ item.title }}</p>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
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
      themesArray: [],
      notFound: false,
      currentTheme: '',
    };
  },

  created() {
    this.loadVideo('video/');
    this.loadVideo('topicvideo/');
  },

  methods: {
    loadVideo(url){
      axios
        .get(`${this.$store.getters.getServerUrl}/${url}`)
        .then(response=>{
          switch(url){
            case 'video/':
              this.videoArray=response.data; 
              break
            case  'topicvideo/':
              this.themesArray=response.data;
              break
            default:
              this.videoArray = response.data;
          }
        })
        .catch(error => {
        this.errorMessage = error.message;
        console.error("There was an error!", error);
        });
    },

    searchVideo(searchText) {
      this.loadVideo('video/?title='+searchText);
    },

    toActivateTheme(id) {
      console.log(id);
      this.currentTheme = id;
      this.loadVideo(`video/?topic=`+id);
    },
    
    clearTheme() {
      this.loadVideo('video/');
      this.currentTheme = '';

      const inputElement = this.$refs.search;
      if (inputElement) {
          inputElement.clearInput();
      }
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
