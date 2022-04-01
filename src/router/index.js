import Vue from 'vue'
import VueRouter from 'vue-router'
import Profile from '../views/Profile.vue'
import Main from '../views/Main.vue'
import Authorization from '../views/Authorization.vue'
import Registration from '../views/Registration.vue'
import Interactive from '../views/Interactive.vue'
import MyDictionary from '@/views/MyDictionary'

Vue.use(VueRouter)

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
    path: '/mydictionary',
    name: 'Mydictionary',
    component: MyDictionary
  }
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
