<template>
  <div class="wrapper-dictionary">
    <div class="dictionary-block">
      <div class="search-block">
        <input
          type="text"
          class="search-block__item"
          v-model="searchRequest"
          @keyup.enter="sortArray"
          placeholder="Найти слово"
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
        <button @click="themesList = !themesList" class="choice-theme">Выберите тему</button>
        <button @click="clearTheme" class="choice-theme">Сбросить</button>
        <router-link class="router-btn" to="/mydictionary">
          <span class="choice-theme">Мой словарь</span>
        </router-link>
      </div>
      <div v-show="notFound" class="search-fail">К сожалению, слово не найдено</div>
      <transition name="fade">
        <div v-show="themesList" class="theme-content">
          <DictionaryTheme
            v-for="card in themesArray"
            :key="card.id"
            v-bind:card="card"
            class="themes-block"
          />
        </div>
      </transition>
      <div class="word-list">
        <h1 class="word-list__heading">Словарь</h1>

        <div class="word-list__item" v-for="item in searchResult" :key="item.id">
          <span class="sound">
            <svg
              @click="toSpeak(item.word)"
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              fill="currentColor"
              class="bi bi-volume-up-fill"
              viewBox="0 0 16 16"
            >
              <path
                d="M11.536 14.01A8.473 8.473 0 0 0 14.026 8a8.473 8.473 0 0 0-2.49-6.01l-.708.707A7.476 7.476 0 0 1 13.025 8c0 2.071-.84 3.946-2.197 5.303l.708.707z"
              />
              <path
                d="M10.121 12.596A6.48 6.48 0 0 0 12.025 8a6.48 6.48 0 0 0-1.904-4.596l-.707.707A5.483 5.483 0 0 1 11.025 8a5.483 5.483 0 0 1-1.61 3.89l.706.706z"
              />
              <path
                d="M8.707 11.182A4.486 4.486 0 0 0 10.025 8a4.486 4.486 0 0 0-1.318-3.182L8 5.525A3.489 3.489 0 0 1 9.025 8 3.49 3.49 0 0 1 8 10.475l.707.707zM6.717 3.55A.5.5 0 0 1 7 4v8a.5.5 0 0 1-.812.39L3.825 10.5H1.5A.5.5 0 0 1 1 10V6a.5.5 0 0 1 .5-.5h2.325l2.363-1.89a.5.5 0 0 1 .529-.06z"
              />
            </svg>
          </span>

          <div class="word-element">
            <div class="word-element__row">
              <span class="word">{{ item.word }}</span>
            </div>
            <div class="word-element__row">
              <span class="transcription">{{ item.transcription }}</span>
            </div>
            <div class="word-element__row">
              <span class="translate">{{ item.translation }}</span>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="21"
              height="21"
              fill="currentColor"
              class="bi bi-plus-square-fill"
              viewBox="0 0 16 16"
            >
              <path
                d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm6.5 4.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3a.5.5 0 0 1 1 0z"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DictionaryTheme from '../components/DictionaryTheme.vue';
export default {
  components: { DictionaryTheme },
  name: 'Dictionary',
  data() {
    return {
      themesList: false,
      currentTheme: '',
      searchRequest: null,
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
    sortArray() {
      this.searchResult = this.wordsArray.filter((item) => {
        if (
          item.word.toUpperCase().includes(this.searchRequest.toUpperCase()) ||
          item.translation
            .toUpperCase()
            .includes(this.searchRequest.toUpperCase())
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
.wrapper-dictionary {
  background: url('../assets/img/dictionary-bcg.jpg');
  background-size: cover;
}
.dictionary-block {
  display: flex;
  margin: auto;
  flex-direction: column;
  width: 990px;
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
}
.search-fail {
  display: block;
  color: black;
  margin-bottom: 40px;
  font-size: 16px;
}
.word-list__heading {
  font-size: 20px;
  color: #666e83;
  text-transform: uppercase;
  margin-bottom: 50px;
}
.word-list__item {
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #ced4e7;
  padding-bottom: 20px;
  margin-bottom: 20px;
  align-items: center;
}
.sound {
  margin-right: 60px;
}
.word-element {
  display: flex;
  justify-content: space-between;
  width: 100%;
}
.word-element__row {
  text-align: center;
  width: 200px;
}
.bi-volume-up-fill {
  color: #a8b4d4;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    color: #8089a1;
  }
}
.bi-search {
  color: #666e83;
  cursor: pointer;
  margin-left: 15px;
}
.choice-theme {
  background-color: #abb5d0;
  color: white;
  padding: 10px 20px;
  margin-left: 30px;
  border-radius: 5px;
  font-size: 16px;
  transition: 0.3s;
  &:hover {
    background-color: #8892ad;
  }
}
.theme-content {
  margin-bottom: 30px;
  display: flex;
  flex-wrap: wrap;
}
.themes-block {
  display: flex;
  margin-bottom: 20px;
  margin-right: 20px;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    scale: 1.1;
  }
}
.transcription {
  text-transform: lowercase;
}
.bi-plus-square-fill {
  color: #a8b4d4;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    color: #8089a1;
  }
}
.router-btn {
  text-transform: initial;
  text-decoration: none;
  margin-left: 15%;
}
</style>