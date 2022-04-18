import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import 'material-design-icons-iconfont';
import vuetify from './plugins/vuetify';
import VueYouTubeEmbed from 'vue-youtube-embed';

Vue.use(VueYouTubeEmbed);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app');
