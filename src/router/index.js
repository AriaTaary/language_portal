import Vue from 'vue'
import VueRouter from 'vue-router'
import Profile from '../views/Profile.vue'
import Main from '../views/Main.vue'
import Authorization from '../views/Authorization.vue'
import Registration from '../views/Registration.vue'
import Interactive from '../views/Interactive.vue'
import MyDictionary from '@/views/MyDictionary'
import Dictionary from '../views/Dictionary.vue';
import InteractiveCart from '@/views/InteractiveCart'
import InteractiveSpeaking from '@/views/InteractiveSpeaking'
import Songs from '../views/Songs.vue'
import InteractiveMusic from '../views/InteractiveMusic.vue'
import TrainingPrograms from '@/views/TrainingPrograms'

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
    path: '/interactive',
    name: 'Interactive',
    component: Interactive
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
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
