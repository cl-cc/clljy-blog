/*
 * @Descripttion:
 * @version:
 * @Author: 程
 * @Date: 2023-09-07 16:47:13
 * @LastEditors: 程
 * @LastEditTime: 2023-09-07 20:12:51
 */
import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/common/Middle.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/tutorial',
    name: 'tutorial',
    component: () => import('@/views/tutorial/index.vue'),
  },
  // redirect
  {
    path: '/:pathMatch(.*)*',
    redirect: '/',
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
