<template>
    <div class="my-dictionary">
        <h1>Мой словарь  ( {{myDictionary.length}} )</h1>
        <div class="list-words">
            <div v-for="word in myDictionary" :key="word.index" class="row-dictionary conteiner">
                 <span @click="toSpeak(item.word)" class="material-icons">volume_up</span>
                <div class="column-dictionary-word">
                    {{word.word}}
                </div>
                <div  class="column-dictionary-transcription">
                    {{word.transcription}}
                </div>
                <div  class="column-dictionary-transcription">
                    {{word.translation}}
                </div>
                <span class="material-icons" @click="deleteWordMyDictionary">delete</span>
            </div>
        </div>
    </div>
</template>

<script>
import dictionary from '@/db/dictionary'

export default {
    name: 'Mydictionary',

    data() {
        return {
            myDictionary: dictionary,       
        };
    },

    methods: {
        deleteWordMyDictionary () {
            console.log(this.myDictionary);
        },
        toSpeak(word) {
            speechSynthesis.speak(new SpeechSynthesisUtterance(word));
        },
    },
};
</script>

<style lang="scss" scoped>
.my-dictionary {
    margin-bottom: 50px;
    padding: 50px 0;
}

.my-dictionary h1 {
    margin-bottom: 40px;
    text-align: center;
    font-family: "Montserrat", sans-serif;
    font-size: 20px;
    color: #666e83;
    text-transform: uppercase;
}

.list-words {
    display: grid;
    justify-items: center;
    text-transform: none;
    font-size: 20px;
}

.row-dictionary {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px 10px;
    border-bottom:1px solid #ced4e7; ;
}

.column-dictionary-word, 
.column-dictionary-transcription {
    width: 250px;
    padding-left: 15px;
}

.material-icons {
    cursor: pointer;
    color: #ABB5D0;
}

.material-icons:active {
    opacity: 0.5;
}
</style>
