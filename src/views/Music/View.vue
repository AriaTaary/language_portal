<template>
  <div class="container">
    <div class="wrapper">
      <MiniHeader />
      <div class="navigation">
          <router-link to="/music">
            <span class="purpleButton">Назад</span>
          </router-link>
      </div>
      <div class="videoContainer">
        <section class="videoBlock">
          <div class="videoTitle">
            {{titleOfSong}}
          </div>
          <youtube :video-id="videoId" />
        </section>
        <section class="translation">
          <h3>Перевод песни</h3>
          <table 
            v-for="song in songs" 
            :key="song"
          >
            <tr>
                <td>
                  <a
                    v-if="song.title"
                    class="songTitle"
                  >
                    {{song.title}}
                  </a>
                </td>
                <td>
                  <a
                    v-if="song.title"
                    class="songTitle"
                  >
                    {{song.title}}
                  </a>
                </td>
              </tr>
              <tr>
                <td
                  v-if="song.text"
                  class="songText"
                >
                  {{song.text}}
                </td>
                <td
                  v-if="song.text"
                  class="songText"
                >
                  {{song.text}}
                </td>
              </tr>
          </table>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
import MiniHeader from '../../components/MiniHeader.vue';

export default {
  name: 'ViewSong',

  components: { 
    MiniHeader,
  },

  props: {
    videoId: {
      type: String,
      default: '',
    },

    titleOfSong: {
      type: String,
      default: '',
    }
  },

  data () {
    return {
      songs: [
        {
          id: 1,
          title: 'If I lose myself',
          text: `I stayed up at the sun
                  Thought of all the people, places and things I’ve loved
                  I stayed up just to see
                  Of all the faces,
                  you are the one next to me
                  You can feel the light start to tremble
                  Washing what you know out to sea
                  You can see your life out of the window, tonight
                  If I lose myself tonight
                  It’ll be by your side
                  If I lose myself tonight
                  woooh, woooh, woooh!
                  If I lose myself tonight
                  It’ll be you and I
                  Lose myself tonight
                  whooooooo
                  I woke up with the sun
                  Thought of all the people, places and things I’ve loved
                  I woke up just to see
                  With all the faces
                  You are the one next to me
                  You can feel the light start to tremble
                  Washing what you know out to sea
                  You can see your life out of the window, tonight
                  If I lose myself tonight
                  It’ll be by your side
                  If I lose myself tonight
                  woooh, woooh, woooh!
                  If I lose myself tonight
                  It’ll be you and I
                  Lose myself tonight
                  whooooooo
                  Take us down and we keep trying
                  40 000 feet keep flying
                  Take us down and we keep trying
                  40 000 feet keep flying
                  Take us down and we keep trying
                  40 000 feet keep flying
                  Take us down and we keep trying
                  40 000 feet keep flying
                  Take us down and we keep trying
                  40 000 feet keep flying
                  Lose myself
                  If I lose myself tonight
                  Whoooooooooo
                  whoooooo, whoooo,
                  whooooooo`
        }
      ]
    }
  },

  beforeMount() {
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
    }).catch(function (error) {
      console.error(error);
    });
  }
}
</script>

<style lang="scss">
.videoContainer {
  display: flex;
  flex-direction: row;
  margin-top: 40px;
}

.videoBlock{
  position: relative;
  width: 640px;

  & .videoTitle {
    font-size: 20px;
    text-transform: uppercase;
    margin-bottom: 30px;
  }
}

.translation {
  display: flex;
  flex-direction: column;
  width: 100%;

  & h3 {
    text-align: center;
    margin-bottom: 30px;
  }
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
</style>
