<template>
    <div class="container">
        <div class="wrapper">
            <MiniHeader />
            <div class="content">
                <h1>Разговорник</h1>
                <div class="speakingThemes">
                    <div  
                        class="themeBlock purpleButton" 
                        v-for="item in topiclist" 
                        :key="item.id" 
                        @click="toActivateTheme(item.id)" 
                    >
                        {{item.translation}}
                    </div>
                    <div class="wordsList" v-show="show">
                        <h2>{{this.phraseslist.translation}}</h2>
                        <div 
                            v-for="item in phraseslist" 
                            :key="item.id"             
                            class="wordInfo"
                        >
                            <span @click="toSpeak(item.text)" class="material-icons">
                                volume_up
                            </span>
                            <span class="word">
                                {{item.text}}
                            </span>
                            <span class="transcription">
                                {{item.translation}}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import MiniHeader from '../components/MiniHeader.vue'

export default {
    name: 'Speaking',

    components: { 
        MiniHeader
    },

    data() {
        return {
            phraseslist:[],
            topiclist:[],
            show: true,
            searchResult:[],
        };
    },
    created(){
    this.loadList('topicphrase/');  
    },    
    methods: {
        loadList(url){
            axios
            .get(`${this.$store.getters.getServerUrl}/${url}`)
            .then(response=>{
                switch (url){
                    case 'topicphrase/':
                        this.topiclist=response.data;
                        break
                    default:
                        this.phraseslist=response.data;
                }
            })
            .catch(error => {
            this.errorMessage = error.message;
            console.error("There was an error!", error);
            });
        },
        toSpeak(word) {
            speechSynthesis.speak(new SpeechSynthesisUtterance(word));
        }, 

        toActivateTheme(id) {
            this.loadList(`phrase/?topic=`+id);
        },
    }
};
</script>

<style lang="scss" scoped>
.speakingThemes {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 0 auto 40px auto;
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
    border-bottom:1px solid #ced4e7; 
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
    color: #ABB5D0;
}

.material-icons:active {
    opacity: 0.5;
}
</style>