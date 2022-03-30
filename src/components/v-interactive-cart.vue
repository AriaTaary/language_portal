<template>
  <div class="v-inertactive-cart">
    <div class="transformers-rule ">
      <div class="containers optimus" :class="{active: isActive}" >
        <div class="card">
          <div class="face front">
              <img src="../assets/logo.png" alt="logo" />
              <div class="word-span">
                <span>{{randomWord.word}}</span>
                <span>{{randomWord.transcription}}</span>
              </div>
          </div>
          <div class="face back">
            <img src="../assets/logo.png" alt="logo" />
            <div class="">
              <p v-for="item in randomWord.translates" :key="item">{{item}}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
     <div class="cart-btn">
      <button
      class="btn-item"
      type="button"
      v-on:click="cartRotate"
      >
      <span>Посмотреть перевод</span>
      </button>
       <button
      class="btn-item"
      type="button"
      @click="addMyDictionary"
      >
      <span>Добавить в словарь</span>
      </button>
    </div>
  </div>
</template>

<script>

export default {
  name: 'VInteractiveCart',

  data () {
    return {
      words: [
        {
          word: 'abaculus',
          transcription: '',
          translates: [
            'плитка',
            'кубик или шарик цветного стекла',
            'абак',
            'небольшие счеты'
          ]
        },
        {
          word: 'abacus',
          transcription: '[ˈæbəkəs]',
          translates: ['счеты', 'абак', 'абака', 'мозаичная панель', 'номограмма']
        },
        {
          word: 'Abaddon',
          transcription: '[əˈbædn]',
          translates: ['Аваддон', 'ад', 'преисподняя']
        },
        {
          word: 'abaft',
          transcription: '[əˈbæft]',
          translates: ['позади', 'сзади', 'на корме', 'с кормы', 'позади', 'сзади']
        },
        { word: 'abalone', transcription: '', translates: ['морское ушко'] },
        {
          word: 'abampere',
          transcription: '',
          translates: ['абампер', 'ампер', 'единица силы тока СГСМ']
        },
        {
          word: 'abandon',
          transcription: '[əˈbændən]',
          translates: [
            'отказываться от',
            'оставлять',
            'покидать',
            'развязность',
            'несдержанность'
          ]
        }
      ],
      isActive: false,
      myDictionary: []
    }
  },

  mounted () {
  },

  methods: {
    cartRotate () {
      this.isActive = !this.isActive;
    },
    addMyDictionary () {
      console.log(this.randomWord);
     
    }
  },
  computed: {
    randomWord () {
      return this.words[Math.floor(Math.random() * this.words.length)];
    }
  }
}
</script>

<style lang="scss" scoped>
.word-span{
  display: grid;
}
span, p{
  margin: 7px;
  font-size: 20px;

}
.v-inertactive-cart{
  margin: 50px 0;
  padding: 25px 0;
  background: #e8e8e8;
  text-align: center;
}
.transformers-rule {
  display: flex;
  justify-content: center;
}

.containers {
  width: 400px;
  height: 200px;
  -webkit-perspective: 1000; /*Добавляем глубину перспективы*/
}

.card {
  width: 400px;
  height: 200px;
  background: rgb(255, 255, 255);
  border-radius: 10px;
  border: 0;
  box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
  -webkit-transform-style: preserve-3d; /*Сохраняет трехмерное воспроизведение эффекта*/
  -webkit-transition: 0.5s; /*Карта перевернется за 1 секунды*/
}
.active .card {
  transform: rotateY(180deg);/*Переворачиваем карту на 180 градусов*/
}

.face {
  position: absolute;
  width: 400px;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  -webkit-backface-visibility: hidden; /*Обратная сторона карты будет скрыта после переворота*/
}
.optimus .back {
  width: 400px;
 height: 200px;
  -webkit-transform: rotateY(180deg);
}
.optimus img {
  width: 50px;
  height: 50px;
  float: right;
}
.front {
  z-index: 10;
}
.active .front {
  z-index: 0;
}
.cart-btn{
 margin: 25px;
 display: inline-flex
}
.btn-item {
  cursor: pointer;
  margin: 0 15px;
  font-size: 18px;
  background: white;
  width: max-content;
  min-width: 100px;
  height: 50px;
  background: rgb(255, 255, 255);
  border-radius: 10px;
  border: 0;
  box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22); padding: 0 10px;
}

.btn-item:hover {
  background: rgb(222, 224, 247);
}
</style>
