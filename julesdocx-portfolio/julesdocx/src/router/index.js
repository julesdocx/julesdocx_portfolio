import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Work from '../views/Work.vue'
import Prototypes from '../views/Prototypes.vue'
import Design from '../views/Design.vue'

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
    path: '/work',
    name: 'Work',
    component: Work
  },
  {
    path: '/prototypes',
    name: 'Prototypes',
    component: Prototypes
  },
  {
    path: '/graphic-design',
    name: 'Design',
    component: Design
  },
]

const router = new VueRouter({
  routes
})

export default router
