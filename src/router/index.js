import Vue from 'vue';
import VueRouter from 'vue-router';
import Profile from '../views/Profile.vue';
import Main from '../views/Main.vue';
import Authorization from '../views/Authorization.vue';
import Registration from '../views/Registration.vue';
import MyDictionary from '../views/MyDictionary';
import Dictionary from '../views/Dictionary.vue';
import InteractiveCart from '../views/InteractiveCart.vue'
import InteractiveSpeaking from '../views/InteractiveSpeaking.vue'
import Songs from '../views/Songs.vue'
import InteractiveMusic from '../views/InteractiveMusic.vue'
import TrainingPrograms from '../views/TrainingPrograms.vue'
import Videos from '../views/Videos.vue';
import VideoPage from '../views/VideoPage.vue';
import Testing from '../views/Testing.vue';

import ArticlesMain from '../views/Articles/Main.vue';
import ArticleView from '../views/Articles/View.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Main',
    component: Main
  },
  {
    path: '/auth',
    name: 'Authorization',
    component: Authorization
  },
  {
    path: '/registration',
    name: 'Registration',
    component: Registration
  },
  {
    path: '/dictionary',
    name: 'Dictionary',
    component: Dictionary
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile
  },
  {
    path: '/interactivecart',
    name: 'InteractiveCart',
    component: InteractiveCart
  },
  {
    path: '/speaking',
    name: 'Interactivespeaking',
    component: InteractiveSpeaking
  },
  {
    path: '/mydictionary',
    name: 'Mydictionary',
    component: MyDictionary
  }, 
  {
    path: '/music',
    name: 'InteractiveMusic',
    component: InteractiveMusic
  }, 
  {
    path: '/articles',
    name: 'ArticlesMain',
    component: ArticlesMain,
    meta: {
      title: 'Обучающие статьи'
    }
  },
  {
    path: '/article/view/:id',
    name: 'ArticleView',
    component: ArticleView,
    meta: {
      title: 'Просмотр статьи'
    }
  },
  {
    path: '/songs/:videoId/:titleOfSong',
    name: 'Songs',
    component: Songs,
    props: true
  },
  {
    path: '/programs',
    name: 'Trainingprograms',
    component: TrainingPrograms
  },

  {
    path: '/videos',
    name: 'Videos',
    component: Videos
  },
  {
    path: '/videoPage:videoUrl=videoUrl:videoTitle=videoTitle',
    name: 'VideoPage',
    component: VideoPage,
    props: true
  },
  {
    path: '/testing',
    name: 'Testing',
    component: Testing
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
