<template>
  <div class="container">
    <div class="wrapper">
      <MiniHeader />
      <div class="navigation">
          <router-link to="/videos">
            <span class="purpleButton">Назад</span>
          </router-link>
      </div>
      <h1 class="videoTitle">{{ videoTitle }}</h1>
      <youtube :video-id="videoUrl" />
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
    videoTitle: {
      type: String,
      default: '',
    },

    videoUrl: {
      type: String,
      default: '',
    }
  },
};
</script>

<style lang="scss" scoped>
.videoTitle {
  margin-top: 40px;
}
</style>