<template>
  <div class="single-video-wrapper">
    <div class="video-player-block">
      <router-link to="/videos" class="router-btn">
        <button class="return">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-arrow-return-left"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M14.5 1.5a.5.5 0 0 1 .5.5v4.8a2.5 2.5 0 0 1-2.5 2.5H2.707l3.347 3.346a.5.5 0 0 1-.708.708l-4.2-4.2a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 8.3H12.5A1.5 1.5 0 0 0 14 6.8V2a.5.5 0 0 1 .5-.5z"
            /></svg
          >Вернуться
        </button>
      </router-link>
      <h1 class="video-title">{{ videoTitle }}</h1>

      <div class="video-player-block__item">
        <youtube :video-id="videoUrl"></youtube>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VideoPage',
  props: ['videoTitle', 'videoUrl'],
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.single-video-wrapper {
  background: url('../assets/img/videos-page-bcg.jpg');
  background-size: cover;
}
.video-player-block {
  width: 990px;
  margin: auto;
}
.return {
  display: flex;
  margin-top: 70px;
  align-items: center;
  text-transform: uppercase;
  font-size: 14px;
  color: #4e5566;
}
.router-btn {
  text-decoration: none;
}
.video-player-block__item {
  margin-left: 17%;
  margin-bottom: 170px;
}
.video-title {
  text-align: center;
  margin: 20px 0px 40px 0px;
  font-size: 26px;
  font-weight: 600;
  color: #69728b;
}
</style>