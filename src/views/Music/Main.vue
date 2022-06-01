<template>
    <div class="container">
        <div class="wrapper">
            <MiniHeader />
            <h1>Музыка</h1>
            <div class="search-block">
                <Search 
                    ref="search"
                    @clickEvent="searchMusic"
                    @enterEvent="searchMusic"
                />
                <button 
                    @click="clearTheme" 
                    class="purpleButton buttonMarginLeft"
                >Сбросить</button>
            </div>
            <div 
                v-if="notFound" 
                class="search-fail"
            >
                К сожалению, песня не найдена
            </div>   
            <div class="itemsList">
                <router-link 
                    class="itemContainer" 
                    v-for="item in listMusic" 
                    :key="item.id"
                    :to="{
                        name:'MusicView', 
                        params:{id: item.id, url: item.url}
                    }"
                >
                    <img 
                        :src="'https://i.ytimg.com/vi/'+item.videoid+'/hqdefault.jpg'"
                        class="itemImage"
                    >
                    <p class="itemTitle">{{item.title}}</p>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import MiniHeader from '../../components/MiniHeader.vue'
import Search from '../../components/Search.vue';

export default {
    name: 'Music',

    components: {  
        MiniHeader,
        Search,
    },
        
    data() {
        return {
            listMusic: [],
            notFound: false,
        };
    },
    created(){
        this.loadMovie('movie/');
    },
    methods:{

        loadMovie(url){
            axios
            .get(`${this.$store.getters.getServerUrl}/${url}`)
            .then(response=>{
                this.listMusic=response.data; 
            })
            .catch(error => {
            this.errorMessage = error.message;
            console.error("There was an error!", error);
            });
        },

        searchMusic(searchText) {
            this.loadMovie('movie/?title='+searchText);
        },

        clearTheme() {
            this.loadMovie('movie/');
            const inputElement = this.$refs.search;
            if (inputElement) {
                inputElement.clearInput();
            }
        },
    }
};
</script>

<style lang="scss" scoped>
.content-block {
    margin-top: 0;
    text-align: center;
}

.music-block {
    margin-top: 0;
    text-align: center;
}

.material-icons {
    color: #D5444C;
}
</style>