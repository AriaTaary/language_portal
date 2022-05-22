<template>
  <div class="app">
    <Header />
    <router-view class="routerBody" />
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';

export default {
  name: 'App',

  components: {
    Header,
    Footer,
  },
};
</script>

<style lang="scss">
@import "assets/style/main.scss";
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;800&display=swap");

* {
  margin: 0;
  padding: 0;
}

.app {
  font-family: 'Montserrat', sans-serif;
  font-weight: 400;
  text-transform: uppercase;
  font-size: 15px;
  color: black;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.routerBody {
  flex: 1;
}
</style>
