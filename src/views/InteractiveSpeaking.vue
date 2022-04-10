<template>
    <div class="wrapper">
        <h1>Разговорник</h1>
        <div class="nav-speak-wrap">
            <VNavLeft></VNavLeft>
        <div class="list-themes">
            <div class="list-themes conteiner" >
                <div  class="but_sad_s_2 blue_sad avd_div" v-for="item in themesArray" :key="item.index" @click="toActivateTheme(item)" >
                    {{item.translation}}
                </div>
            </div>
            <div class="list-words" v-show="show">
                <h1>{{this.currentTheme.translation}}</h1>
                <div v-for="item in searchResult" :key="item.index"             class="row-dictionary conteiner">
                    <span @click="toSpeak(item.word)" class="material-icons">volume_up</span>
                    <div class="column-dictionary-word">
                    {{item.word}}
                    </div>
                    <div  class="column-dictionary-transcription">
                        {{item.translation}}
                    </div>
                </div>
            </div>
        </div>
        </div>
    </div>
</template>

<script>
import VNavLeft from '../components/v-nav-left'
import phrases from '@/db/phrases'
import themespharases from '@/db/themespharases'

export default {
  components: { VNavLeft },
    name: 'Interactivespeaking',

data() {
    return {
        phraseslist:phrases,
        themesArray:themespharases,
        show: false,
        currentTheme:[],
        searchResult:[]
    };
},
methods: {
    toSpeak(word) {
        speechSynthesis.speak(new SpeechSynthesisUtterance(word));
    }, 
    toActivateTheme(item) {
        console.log(item);
        this.currentTheme = item;
        this.sortByTheme();
        this.show=true;
    },
    sortByTheme() {
        this.searchResult = this.phraseslist.filter((item) => {
        if (item.theme === this.currentTheme.theme) {
        return true;
        }
        });
    }
}
};
</script>

<style lang="scss" scoped>
.wrapper{
   
}
.nav-speak-wrap{
    display: flex;
    justify-content: space-between;
}
.list-themes{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 0 auto;
}
.conteiner{
    width: 1124px;
}
.wrapper{
    margin-bottom: 50px;
    padding: 50px 0;
}
.wrapper h1{
    margin-bottom: 40px;
    text-align: center;
    font-size: 20px;
    color: #666e83;
}
.list-words{
    display: grid;
    justify-items: center;
    text-transform: none;
    font-size: 20px;
    padding-top: 50px;
}
.row-dictionary{
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px 10px;
    border-bottom:1px solid #ced4e7; 
    text-align: center;
}
.column-dictionary-word, .column-dictionary-transcription{
    width: 350px;
}
.material-icons{
    cursor: pointer;
    margin: 0 40px;
    color: #ABB5D0;
}
.material-icons:active{
    opacity: 0.5;
}
.avd_div{
  cursor: pointer;
  margin:20px 20px;padding:0;text-align:center;display:block;}
 .but_sad_s_2{text-decoration:none;color:#fff;padding:12px 20px;font-size:18px;font-weight:bold;-webkit-border-radius:10px;-moz-border-radius:10px;-o-border-radius:10px;border-radius:10px;-webkit-box-shadow:0 5px 5px #313131, 0 9px 0 #393939, 0px 9px 10px rgba(0,0,0,0.4), 0px 2px 9px rgba(255,255,255,0.2) inset, 0 -2px 9px rgba(0,0,0,0.2) inset;-moz-box-shadow:0 5px 5px #313131, 0 9px 0 #393939, 0px 9px 10px rgba(0,0,0,0.4), 0px 2px 9px rgba(255,255,255,0.2) inset, 0 -2px 9px rgba(0,0,0,0.2) inset;-o-box-shadow:0 5px 5px #313131, 0 9px 0 #393939, 0px 9px 10px rgba(0,0,0,0.4), 0px 2px 9px rgba(255,255,255,0.2) inset, 0 -2px 9px rgba(0,0,0,0.2) inset;box-shadow:0 5px 5px #313131, 0 9px 0 #393939, 0px 9px 10px rgba(0,0,0,0.4), 0px 2px 9px rgba(255,255,255,0.2) inset, 0 -2px 9px rgba(0,0,0,0.2) inset;position:relative;border-bottom:1px solid rgba(255,255,255,0.2);text-shadow:0 1px 1px #555;-webkit-border-radius:35px 5px;-moz-border-radius:35px 5px;-o-border-radius:35px 5px;border-radius:35px 5px;}
 .but_sad_s_2:hover{-webkit-box-shadow:0 5px 5px #313131, 0 9px 0 #393939, 0px 9px 10px rgba(0,0,0,0.4), inset 0px 2px 15px rgba(255,255,255,0.4), inset 0 -2px 9px rgba(0,0,0,0.2);-moz-box-shadow:0 5px 5px #313131, 0 9px 0 #393939, 0px 9px 10px rgba(0,0,0,0.4), inset 0px 2px 15px rgba(255,255,255,0.4), inset 0 -2px 9px rgba(0,0,0,0.2);-o-box-shadow:0 5px 5px #313131, 0 9px 0 #393939, 0px 9px 10px rgba(0,0,0,0.4), inset 0px 2px 15px rgba(255,255,255,0.4), inset 0 -2px 9px rgba(0,0,0,0.2);box-shadow:0 5px 5px #313131, 0 9px 0 #393939, 0px 9px 10px rgba(0,0,0,0.4), inset 0px 2px 15px rgba(255,255,255,0.4), inset 0 -2px 9px rgba(0,0,0,0.2);}
 .but_sad_s_2:active{top:7px;box-shadow: 0 2px 0 #393939, 0px 4px 4px rgba(0,0,0,0.4), 0px 2px 5px rgba(0,0,0,0.2) inset;}
 .blue_sad{background-color:#2ca0ca;background-image:linear-gradient(to top, #3eb8e5 0%, #2ca0ca 100%);background-image:-o-linear-gradient(to top, #3eb8e5 0%, #2ca0ca 100%);background-image:-moz-linear-gradient(to top, #3eb8e5 0%, #2ca0ca 100%);background-image:-webkit-linear-gradient(to top, #3eb8e5 0%, #2ca0ca 100%);background-image:-ms-linear-gradient(to top, #3eb8e5 0%, #2ca0ca 100%);-webkit-box-shadow:0 5px 5px #267896, 0 9px 0 #156785, 0 9px 10px rgba(0, 0, 0, 0.4), 0 2px 9px rgba(255, 255, 255, 0.2) inset, 0 -2px 9px rgba(0, 0, 0, 0.2) inset;-moz-box-shadow:0 5px 5px #267896, 0 9px 0 #156785, 0 9px 10px rgba(0, 0, 0, 0.4), 0 2px 9px rgba(255, 255, 255, 0.2) inset, 0 -2px 9px rgba(0, 0, 0, 0.2) inset;-o-box-shadow:0 5px 5px #267896, 0 9px 0 #156785, 0 9px 10px rgba(0, 0, 0, 0.4), 0 2px 9px rgba(255, 255, 255, 0.2) inset, 0 -2px 9px rgba(0, 0, 0, 0.2) inset;box-shadow:0 5px 5px #267896, 0 9px 0 #156785, 0 9px 10px rgba(0, 0, 0, 0.4), 0 2px 9px rgba(255, 255, 255, 0.2) inset, 0 -2px 9px rgba(0, 0, 0, 0.2) inset;}
 .blue_sad:hover{-webkit-box-shadow:0 5px 5px #267896, 0 9px 0 #156785, 0px 9px 10px rgba(0,0,0,0.4), 0px 2px 15px rgba(255,255,255,0.4) inset, 0 -2px 9px rgba(0,0,0,0.2) inset;-moz-box-shadow:0 5px 5px #267896, 0 9px 0 #156785, 0px 9px 10px rgba(0,0,0,0.4), 0px 2px 15px rgba(255,255,255,0.4) inset, 0 -2px 9px rgba(0,0,0,0.2) inset;-o-box-shadow:0 5px 5px #267896, 0 9px 0 #156785, 0px 9px 10px rgba(0,0,0,0.4), 0px 2px 15px rgba(255,255,255,0.4) inset, 0 -2px 9px rgba(0,0,0,0.2) inset;box-shadow:0 5px 5px #267896, 0 9px 0 #156785, 0px 9px 10px rgba(0,0,0,0.4), 0px 2px 15px rgba(255,255,255,0.4) inset, 0 -2px 9px rgba(0,0,0,0.2) inset;}
 .blue_sad:active{-webkit-box-shadow:0 2px 2px #25325e, 0px 4px 4px rgba(0,0,0,0.3), 0px 2px 5px rgba(0,0,0,0.2) inset;-moz-box-shadow:0 2px 0 #25325e, 0px 4px 4px rgba(0,0,0,0.3), 0px 2px 5px rgba(0,0,0,0.2) inset;-o-box-shadow:0 2px 0 #25325e, 0px 4px 4px rgba(0,0,0,0.3), 0px 2px 5px rgba(0,0,0,0.2) inset;box-shadow:0 2px 0 #25325e, 0px 4px 4px rgba(0,0,0,0.3), 0px 2px 5px rgba(0,0,0,0.2) inset;}
</style>