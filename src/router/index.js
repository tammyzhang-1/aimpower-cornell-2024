import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import HomeDetailView from '../views/HomeDetailView.vue'
import DiscussionView from '../views/DiscussionView.vue'
import DiscussionDetailView from '../views/DiscussionDetailView.vue'
import AboutUsView from '../views/AboutUsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/meeting/:meeting_key', //todo: make dynamic
      name: 'home-detail',
      component: HomeDetailView
    },
    {
      path: '/discussion',
      name: 'discussion',
      component: DiscussionView
    },
    {
      path: '/discussion/:discussion_key', //todo: make dynamic
      name: 'discussion-detail',
      component: DiscussionDetailView
    },
    {
      path: '/about-us',
      name: 'about-us',
      component: AboutUsView
    }
  ]
})

export default router
