//import { from } from 'core-js/core/array';
import { createRouter, createWebHistory } from 'vue-router';
import catalog from '@/components/V-catalog.vue';
import cart from '@/components/V-cart.vue';


const routes =  [
  {
    path: '/',
    name: 'catalog',
    component: catalog,
  },
  {
    path: '/cart',
    name: 'cart',
    component: cart,
    props: true,
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

