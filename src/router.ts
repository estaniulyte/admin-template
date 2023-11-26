import { createRouter, createWebHistory } from 'vue-router';
import Products from './components/Products.vue';
import Product from './components/Product.vue';
import UnderDevelopmentMsg from './components/UnderDevelopmentMsg.vue';

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'Home', component: Products },
    { path: '/product/:id', name: 'Product', component: Product },
    { path: '/lab-test', name: 'Lab Test', component: UnderDevelopmentMsg },
    {
      path: '/appointment',
      name: 'Appointment',
      component: UnderDevelopmentMsg,
    },
    {
      path: '/medicine-order',
      name: 'Medicine order',
      component: UnderDevelopmentMsg,
    },
    { path: '/message', name: 'Message', component: UnderDevelopmentMsg },
    { path: '/payment', name: 'Payment', component: UnderDevelopmentMsg },
    { path: '/settings', name: 'Settings', component: UnderDevelopmentMsg },
    { path: '/help', name: 'Help', component: UnderDevelopmentMsg },
  ],
});
