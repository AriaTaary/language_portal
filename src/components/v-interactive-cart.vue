<template>
<div class="wrapper">
  <h1>Слова</h1>
  <div class="v-inertactive-cart">
    <div class="transformers-rule ">
      <div class="containers optimus" :class="{active: isActive}" >
        <span class="material-icons" @click="previousWord">arrow_back_ios_new</span>
        <div class="card">
            <div class="face front">
                <img src="../assets/img/ineteractive1.png" alt="logo" />
                <div class="word-span">
                  <span>{{randomWord.word}}</span>
                  <span>{{randomWord.transcription}}</span>
                </div>
            </div>
            <div class="face back">
              <img src="../assets/img/ineteractive1.png" alt="logo" />
              <div class="">
                <p v-for="item in randomWord.translates" :key="item">{{item}}</p>
              </div>
            </div>
        </div>
          <span class="material-icons" @click="nextWord">arrow_forward_ios</span>
      </div>
      <div class="cart-btn">
        <div 
          class="but_sad_s_2 blue_sad avd_div" 
          v-on:click="cartRotate"
          >
            Посмотреть перевод
        </div>
        <div 
          class="but_sad_s_2 blue_sad avd_div" 
          @click="addMyDictionary"
          >
            Добавить в словарь
        </div>
      </div>
    </div>
    <router-link to="/mydictionary" class="but_sad_xz green_sad avd_div">
          Мой словарь
    </router-link>
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
      myDictionary: [],
    }
  },
  methods: {
    cartRotate () {
      this.isActive = !this.isActive;
    },
    addMyDictionary () {
     
    },
    nextWord () {    
    },
    previousWord(){

    }
  },
  computed: {
    randomWord () {
      return this.words[Math.floor(Math.random() * this.words.length)];
    },
  }
}
</script>

<style lang="scss" scoped>
.wrapper{
  padding-top:50px ;
  text-align: center;
}
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
  background: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
}
.transformers-rule {
  padding-top: 50px;
}

.containers {
  width: 800px;
  height: 200px;
 text-align: center;
  -webkit-perspective: 1000; /*Добавляем глубину перспективы*/
  display: flex;
  align-items: center;
  justify-content: center
}
.material-icons{
  cursor: pointer;
  margin: 0 20px;
  font-size: 30px;
}
.card {
  display: flex;
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
  width: 120px;
  height: 180px;
  float: right;
}
.front {
  z-index: 10;
}
.active .front {
  z-index: 0;
}
.cart-btn{
 margin-top: 70px;
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
.my-dictionary{
  border: 1px solid black;
  box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22); 
}
a {
  text-decoration: none;
}
.avd_div{
  cursor: pointer;
  margin:30px 35px;padding:0;text-align:center;display:block;}
 .but_sad_s_2{text-decoration:none;color:#fff;padding:12px 20px;font-size:18px;font-weight:bold;-webkit-border-radius:10px;-moz-border-radius:10px;-o-border-radius:10px;border-radius:10px;-webkit-box-shadow:0 5px 5px #313131, 0 9px 0 #393939, 0px 9px 10px rgba(0,0,0,0.4), 0px 2px 9px rgba(255,255,255,0.2) inset, 0 -2px 9px rgba(0,0,0,0.2) inset;-moz-box-shadow:0 5px 5px #313131, 0 9px 0 #393939, 0px 9px 10px rgba(0,0,0,0.4), 0px 2px 9px rgba(255,255,255,0.2) inset, 0 -2px 9px rgba(0,0,0,0.2) inset;-o-box-shadow:0 5px 5px #313131, 0 9px 0 #393939, 0px 9px 10px rgba(0,0,0,0.4), 0px 2px 9px rgba(255,255,255,0.2) inset, 0 -2px 9px rgba(0,0,0,0.2) inset;box-shadow:0 5px 5px #313131, 0 9px 0 #393939, 0px 9px 10px rgba(0,0,0,0.4), 0px 2px 9px rgba(255,255,255,0.2) inset, 0 -2px 9px rgba(0,0,0,0.2) inset;position:relative;border-bottom:1px solid rgba(255,255,255,0.2);text-shadow:0 1px 1px #555;-webkit-border-radius:35px 5px;-moz-border-radius:35px 5px;-o-border-radius:35px 5px;border-radius:35px 5px;}
 .but_sad_s_2:hover{-webkit-box-shadow:0 5px 5px #313131, 0 9px 0 #393939, 0px 9px 10px rgba(0,0,0,0.4), inset 0px 2px 15px rgba(255,255,255,0.4), inset 0 -2px 9px rgba(0,0,0,0.2);-moz-box-shadow:0 5px 5px #313131, 0 9px 0 #393939, 0px 9px 10px rgba(0,0,0,0.4), inset 0px 2px 15px rgba(255,255,255,0.4), inset 0 -2px 9px rgba(0,0,0,0.2);-o-box-shadow:0 5px 5px #313131, 0 9px 0 #393939, 0px 9px 10px rgba(0,0,0,0.4), inset 0px 2px 15px rgba(255,255,255,0.4), inset 0 -2px 9px rgba(0,0,0,0.2);box-shadow:0 5px 5px #313131, 0 9px 0 #393939, 0px 9px 10px rgba(0,0,0,0.4), inset 0px 2px 15px rgba(255,255,255,0.4), inset 0 -2px 9px rgba(0,0,0,0.2);}
 .but_sad_s_2:active{top:7px;box-shadow: 0 2px 0 #393939, 0px 4px 4px rgba(0,0,0,0.4), 0px 2px 5px rgba(0,0,0,0.2) inset;}
 .blue_sad{background-color:#2ca0ca;background-image:linear-gradient(to top, #3eb8e5 0%, #2ca0ca 100%);background-image:-o-linear-gradient(to top, #3eb8e5 0%, #2ca0ca 100%);background-image:-moz-linear-gradient(to top, #3eb8e5 0%, #2ca0ca 100%);background-image:-webkit-linear-gradient(to top, #3eb8e5 0%, #2ca0ca 100%);background-image:-ms-linear-gradient(to top, #3eb8e5 0%, #2ca0ca 100%);-webkit-box-shadow:0 5px 5px #267896, 0 9px 0 #156785, 0 9px 10px rgba(0, 0, 0, 0.4), 0 2px 9px rgba(255, 255, 255, 0.2) inset, 0 -2px 9px rgba(0, 0, 0, 0.2) inset;-moz-box-shadow:0 5px 5px #267896, 0 9px 0 #156785, 0 9px 10px rgba(0, 0, 0, 0.4), 0 2px 9px rgba(255, 255, 255, 0.2) inset, 0 -2px 9px rgba(0, 0, 0, 0.2) inset;-o-box-shadow:0 5px 5px #267896, 0 9px 0 #156785, 0 9px 10px rgba(0, 0, 0, 0.4), 0 2px 9px rgba(255, 255, 255, 0.2) inset, 0 -2px 9px rgba(0, 0, 0, 0.2) inset;box-shadow:0 5px 5px #267896, 0 9px 0 #156785, 0 9px 10px rgba(0, 0, 0, 0.4), 0 2px 9px rgba(255, 255, 255, 0.2) inset, 0 -2px 9px rgba(0, 0, 0, 0.2) inset;}
 .blue_sad:hover{-webkit-box-shadow:0 5px 5px #267896, 0 9px 0 #156785, 0px 9px 10px rgba(0,0,0,0.4), 0px 2px 15px rgba(255,255,255,0.4) inset, 0 -2px 9px rgba(0,0,0,0.2) inset;-moz-box-shadow:0 5px 5px #267896, 0 9px 0 #156785, 0px 9px 10px rgba(0,0,0,0.4), 0px 2px 15px rgba(255,255,255,0.4) inset, 0 -2px 9px rgba(0,0,0,0.2) inset;-o-box-shadow:0 5px 5px #267896, 0 9px 0 #156785, 0px 9px 10px rgba(0,0,0,0.4), 0px 2px 15px rgba(255,255,255,0.4) inset, 0 -2px 9px rgba(0,0,0,0.2) inset;box-shadow:0 5px 5px #267896, 0 9px 0 #156785, 0px 9px 10px rgba(0,0,0,0.4), 0px 2px 15px rgba(255,255,255,0.4) inset, 0 -2px 9px rgba(0,0,0,0.2) inset;}
 .blue_sad:active{-webkit-box-shadow:0 2px 2px #25325e, 0px 4px 4px rgba(0,0,0,0.3), 0px 2px 5px rgba(0,0,0,0.2) inset;-moz-box-shadow:0 2px 0 #25325e, 0px 4px 4px rgba(0,0,0,0.3), 0px 2px 5px rgba(0,0,0,0.2) inset;-o-box-shadow:0 2px 0 #25325e, 0px 4px 4px rgba(0,0,0,0.3), 0px 2px 5px rgba(0,0,0,0.2) inset;box-shadow:0 2px 0 #25325e, 0px 4px 4px rgba(0,0,0,0.3), 0px 2px 5px rgba(0,0,0,0.2) inset;}

 .but_sad_xz{
  width: 100px;
  height: 100px;
  display: flex;
  align-items: center;
  text-decoration:none;color:#fff;padding:12px 20px;font-size:18px;font-weight:bold;-webkit-border-radius:10px;-moz-border-radius:10px;-o-border-radius:10px;border-radius:10px;-webkit-box-shadow:0 5px 5px #313131, 0 9px 0 #393939, 0px 9px 10px rgba(0,0,0,0.4), 0px 2px 9px rgba(255,255,255,0.2) inset, 0 -2px 9px rgba(0,0,0,0.2) inset;-moz-box-shadow:0 5px 5px #313131, 0 9px 0 #393939, 0px 9px 10px rgba(0,0,0,0.4), 0px 2px 9px rgba(255,255,255,0.2) inset, 0 -2px 9px rgba(0,0,0,0.2) inset;-o-box-shadow:0 5px 5px #313131, 0 9px 0 #393939, 0px 9px 10px rgba(0,0,0,0.4), 0px 2px 9px rgba(255,255,255,0.2) inset, 0 -2px 9px rgba(0,0,0,0.2) inset;box-shadow:0 5px 5px #313131, 0 9px 0 #393939, 0px 9px 10px rgba(0,0,0,0.4), 0px 2px 9px rgba(255,255,255,0.2) inset, 0 -2px 9px rgba(0,0,0,0.2) inset;position:relative;border-bottom:1px solid rgba(255,255,255,0.2);text-shadow:0 1px 1px #555;-webkit-border-radius:35px 35px 5px 5px;-moz-border-radius:35px 35px 5px 5px;-o-border-radius:35px 35px 5px 5px;border-radius:50%;}
 .but_sad_xz:active{top:7px;box-shadow: 0 2px 0 #393939, 0px 4px 4px rgba(0,0,0,0.4), 0px 2px 5px rgba(0,0,0,0.2) inset;}
 .green_sad{background-color:#519000;background-image:linear-gradient(to top, #84c333 0%, #519000 100%);background-image:-o-linear-gradient(to top, #84c333 0%, #519000 100%);background-image:-moz-linear-gradient(to top, #84c333 0%, #519000 100%);background-image:-webkit-linear-gradient(to top, #84c333 0%, #519000 100%);background-image:-ms-linear-gradient(to top, #84c333 0%, #519000 100%);-webkit-box-shadow:0 5px 5px #508530, 0 9px 0 #385e25, 0 9px 10px rgba(0,0,0,0.4), 0 2px 9px rgba(255,255,255,0.2) inset, 0 -2px 9px rgba(0,0,0,0.2) inset;-moz-box-shadow:0 5px 5px #508530, 0 9px 0 #385e25, 0 9px 10px rgba(0,0,0,0.4), 0 2px 9px rgba(255,255,255,0.2) inset, 0 -2px 9px rgba(0,0,0,0.2) inset;-o-box-shadow:0 5px 5px #508530, 0 9px 0 #385e25, 0 9px 10px rgba(0,0,0,0.4), 0 2px 9px rgba(255,255,255,0.2) inset, 0 -2px 9px rgba(0,0,0,0.2) inset;box-shadow:0 5px 5px #508530, 0 9px 0 #385e25, 0 9px 10px rgba(0,0,0,0.4), 0 2px 9px rgba(255,255,255,0.2) inset, 0 -2px 9px rgba(0,0,0,0.2) inset;}
 .green_sad:hover{-webkit-box-shadow:0 5px 5px #508530, 0 9px 0 #385e25, 0px 9px 10px rgba(0,0,0,0.4), 0px 2px 15px rgba(255,255,255,0.4) inset, 0 -2px 9px rgba(0,0,0,0.2) inset;-moz-box-shadow:0 5px 5px #508530, 0 9px 0 #385e25, 0px 9px 10px rgba(0,0,0,0.4), 0px 2px 15px rgba(255,255,255,0.4) inset, 0 -2px 9px rgba(0,0,0,0.2) inset;-o-box-shadow:0 5px 5px #508530, 0 9px 0 #385e25, 0px 9px 10px rgba(0,0,0,0.4), 0px 2px 15px rgba(255,255,255,0.4) inset, 0 -2px 9px rgba(0,0,0,0.2) inset;box-shadow:0 5px 5px #508530, 0 9px 0 #385e25, 0px 9px 10px rgba(0,0,0,0.4), 0px 2px 15px rgba(255,255,255,0.4) inset, 0 -2px 9px rgba(0,0,0,0.2) inset;}
 .green_sad:active{-webkit-box-shadow:0 2px 2px #385e25, 0px 4px 4px rgba(0,0,0,0.4), 0px 2px 5px rgba(0,0,0,0.2) inset;-moz-box-shadow:0 2px 0 #385e25, 0px 4px 4px rgba(0,0,0,0.4), 0px 2px 5px rgba(0,0,0,0.2) inset;-o-box-shadow:0 2px 0 #385e25, 0px 4px 4px rgba(0,0,0,0.4), 0px 2px 5px rgba(0,0,0,0.2) inset;box-shadow:0 2px 0 #385e25, 0px 4px 4px rgba(0,0,0,0.4), 0px 2px 5px rgba(0,0,0,0.2) inset;}
 
</style>
