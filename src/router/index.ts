import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import Home from '../views/Home.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/career-centre/career-coach/topics',
    name: 'career-centre.career-coach.topics',
    component: () => import('../views/Topics.vue')
  },
  {
    path: '/career-centre/career-coach/:topicId(\\d+)/:topicSlug',
    name: 'career-centre.career-coach.topic',
    component: () => import('../views/Topic.vue')
  },
  {
    path: '/career-centre/career-coach/:topicId(\\d+)/:topicSlug/:articleId(\\d+)/:articleSlug',
    name: 'career-centre.career-coach.article',
    component: () => import('../views/Article.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
