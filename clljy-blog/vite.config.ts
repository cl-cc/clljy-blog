/*
 * @Descripttion:
 * @version:
 * @Author: 程
 * @Date: 2023-09-07 16:38:32
 * @LastEditors: 程
 * @LastEditTime: 2023-09-07 20:25:47
 */
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import AutoImport from 'unplugin-auto-import/vite';
import viteCompression from 'vite-plugin-compression';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({ imports: ['vue', 'vue-router'], dts: 'src/auto-imports.d.ts' }),
    viteCompression({
      verbose: true,
      disable: false,
      deleteOriginFile: false,
      threshold: 10240,
      algorithm: 'gzip',
      ext: '.gz',
    }),
  ],
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
  //网络代理
  server: {
    hmr: true,
    proxy: {
      '/api': {
        target: 'http://192.168.5.42:9501/',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api/, ''),
      },
    },
  },
});
