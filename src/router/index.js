import Vue from 'vue';
import VueRouter from 'vue-router';

import Main from '../views/Main.vue';

import Profile from '../views/Profile/Main.vue';

import DictionaryMain from '../views/Dictionary/Main.vue';
import MyDictionary from '../views/Dictionary/MyDictionary';

import VideosMain from '../views/Videos/Main.vue';
import VideoView from '../views/Videos/View.vue';

import ArticlesMain from '../views/Articles/Main.vue';
import ArticleView from '../views/Articles/View.vue';

import MusicMain from '../views/Music/Main.vue';
import MusicView from '../views/Music/View.vue';

import Words from '../views/Words.vue';
import Speaking from '../views/Speaking.vue';
import TrainingPrograms from '../views/TrainingPrograms.vue';
import Testing from '../views/Testing.vue';
import TranslateInTime from '../views/TranslateInTime.vue';
import ProgramPage from '../views/ProgramPage.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Main',
    component: Main,
    meta: {
      title: 'HelpTense'
    }
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile,
    meta: {
      title: 'Профиль'
    }
  },
  {
    path: '/dictionary',
    name: 'DictionaryMain',
    component: DictionaryMain,
    meta: {
      title: 'Словарь'
    }
  },
  {
    path: '/dictionary/my',
    name: 'Mydictionary',
    component: MyDictionary,
    meta: {
      title: 'Мой словарь'
    }
  },
  {
    path: '/videos',
    name: 'VideosMain',
    component: VideosMain,
    meta: {
      title: 'Видео'
    }
  },
  {
    path: '/video/view/:videoUrl=videoUrl:videoTitle=videoTitle',
    name: 'VideoView',
    component: VideoView,
    props: true,
    meta: {
      title: 'Просмотр видео'
    }
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
    props: true,
    meta: {
      title: 'Просмотр статьи'
    }
  },
  {
    path: '/music',
    name: 'Music',
    component: MusicMain,
    meta: {
      title: 'Музыка'
    }
  },
  {
    path: '/music/view/:videoId/:titleOfSong',
    name: 'MusicView',
    component: MusicView,
    props: true,
    meta: {
      title: 'Просмотр песни'
    }
  },
  {
    path: '/words',
    name: 'Words',
    component: Words,
    meta: {
      title: 'Слова'
    }
  },
  {
    path: '/speaking',
    name: 'Speaking',
    component: Speaking,
    meta: {
      title: 'Разговорник'
    }
  },
  {
    path: '/programs',
    name: 'Trainingprograms',
    component: TrainingPrograms,
    meta: {
      title: 'Обучающие программы'
    }
  },
  {
    path: '/testing',
    name: 'Testing',
    component: Testing,
    meta: {
      title: 'Тестирование'
    }
  },
  {
    path: '/translateintime',
    name: 'translateintime',
    component: TranslateInTime,
    meta: {
      title: 'Перевод на время'
    }
  },
  {
    path: '/programpage',
    name: 'ProgramPage',
    component: ProgramPage,
    meta: {
      title: 'Прохождение программы обучения'
    }
  },
  {
    path: '/programpage:article',
    name: 'ProgramPageArticle',
    component: ProgramPage,
    meta: {
      title: 'Прохождение программы обучения'
    }
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
