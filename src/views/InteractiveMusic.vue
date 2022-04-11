<template>
    <div class="wrapper">
        <h1>Музыка</h1>
        <div class="music-nav-wrapper">
       <VNavLeft></VNavLeft>
        <div class="music-list">
            <router-link 
            class="song-item" 
            v-for="item in songs" 
            :key="item.index"
            :to="{name:'Songs', params:{videoId:item.videoId, titleOfSong:item.titleOfSong}}">
                <img :src="'https://i.ytimg.com/vi/'+item.videoId+'/hqdefault.jpg'" alt="img" @click="chooseSong(item)">
                    <p>{{item.titleOfSong}}</p>
            </router-link>
           
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
        };
    },
};
</script>

<style lang="scss" scoped>
.wrapper{
    padding-top: 50px;
    text-align: center;
}
.wrapper h1 {
    margin-bottom: 40px;
    text-align: center;
    font-size: 20px;
    color: #666e83;
}
.music-nav-wrapper{
    display: flex;
    justify-content: space-between;
}
.music-list{
    
    padding: 0 20px;
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
    margin: 20px;
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
</style>