<template>
    <div class="my-dictionary">
        <h1>Мой словарь  ( {{words.length}} )</h1>
        <div class="list-words">
            <div v-for="word in words" :key="word.index" class="row-dictionary conteiner">
                <div class="column-dictionary-word">
                    {{word.word}}
                </div>
                <div  class="column-dictionary-translates">
                    {{word.translates}}
                </div>
                <span class="material-icons" @click="deleteWordMyDictionary">delete</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Mydictionary',

    data() {
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
             ]            
        };
    },

    mounted() {
       
    },

    methods: {
        deleteWordMyDictionary () {
console.log(this.words);
        }
    },
};
</script>

<style lang="scss" scoped>
.my-dictionary{
    padding: 50px 0;
}
.my-dictionary h1{
    margin-bottom: 40px;
    text-align: center;
}
.list-words{
    display: grid;
    justify-items: center;
}
.row-dictionary{
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 15px 10px;
    text-transform: capitalize;
    border-bottom:1px solid gray ;
    width: 1150px;
}
.column-dictionary-word{
    width: 250px;
}
.column-dictionary-translates{
    width: 600px;
}
.material-icons{
    margin-left: 40px;
    color: #ABB5D0;
}
</style>