import Vue from 'vue';
import VueRouter from 'vue-router';
import Profile from '../views/Profile.vue';
import Main from '../views/Main.vue';
import MyDictionary from '../views/MyDictionary';
import Dictionary from '../views/Dictionary.vue';
import Words from '../views/Words.vue';
import Speaking from '../views/Speaking.vue';
import Songs from '../views/Songs.vue';
import Music from '../views/Music.vue';
import TrainingPrograms from '../views/TrainingPrograms.vue';
import Videos from '../views/Videos.vue';
import VideoPage from '../views/VideoPage.vue';
import Testing from '../views/Testing.vue';
import TranslateInTime from '../views/TranslateInTime.vue';

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
    path: '/words',
    name: 'Words',
    component: Words
  },
  {
    path: '/speaking',
    name: 'Speaking',
    component: Speaking
  },
  {
    path: '/mydictionary',
    name: 'Mydictionary',
    component: MyDictionary
  },
  {
    path: '/music',
    name: 'Music',
    component: Music
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
  {
    path: '/translateintime',
    name: 'translateintime',
    component: TranslateInTime
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
