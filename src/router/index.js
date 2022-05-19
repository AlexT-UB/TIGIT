import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from "@/views/HomeView"
import MainScreen from "@/views/MainScreen"
import FaqsView from "@/views/FaqsView"
import SettingsView from "@/views/SettingsView"
import ProfileView from "@/views/ProfileView"

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'MainScreen',
    component: MainScreen
  },
  {
    path: '/home',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/profile',
    name: 'Profile',
    component: ProfileView
  },
  {
    path: '/settings',
    name: 'Settings',
    component: SettingsView
  },
  {
    path: '/faqs',
    name: 'Faqs',
    component: FaqsView
  },
  {
    path: '/post',
    name: 'post',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "post" */ '../views/PostView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
