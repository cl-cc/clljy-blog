/*
 * @Descripttion:
 * @version:
 * @Author: 程
 * @Date: 2023-09-07 16:38:32
 * @LastEditors: 程
 * @LastEditTime: 2023-09-07 17:16:54
 */
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import AutoImport from 'unplugin-auto-import/vite';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), AutoImport({ imports: ['vue', 'vue-router'], dts: 'src/auto-imports.d.ts' })],
  resolve: {
    //设置路径别名
    alias: {
      '@': '/src',
      components: '/src/components',
      views: '/src/views',
      assets: '/src/assets',
      utils: '/src/utils',
    },
  },
});
