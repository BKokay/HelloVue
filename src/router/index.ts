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
    // Reactivity System
    {
      path: '/reactive',
      name: 'reactive',
      component: () => import('../views/ReactiveView.vue')
    },
    {
      path: '/ref',
      name: 'ref',
      component: () => import('../views/RefView.vue')
    },
    {
      path: '/computed',
      name: 'computed',
      component: () => import('../views/ComputedView.vue')
    },
    {
      path: '/watch',
      name: 'watch',
      component: () => import('../views/WatchView.vue')
    },
    // Data Binding
    {
      path: '/v-bind',
      name: 'v-bind',
      component: () => import('../views/V-BindView.vue')
    },
    {
      path: '/v-model',
      name: 'v-model',
      component: () => import('../views/V-ModelView.vue')
    },
    // Component Interaction
    {
      path: '/props',
      name: 'props',
      component: () => import('../views/PropsView.vue')
    },
    {
      path: '/emits',
      name: 'emits',
      component: () => import('../views/EmitsView.vue')
    },
    {
      path: '/templates',
      name: 'templates',
      component: () => import('../views/TemplatesView.vue')
    },
    {
      path: '/slots',
      name: 'slots',
      component: () => import('../views/SlotsView.vue')
    },
    // composables 
    {
      path: '/composables',
      name: 'composables', 
      component: () => import('../views/ComposableView.vue')
    },
    {
      path: '/accordion',
      name: 'accordion',
      component: () => import('../views/AccordionView.vue')
    },
  ]
})

export default router
