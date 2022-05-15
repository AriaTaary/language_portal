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
                    v-for="item in songs" 
                    :key="item.index"
                    :to="{
                        name:'MusicView', 
                        params:{videoId:item.videoId, titleOfSong:item.titleOfSong}
                    }"
                >
                    <img 
                        :src="'https://i.ytimg.com/vi/'+item.videoId+'/hqdefault.jpg'"
                        @click="chooseSong(item)"
                        class="itemImage"
                    >
                    <p class="itemTitle">{{item.titleOfSong}}</p>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
import musicList from '../../db/musicList.json'
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
            songs: musicList,
            notFound: false,
        };
    },

    methods:{
        searchMusic(searchText) {
            this.songs = musicList.filter((item) => {
                if (item.titleOfSong.toUpperCase().includes(searchText.toUpperCase())) {
                    return true;
                }
                return false;
            });

            if (this.songs.length == 0) {
                this.notFound = true;
                this.songs = musicList;
            } else {
                this.notFound = false;
            }
        },

        clearTheme() {
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