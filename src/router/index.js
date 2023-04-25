import Vue from 'vue'
import VueRouter from 'vue-router'
import TestingPage from '@/views/TestingPage.vue'
import ClientHomePage from '@/views/ClientHomePage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'TestingPage',
    component: TestingPage
  },
  {
    path: '/client-home',
    name: 'ClientHomePage',
    component: ClientHomePage
  }
]

const router = new VueRouter({
  routes
})

export default router
