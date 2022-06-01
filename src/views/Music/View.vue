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
            {{ movie.title }}
          </div>
          <youtube :video-id="movie.videoid" />
        </section>
        <section class="translation">
            <table>
              <tr>
                <td>
                  <h3>Слова песни</h3>
                </td>
              </tr>
              <tr v-for="item in subEnJson"
                  :key="item.index">
                <td class="songText">{{item.text}}</td>
              </tr>
            </table>
            <table>
              <tr>
                <td>
                  <h3>Перевод песни</h3>
                </td>
              </tr>
              <tr v-for="item in subRuJson"
                  :key="item.index">
                <td class="songText">{{item.text}}</td>
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
    id: {
      type: Number,
    },
  },

  data () {
    return {
      movie: {},
      subEnJson: {},
      subRuJson: {},
    };
  },
  created() {
    this.loadMovie();
  },
  methods: {
    async loadMovie() {
      this.movie = await fetch(
        `${this.$store.getters.getServerUrl}/movie/${this.id}`
      ).then((response) => response.json());
      this.subEnJson = JSON.parse(this.movie.sub_en);
      this.subRuJson = JSON.parse(this.movie.sub_ru);
    },
  },
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
  justify-content: space-evenly;
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
