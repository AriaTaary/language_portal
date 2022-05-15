<template>
  <div class="container">
    <div class="wrapper">
      <MiniHeader />
      <h1>Слова</h1>
      <div class="inertactiveCard">
        <div class="cardContainer" :class="{active: isActive}" >
          <span id="previousWord" class="material-icons purple hide" @click="previousWord">arrow_back_ios_new</span>
          <div class="card">
            <div class="cardInfo front">
              <p class="cardWord">{{randomWord.word}}</p>
              <p>{{randomWord.transcription}}</p>
            </div>
            <div class="cardInfo back">
              <p>{{randomWord.translation}}</p>
            </div>
          </div>
          <span id="nextWord" class="material-icons purple" @click="nextWord">arrow_forward_ios</span>
        </div>
        <div class="addword" v-show="show">
          Вы уже добавили это слово в ваш словарь
        </div>
        <div class="buttonsContainer">
          <span 
            v-if="isActive"
            class="purpleButton" 
            @click="cartRotate"
          >Посмотреть слово</span>
          <span 
            v-else
            class="purpleButton" 
            @click="cartRotate"
          >Посмотреть перевод</span>
          <span 
            class="purpleButton" 
            @click="addMyDictionary"
          >Добавить в словарь</span>
        </div>
      </div>
      <router-link class="router-btn" to="/dictionary/my">
        <span class="emptyPurpleButton">Перейти в мой словарь</span>
      </router-link>
    </div>
  </div>
</template>

<script>
import MiniHeader from '../components/MiniHeader.vue'
import dictionary from '../db/dictionary'

export default {
  name: 'Words',

  components: { 
    MiniHeader
  },

  data () {
    return {
      words: dictionary,
      isActive: false,
      randomWord:null,
      newDictionary:[],
      myDictionary:[],
      show: false
    }
  },

  beforeMount() {
    this.randomWord= this.words[Math.floor(Math.random() * this.words.length)];
    this.newDictionary.push(this.randomWord);
  },

  methods: {
    cartRotate () {
      this.isActive = !this.isActive;
    },

    addMyDictionary () {
      if (this.myDictionary.filter(item => item.word == this.randomWord.word).length > 0) {
        this.show=true;
      } else {
        this.myDictionary.push(this.randomWord);
      }
    },

    nextWord () { 
      this.show=false;
      let filterWords=this.words.filter((i)=> !this.newDictionary.includes(i))
      this.randomWord=filterWords[Math.floor(Math.random() * filterWords.length)];
      this.newDictionary.push(this.randomWord);

      if (this.newDictionary.length === this.words.length){
        document.getElementById("nextWord").classList.add('hide')
      }

      document.getElementById("previousWord").classList.remove('hide')
    },

    previousWord(){
      this.show=false;
      this.randomWord=this.newDictionary[this.newDictionary.length-2];

      if (this.newDictionary.length === 2){
        document.getElementById("previousWord").classList.add('hide')
      }

      this.newDictionary.pop();
      document.getElementById("nextWord").classList.remove('hide')
    }
  },
}
</script>

<style lang="scss" scoped>
.hide {
  visibility: hidden;
}

.addword {
  margin-top: 25px;
}

.menu-cart-wrap {
  display: flex;
  text-transform: uppercase;
  justify-content: space-around;
}

.word-span {
    display: flex;
    flex-direction: column;
    min-width: 200px;
    max-width: 300px;
}

.purple {
  background: #abb5d0;
  color: white;
  border-radius: 50%;
  padding: 10px;

  &:hover {
    cursor: pointer;
    background-color: #8892ad;
  }
}

h1 {
  font-size: 30px;
}

p {
  margin: 7px;
  font-size: 24px;
}

.inertactiveCard {
  margin: 0 auto 40px auto;
  background: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 700px;
}

.cardContainer {
  -webkit-perspective: 1000; /*Добавляем глубину перспективы*/
  display: flex;
  align-items: center;
  justify-content: center
}

.material-icons {
  cursor: pointer;
  margin: 0 20px;
  font-size: 30px;
}

.card {
  display: flex;
  width: 500px;
  height: 250px;
  background: rgb(255, 255, 255);
  border-radius: 20px;
  text-transform: lowercase;
  padding: 20px;
  border: 0;
  box-shadow: 0 10px 40px rgba(136, 146, 173, 0.5);
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
  -webkit-transform-style: preserve-3d; /*Сохраняет трехмерное воспроизведение эффекта*/
  -webkit-transition: 0.5s; /*Карта перевернется за 1 секунды*/
}

.active 
.card {
  transform: rotateY(180deg); /*Переворачиваем карту на 180 градусов*/
}

.cardInfo {
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 30px;
  justify-content: space-between;
  -webkit-backface-visibility: hidden; /*Обратная сторона карты будет скрыта после переворота*/
}

.cardWord {
  text-transform: uppercase;
  margin-bottom: 40px;
}

.back {
  -webkit-transform: rotateY(180deg);
}

.front {
  z-index: 10;
}

.active
.front {
  z-index: 0;
}

.buttonsContainer {
  margin-top: 70px;
  display: flex;
  width: 100%;
  justify-content: space-between;
}
</style>
