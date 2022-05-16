<template>
  <div class="container">
    <div class="wrapper">
      <h1>Словарь</h1>
      <div class="search-block">
        <Search 
          ref="search"
          @clickEvent="searchWord"
          @enterEvent="searchWord"
        />
        <button 
          @click="clearTheme" 
          class="purpleButton buttonMarginLeft"
        >Сбросить</button>
        <button 
          @click="themesList = !themesList" 
          class="purpleButton buttonMarginLeft"
        >Выберите тему</button>
        <router-link class="buttonAutoMarginLeft" to="/dictionary/my">
          <span class="purpleButton">Мой словарь</span>
        </router-link>
      </div>
      <div 
        v-if="notFound" 
        class="search-fail"
      >
        К сожалению, слово не найдено
      </div>
      <div v-show="themesList" class="itemsList">
        <DictionaryTheme
          v-for="card in themesArray"
          :key="card.id"
          v-bind:card="card"
        />
      </div>
      <div class="wordList">
        <div class="wordItem" v-for="item in searchResult" :key="item.id">
          <svg
            @click="toSpeak(item.word)"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            class="dictionaryIcon"
            viewBox="0 0 16 16"
          >
            <path d="M11.536 14.01A8.473 8.473 0 0 0 14.026 8a8.473 8.473 0 0 0-2.49-6.01l-.708.707A7.476 7.476 0 0 1 13.025 8c0 2.071-.84 3.946-2.197 5.303l.708.707z" />
            <path d="M10.121 12.596A6.48 6.48 0 0 0 12.025 8a6.48 6.48 0 0 0-1.904-4.596l-.707.707A5.483 5.483 0 0 1 11.025 8a5.483 5.483 0 0 1-1.61 3.89l.706.706z" />
            <path d="M8.707 11.182A4.486 4.486 0 0 0 10.025 8a4.486 4.486 0 0 0-1.318-3.182L8 5.525A3.489 3.489 0 0 1 9.025 8 3.49 3.49 0 0 1 8 10.475l.707.707zM6.717 3.55A.5.5 0 0 1 7 4v8a.5.5 0 0 1-.812.39L3.825 10.5H1.5A.5.5 0 0 1 1 10V6a.5.5 0 0 1 .5-.5h2.325l2.363-1.89a.5.5 0 0 1 .529-.06z" />
          </svg>
          <div class="wordInfo">
            <div class="word">{{ item.word }}</div>
            <div class="word">{{ item.transcription }}</div>
            <div class="word">{{ item.translation }}</div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              class="dictionaryIcon"
              viewBox="0 0 16 16"
            >
              <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm6.5 4.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3a.5.5 0 0 1 1 0z" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import DictionaryTheme from '../../components/DictionaryTheme.vue';
import Search from '../../components/Search.vue';

export default {
  name: 'Dictionary',

  components: { 
    DictionaryTheme,
    Search,
  },

  data() {
    return {
      themesList: false,
      currentTheme: '',
      searchValue: '',
      searchResult: [],
      wordsArray: [],
      themesArray: [],
      notFound: false,
    };
  },

  created() {
    this.fetchWords();
    this.fetchThemes();
  },

  methods: {
    getJson(url) {
      return fetch(url).then((result) => result.json());
    },

    fetchWords() {
      this.getJson(
        'https://raw.githubusercontent.com/Anna-Naily/json/main/dictionaryDB.json'
      ).then((data) => {
        this.wordsArray = data.words;
        this.searchResult = this.wordsArray;
      });
    },

    fetchThemes() {
      this.getJson(
        'https://raw.githubusercontent.com/Anna-Naily/json/main/themes.json'
      ).then((data) => {
        this.themesArray = data.themes;
      });
    },

    searchWord(searchText) {            
      this.searchResult = this.wordsArray.filter((item) => {
        if (
          item.word.toUpperCase().includes(searchText.toUpperCase()) ||
          item.translation
            .toUpperCase()
            .includes(searchText.toUpperCase())
        ) {
          return true;
        }
        return false;
      });
      if (this.searchResult.length == 0) {
        this.notFound = true;
        this.searchResult = this.wordsArray;
      } else {
        this.notFound = false;
      }
      this.delDouble();
    },

    toSpeak(word) {
      speechSynthesis.speak(new SpeechSynthesisUtterance(word));
    },

    toActivateTheme(theme) {
      this.currentTheme = theme;
      this.sortByTheme();
    },

    sortByTheme() {
      this.searchResult = this.wordsArray.filter((item) => {
        if (item.theme.trim() === this.currentTheme) {
          return true;
        }
      });
    },

    clearTheme() {
      this.searchResult = this.wordsArray;
      this.currentTheme = '';
      
      const inputElement = this.$refs.search;
      if (inputElement) {
        inputElement.clearInput();
      }
    },

    findDouble(array, word) {
      for (let i = 0; i < array.length; i++) {
        if (array[i].word === word) return false;
      }
      return true;
    },

    delDouble() {
      let singleArray = [];
      let singleResult = [];

      this.searchResult.forEach((item) => {
        singleArray.push(item.word);
      });

      let singleList = new Set(singleArray);
      singleArray = [];
      singleList.forEach((word) => {
        singleArray.push(word);
      });

      this.searchResult.forEach((item) => {
        singleArray.forEach((word) => {
          if (item.word === word && this.findDouble(singleResult, word)) {
            singleResult.push(item);
          }
        });
      });
      this.searchResult = singleResult;
    },
  },
};
</script>

<style lang="scss" >
.search-block {
  display: flex;
  align-items: center;
  margin-bottom: 40px;
}

.wordList {
  margin-top: 40px;
}

.wordItem {
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #ced4e7;
  padding-bottom: 20px;
  margin-bottom: 20px;
  align-items: center;
}

.wordInfo {
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
}

.word {
  text-align: center;
  width: 200px;
}

.dictionaryIcon {
  color: #a8b4d4;
  cursor: pointer;
  transition: 0.3s;
  width: 21px;
  height: 21px;

  &:hover {
    color: #8089a1;
  }
}
</style>