import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import DotsPix from '../views/DotsPix.vue'
import NBAStats from '../views/NBAStats.vue'
import FrontendCard from '../views/FrontendCard.vue'
import Design from '../views/Design.vue'

// const containsEncodedComponents = (x) => {
//   return (decodeURI(x) !== decodeURIComponent(x));
// }

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/🌱',
    name: 'My CV',
    component: About
  },
  {
    path: '/✨',
    name: 'Dots&Pix',
    component: DotsPix
  },
  {
    path: '/🌌',
    name: 'Frontend card',
    component: FrontendCard
  },
  {
    path: '/nbastats',
    name: 'NBAStats',
    component: NBAStats
  },
  {
    path: '/graphic-design',
    name: 'Design',
    component: Design
  },
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
