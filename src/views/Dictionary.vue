<template>
  <div class="dictionary-block">
    <div class="search-block">
      <input
        type="text"
        class="search-block__item"
        v-model="searchRequest"
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
      <button @click="themesList=!themesList" class="choice-theme">Выберите тему</button>
      <button @click="clearTheme" class="choice-theme">Сбросить</button>
    </div>
    <div v-show="notFound" class="search-fail">К сожалению, слово не найдено</div>
    <div v-show="themesList" class="theme-content">
      <span
        v-for="card in themesArray"
        :key="card.id"
        class="themes-block"
        @click="toActivateTheme(card.name)"
      >
        <span v-if="card.name!==currentTheme">
          <h2 class="themes-block__heading">{{card.translateName}}</h2>
        </span>
        <span v-else>
          <h2 class="themes-block__heading active-item">{{card.translateName}}</h2>
        </span>
      </span>
    </div>
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
            <span class="theme">{{ item.theme }}</span>
          </div>
          <div class="word-element__row">
            <span class="translate">{{ item.translation }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Dictionary",
  data() {
    return {
      themesList: false,
      currentTheme: "",
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
        "https://raw.githubusercontent.com/Anna-Naily/json/main/dictionary.json"
      ).then((data) => {
        this.wordsArray = data.words;
        this.searchResult = this.wordsArray;
      });
    },
    fetchThemes() {
      this.getJson(
        "https://raw.githubusercontent.com/Anna-Naily/json/main/themes.json"
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
        if (item.theme === this.currentTheme) {
          return true;
        }
      });
    },
    clearTheme() {
      this.searchResult = this.wordsArray;
      this.currentTheme = "";
    },
  },
};
</script>

<style lang="scss" >
.dictionary-block {
  display: flex;
  margin: auto;
  flex-direction: column;
  width: 975px;
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
  color: #71798f;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    color: #383c47;
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
}
.themes-block {
  display: flex;
  margin-bottom: 20px;
  margin-right: 20px;
}
.themes-block__heading {
  background-color: #8892ad;
  color: white;
  font-size: 16px;
  font-weight: 500;
  padding: 10px 20px;
  border-radius: 5px;
  transition: 0.3s;
  cursor: pointer;
  &:hover {
    background-color: #b7c3e4;
  }
}
.theme-content {
  display: flex;
  flex-wrap: wrap;
}
.active-item {
  background-color: rgb(209, 137, 191) !important;
}
.transcription {
  text-transform: lowercase;
}
</style>