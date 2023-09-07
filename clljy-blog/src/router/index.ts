/*
 * @Descripttion:
 * @version:
 * @Author: 程
 * @Date: 2023-09-07 16:47:13
 * @LastEditors: 程
 * @LastEditTime: 2023-09-07 16:51:58
 */
import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home/index.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('@/views/About/index.vue'),
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
