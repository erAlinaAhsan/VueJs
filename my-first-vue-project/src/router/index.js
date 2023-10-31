import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CounterView from '../views/CounterView.vue'
import TeamView from '../views/TeamView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },

    {
      path: '/counter',
      name: 'counter',
      component: CounterView
    },
    {
      path: '/team',
      name: 'team',
      component: TeamView
    }
  ]
})

export default router
