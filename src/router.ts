import { createRouter, createWebHistory } from 'vue-router';
import Products from './components/Products.vue';
import Product from './components/Product.vue';

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'Home', component: Products },
    { path: '/product/:id', name: 'Product', component: Product },
  ],
});
