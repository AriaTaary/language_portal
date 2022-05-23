<template>
  <div class="speakingThemes">
    <h1>Разговорник</h1>
    <div class="themes">
      <div
        class="themeBlock purpleButton"
        v-for="item in randomThemes"
        :key="item.index"
        @click="toActivateTheme(item)"
      >{{item.translation}}</div>
    </div>
    <div class="wordsList" v-show="show">
      <h2>{{this.currentTheme.translation}}</h2>
      <div v-for="item in searchResult" :key="item.index" class="wordInfo">
        <span @click="toSpeak(item.word)" class="material-icons">volume_up</span>
        <span class="word">{{item.word}}</span>
        <span class="transcription">{{item.translation}}</span>
      </div>
    </div>
  </div>
</template>

<script>
import phrases from '../../db/phrases';
import themespharases from '../../db/themespharases';

export default {
  data() {
    return {
      randomThemes: [],
      phraseslist: phrases,
      themesArray: themespharases,
      show: true,
      currentTheme: [],
      searchResult: [],
    };
  },

  methods: {
    toSpeak(word) {
      speechSynthesis.speak(new SpeechSynthesisUtterance(word));
    },

    toActivateTheme(item) {
      this.currentTheme = item;
      this.sortByTheme();
    },

    sortByTheme() {
      this.searchResult = this.phraseslist.filter((item) => {
        if (item.theme === this.currentTheme.theme) {
          return true;
        }
      });
    },
    generateRandomThemes() {
      let randomIndexes = [];
      for (let i = 0; i < 3; i++) {
        let element = Math.floor(Math.random() * this.themesArray.length);
        if (randomIndexes.includes(element)) {
          i--;
        } else {
          randomIndexes.push(element);
        }
      }
      randomIndexes.forEach((index) => {
        this.randomThemes.push(this.themesArray[index]);
      });
    },
  },
  mounted() {
    this.generateRandomThemes();
  },
};
</script>

<style lang="scss" scoped>
.speakingThemes {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
}

.themes {
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.themeBlock {
  margin: 10px;
}

.wordsList {
  display: grid;
  justify-items: center;
  text-transform: none;
  font-size: 20px;
  padding-top: 50px;
  width: 100%;
}

.wordInfo {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 10px;
  border-bottom: 1px solid #ced4e7;
  text-align: center;
  width: 100%;

  & .word,
  & .transcription {
    width: 350px;
  }
}

.material-icons {
  cursor: pointer;
  margin: 0 40px;
  color: #abb5d0;
}

.material-icons:active {
  opacity: 0.5;
}
</style>
