import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import DotsPix from '../views/DotsPix.vue'
import NBAStats from '../views/NBAStats.vue'
import FrontendCard from '../views/FrontendCard.vue'
import Design from '../views/Design.vue'
import AndroidAcademy from '../views/AndroidAcademy.vue'

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
    path: '/cv',
    name: 'My CV',
    component: About
  },
  {
    path: '/dotsandpix',
    name: 'Dots&Pix',
    component: DotsPix
  },
  {
    path: '/frontendcard',
    name: 'Frontend card',
    component: FrontendCard
  },
  {
    path: '/nbastats',
    name: 'NBAStats',
    component: NBAStats
  },
  {
    path: '/academy',
    name: 'academy',
    component: AndroidAcademy
  },
  {
    path: '/graphicdesign',
    name: 'Design',
    component: Design
  },
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
