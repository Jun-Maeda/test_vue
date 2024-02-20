import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/form',
      name: 'form',
      component: () => import('../views/FormView.vue')
    },
    {
      path: '/table',
      name: 'table',
      component: () => import('../views/TableView.vue')
    },
    {
      path: '/table2',
      name: 'table2',
      component: () => import('../views/TableView2.vue')
    },
    {
      path: '/chart',
      name: 'chart',
      component: () => import('../views/ChartView.vue')
    },
    {
      path: '/zipcode',
      name: 'zipcode',
      component: () => import('../views/ZipView.vue')
    },
    {
      path: '/harry',
      name: 'harry',
      component: () => import('../views/HarryPotter.vue')
    },
    {
      path: '/tab',
      name: 'tab',
      component: () => import('../views/TabView.vue')
    },
    {
      path: '/pivtot_get',
      name: 'pivtot_get',
      component: () => import('../views/PivtotGetView.vue')
    },
    {
      path: '/pivtot_post',
      name: 'pivtot_post',
      component: () => import('../views/PivtotPostView.vue')
    },
    {
      path: '/nyumon',
      name: 'nyumon',
      component: () => import('../views/NyuMonView.vue')
    },
    {
      path: '/pinia',
      name: 'pinia',
      component: () => import('../views/PiniaView.vue')
    },
    {
      path: '/pinia2',
      name: 'pinia2',
      component: () => import('../views/Pinia2View.vue')
    },
    {
      path: '/form_send',
      name: 'form_send',
      component: () => import('../views/FormSendView.vue')
    },
    {
      path: '/form_validate',
      name: 'form_validate',
      component: () => import('../views/FormValidate.vue')
    },
    {
      path: '/rich_text',
      name: 'rich_text',
      component: () => import('../views/RichText.vue')
    },
    {
      path: '/table_new',
      name: 'table_new',
      component: () => import('../views/TableNew.vue')
    },
    {
      path: '/form_new',
      name: 'form_new',
      component: () => import('../views/FormNew.vue')
    }
  ]
})

export default router
