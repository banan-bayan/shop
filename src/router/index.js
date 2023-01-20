//import { from } from 'core-js/core/array';
import { createRouter, createWebHistory } from 'vue-router';
import catalog from '@/components/V-catalog.vue';
import contacts from '@/components/V-contacts.vue';
import cart from '@/components/V-cart.vue';
import chat from '@/components/V-postForm.vue';
import  advice from '@/components/V-advice.vue';


const routes =  [
  {
    path: '/contacts',
    name: 'contacts',
    component: contacts,
  },
  {
    path: '/advice',
    name: 'advice',
    component: advice,
  },
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
  },
  {
    path: '/chat',
    name: 'chat',
    component: chat,
    props: true,
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

