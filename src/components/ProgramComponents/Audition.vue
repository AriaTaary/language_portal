<template>
  <div class="audition">
    <div class="header">
      <div class="arrow-down">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <h1>Посмотрите видео и прослушайте аудио</h1>
      <div class="arrow-down">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
    <div class="audition-item">
      <h2 class="videoTitle">{{ currentVideo.name }}</h2>
      <youtube :video-id="currentVideo.url" />
    </div>
    <div class="audition-item">
      <div class="videoContainer">
        <section class="videoBlock">
          <h2 class="videoTitle">{{currentMusic.titleOfSong}}</h2>
          <youtube :video-id="currentMusic.videoId" />
        </section>
        <section class="translation">
          <h3>Перевод песни</h3>
          <table v-for="song in songs" :key="song">
            <tr>
              <td>
                <a v-if="song.title" class="songTitle">{{song.title}}</a>
              </td>
              <td>
                <a v-if="song.title" class="songTitle">{{song.title}}</a>
              </td>
            </tr>
            <tr>
              <td v-if="song.text" class="songText">{{song.text}}</td>
              <td v-if="song.text" class="songText">{{song.text}}</td>
            </tr>
          </table>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
import dataFilms from '../../db/dataFilms';
import musicList from '../../db/musicList';
export default {
  data() {
    return {
      currentVideo: {},
      currentMusic: {},
      video: [],
      music: [],
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
                  whooooooo`,
        },
      ],
    };
  },
  mounted() {
    this.setVideo();
    this.setMusic();
  },
  methods: {
    setVideo() {
      this.video = dataFilms.films;
      this.currentVideo =
        this.video[Math.floor(Math.random() * this.video.length)];
    },
    setMusic() {
      this.music = musicList;
      this.currentMusic =
        this.music[Math.floor(Math.random() * this.music.length)];
    },
  },
};
</script>

<style lang="scss" scoped>
.arrow-down {
  margin: -30px 30px 30px 30px;
}

.arrow-down span {
  display: block;
  width: 30px;
  height: 30px;
  border-bottom: 5px solid #abb5d0;
  border-right: 5px solid #abb5d0;
  transform: rotate(45deg);
  margin: -16px;
  animation: arrow-down 2s infinite;
}

.arrow-down span:nth-child(2) {
  animation-delay: -0.2s;
}

.arrow-down span:nth-child(3) {
  animation-delay: -0.4s;
}

@keyframes arrow-down {
  0% {
    opacity: 0;
    transform: rotate(45deg) translate(-20px, -20px);
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    transform: rotate(45deg) translate(20px, 20px);
  }
}

.header {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>