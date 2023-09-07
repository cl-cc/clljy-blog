/*
 * @Descripttion:
 * @version:
 * @Author: 程
 * @Date: 2023-09-07 16:38:32
 * @LastEditors: 程
 * @LastEditTime: 2023-09-07 20:46:47
 */
import { createApp } from 'vue';
import App from './App.vue';
//引入全局样式
import './utils/reset.css';
import './index.css';
//引入tailwindcss
import 'tailwindcss/tailwind.css';
//引入element-plus
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
//注册路由
import router from './router/index';
console.log(process.env.NODE_ENV);

createApp(App).use(router).use(ElementPlus).mount('#app');
