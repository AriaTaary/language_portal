import Vue from 'vue';
import VueRouter from 'vue-router';
import Main from '../views/Main.vue';
import Authorization from '../views/Authorization.vue';
import Registration from '../views/Registration.vue';
import Dictionary from '../views/Dictionary.vue';

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
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
