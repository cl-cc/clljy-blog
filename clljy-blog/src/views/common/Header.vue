<!--
 * @Descripttion: 
 * @version: 
 * @Author: 程
 * @Date: 2023-09-07 17:20:28
 * @LastEditors: 程
 * @LastEditTime: 2023-09-07 20:12:09
-->
<script setup lang="ts">
import { Search } from '@element-plus/icons-vue';
import { useRouter } from 'vue-router';
const router = useRouter();
const navList = ref([
  { id: 1, val: '文章', icon: '' },
  { id: 2, val: 'Web教程', icon: '' },
  { id: 3, val: 'php教程', icon: '' },
  { id: 4, val: '手写Promise', icon: '' },
  { id: 5, val: 'Threejs', icon: '' },
  { id: 6, val: 'SQL教程', icon: '' },
  { id: 7, val: '区块链教程', icon: '' },
]);
function switchNav(e: any) {
  if (e.id === 1) {
    router.push('/');
    return;
  }
  router.push('/tutorial');
}
function goHome() {
  router.push('/');
}
</script>
<template>
  <div class="header flex items-center">
    <div class="logo" @click="goHome">clljy的官方网站</div>
    <div class="nav flex items-center flex-1">
      <div v-for="v in navList" @click="switchNav(v)">{{ v.val }}</div>
    </div>
    <div class="search">
      <el-input placeholder="Search" :suffix-icon="Search"></el-input>
    </div>
  </div>
</template>
<style lang="less" scoped>
.header {
  height: 60px;
  background: #409eff;
  color: #fff;
  .logo {
    margin: 0 30px;
    font-size: 20px;
    font-weight: bold;
    cursor: pointer;
  }
  .search {
    margin-right: 20px;
  }
  .nav {
    height: 100%;
    margin-left: 20px;
    div {
      padding: 0 20px;
      box-sizing: border-box;
      height: 100%;
      cursor: pointer;
      line-height: 60px;
      text-align: center;
      font-size: 18px;
    }
    div:hover {
      background: rgba(0, 0, 0, 0.2);
    }
  }
}
</style>
