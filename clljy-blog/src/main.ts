/*
 * @Descripttion:
 * @version:
 * @Author: 程
 * @Date: 2023-09-07 16:38:32
 * @LastEditors: 程
 * @LastEditTime: 2023-09-07 17:31:46
 */
import { createApp } from 'vue';
import App from './App.vue';
import './utils/reset.css';
import './index.css';
import 'tailwindcss/tailwind.css';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
//注册路由
import router from './router/index';

createApp(App).use(router).use(ElementPlus).mount('#app');
