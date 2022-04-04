<template>
    <div class="my-dictionary">
        <h1>Мой словарь  ( {{myDictionary.length}} )</h1>
        <div class="list-words">
            <div v-for="word in myDictionary" :key="word.index" class="row-dictionary conteiner">
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
            myDictionary: dictionary.words,       
        };
    },
    methods: {
        deleteWordMyDictionary () {
            console.log(this.myDictionary);
        },
    },
};
</script>

<style lang="scss" scoped>
.my-dictionary{
    margin-bottom: 50px;
    padding: 50px 0;
}
.my-dictionary h1{
    margin-bottom: 40px;
    text-align: center;
    font-family: "Montserrat", sans-serif;
    font-size: 20px;
    color: #666e83;
    text-transform: uppercase;
}
.list-words{
    display: grid;
    justify-items: center;
}
.row-dictionary{
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px 10px;
    border-bottom:1px solid #ced4e7; ;
}
.column-dictionary-word{
    width: 250px;
}
.column-dictionary-transcription{
    width: 300px;
}
.material-icons{
    margin-left: 40px;
    color: #ABB5D0;
}
</style>