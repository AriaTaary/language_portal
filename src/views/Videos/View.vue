<template>
  <div class="container">
    <div class="wrapper">
      <MiniHeader />
      <div class="navigation">
          <router-link to="/videos">
            <span class="purpleButton">Назад</span>
          </router-link>
      </div>
      <h1 class="videoTitle">{{ video.title }}</h1>
      <youtube :video-id="video.videoid" />
    </div>
  </div>
</template>

<script>
import MiniHeader from '../../components/MiniHeader.vue';

export default {
  name: 'VideoPage',

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
      video: {},
    };
  },
  created() {
    this.loadVideo();
  },
  methods: {
    async loadVideo() {
      this.video = await fetch(
        `${this.$store.getters.getServerUrl}/video/${this.id}`
      ).then((response) => response.json());
    },
  },
};
</script>

<style lang="scss" scoped>
.videoTitle {
  margin-top: 40px;
}
</style>