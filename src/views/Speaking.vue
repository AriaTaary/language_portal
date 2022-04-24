<template>
    <div class="container routerBody">
        <div class="feed-body">
             <div class="advisory">
                <VNavLeft></VNavLeft>
            </div>
             <div class="feed">
                <div class="content-title">
                    Разговорник
                </div>
                <div class="list-themes">
                    <div class="list-themes conteiner" >
                        <div  
                        class="themes-block" 
                        v-for="item in themesArray" 
                        :key="item.index" 
                        @click="toActivateTheme(item)" >
                            {{item.translation}}
                        </div>
                    </div>
                    <div class="list-words" v-show="show">
                        <h2>{{this.currentTheme.translation}}</h2>
                        <div 
                        v-for="item in searchResult" 
                        :key="item.index"             
                        class="row-dictionary conteiner">
                            <span
                                @click="toSpeak(item.word)" class="material-icons"
                                >volume_up</span>
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
    </div>
</template>

<script>
import VNavLeft from '../components/v-nav-left'
import phrases from '@/db/phrases'
import themespharases from '@/db/themespharases'

export default {
  components: { VNavLeft },
    name: 'Speaking',

data() {
    return {
        phraseslist:phrases,
        themesArray:themespharases,
        show: true,
        currentTheme:[],
        searchResult:[],
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
    }
}
};
</script>

<style lang="scss" scoped>
.themes-block{
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
.advisory {
    margin: 0 50px 0 0;
}
.nav-speak-wrap{
    display: flex;
    justify-content: space-between;
}
.list-themes{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 25px auto;
}
.conteiner{
    width: 1124px;
}
.wrapper{
    margin-bottom: 50px;
    padding: 50px 0;
}
h2{
    text-align: center;
    color: #666e83;
    margin-bottom: 50px;
    font-size: 20px;
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

</style>