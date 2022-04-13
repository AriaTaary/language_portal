<template>
    <div class="container routerBody">
        <div class="feed-body">
            <div class="advisory">
                <VNavLeft></VNavLeft>
            </div>
            <div class="feed">
                <div class="feed-title">
                    <div class="content-title">
                     Музыка
                    </div>
                    <div>
                         <div class="search-field">
                        <button class="search-button">
                            <span 
                                class="material-icons" 
                                @click="sortArray"
                            >
                                search
                            </span>
                        </button>
                        <input 
                            type="search" 
                            class="input-search" 
                            placeholder="НАЙТИ..."
                            v-model="searchRequest"
                        />
                    </div>
                    <div v-show="notFound" class="search-fail">К сожалению, песня не найдена</div>
                         
                    </div>
                </div>
                <div class="music-nav-wrapper">
                <div class="music-list">
                    <div class="content-block">
                        <router-link 
                            class="song-item" 
                            v-for="item in songs" 
                            :key="item.index"
                            :to="{
                                name:'Songs', 
                                params:{videoId:item.videoId, titleOfSong:item.titleOfSong}}">
                            <img 
                                :src="'https://i.ytimg.com/vi/'+item.videoId+'/hqdefault.jpg'"
                                alt="img" 
                                @click="chooseSong(item)"
                            >
                            <p>{{item.titleOfSong}}</p>
                        </router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import VNavLeft from '../components/v-nav-left'
import musicList from '@/db/musicList.json'

export default {
  components: { VNavLeft },
    name: 'InteractiveMusic',
        
    data() {
        return {
            songs:musicList,
            notFound: false,
            searchRequest: null,
        };
    },
    methods:{
         sortArray() {
             console.log(musicList);
      this.songs = musicList.filter((item) => {
        if (
          item.titleOfSong.toUpperCase().includes(this.searchRequest.toUpperCase())
        ) {
          return true;
        }
        return false;
      });
      if (this.songs.length == 0) {
        this.notFound = true;
        this.songs = this.musicList;
      } else {
        this.notFound = false;
      }
    },
    created(){
        
    }
    }
};
</script>

<style lang="scss" scoped>
.content-block {
    margin-top: 0;
    text-align: center;
}
.search-button{
    margin: 0;
}.feed-title{
    align-items: flex-start;
}
.search-fail{
    margin-top: 25px;
}
.searchResult{
    margin-bottom: 0;
}
.advisory {
    margin: 0 50px 0 0;
}
.material-icons{
    color: #D5444C;
}
.music-list{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}
.song-item{
    position: relative;
    cursor: pointer;
    width: 230px;
    height: 200px;
    display: inline-block;
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
    margin:0 20px 50px 0;
    color: white;
    border-radius: 10px;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.85), transparent);
}
img{
    width: 230px;
    height: 200px;
    opacity: 0.9;
    border-radius: 10px;
    transition: 0.5s; 
     background: linear-gradient(to top, rgba(0, 0, 0, 0.85), transparent);
}
p{
    position: absolute;
    top: 130px;
    width: inherit;
    font-weight: 700;
}
img:hover{
    transform: scale(1.2);
    z-index: 1;
    margin: 20px;
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
}
img:hover p{
 transform: scale(1.2);
    z-index: 1;
    margin: 20px;
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
}
</style>