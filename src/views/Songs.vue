<template>
  <div class="video-wrapper">
    <section>
    <h2>{{}}</h2>
    <iframe width="500" height="300" :src="'http://www.youtube.com/embed/'+videoId" frameborder="0" allowfullscreen></iframe>
       <youtube :video-id="videoId"></youtube>
  </section>
    <div @click="show=!show" class="songBlock">
      <h3>Перевод песни One Republic - If I lose myself</h3>
    </div>
    <transition name="fade">
            <div v-if="show"  class="songs">
                <table v-for="song in songs" :key="song">
                  <tr v-for="(value,key) in song" :key="key">
                      <td>
                      <a
                        class="songTitle"
                        v-for="(value,key) in value"
                        :key="key"
                        v-show="key=='titleOfSong'">{{value}}
                        </a>
                      </td>
                      <td>
                      <a
                        class="songTitle"
                        v-for="(value,key) in value"
                        :key="key"
                        v-show="key=='titleOfSong'">{{value}}
                        </a>
                      </td>
                    </tr>
                    <tr
                      v-for="(value,key) in song"
                      :key="key"
                    >
                      <td
                        class="songText"
                        v-for="(value,key) in value"
                        :key="key"
                        v-show="key=='textOfSong'"
                      >{{value}}</td>
                      <td
                        class="songText"
                        v-for="(value,key) in value"
                        :key="key"
                        v-show="key=='textOfSong'">{{value}}
                      </td>
                    </tr>
              </table>
            </div>
    </transition>
  </div>
</template>

<script>
/***************************/
// Translate
const axios = require("axios");

const options = {
  method: 'GET',
  url: 'https://translated-mymemory---translation-memory.p.rapidapi.com/api/get',
  params: {langpair: 'en|ru', q: 'Hello World!', mt: '1', onlyprivate: '0', de: 'a@b.c'},
  headers: {
    'X-RapidAPI-Host': 'translated-mymemory---translation-memory.p.rapidapi.com',
    'X-RapidAPI-Key': '88d73d1d24msh14c77d0c3570e68p127452jsn2de695b61d32'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});
/***************************/

export default {
  name: 'Songs',
  props: ['videoId']
  ,
  data () {
    return {
      show: false,
      songs:[]

    }
  },
  mounted () {
     this.$root.$on('shoose', function (item) {
     this.songs=item;
     this.videoId=item.videoId;
     this.titleOfSong=item.titleOfSong;

      console.log(this.songs);
     
    })
  },

 
}
</script>

<style lang="scss">
.video-wrapper{
  display: flex;
}
.songs {
  display: flex;
  justify-content: center;
  margin: 10px;
}
.songBlock {
  display:flex;
  justify-content:center;
  margin: 20px 0;
}
.songTitle {
  margin: 20px 0px;
  padding: 10px 30px;
  font-size: 18px;
}
.songText {
  width: 300px;
  padding: 10px 30px;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */ {
  opacity: 0;
}
</style>
