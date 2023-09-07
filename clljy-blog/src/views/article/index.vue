<!--
 * @Descripttion: 
 * @version: 
 * @Author: 程
 * @Date: 2023-09-07 19:15:25
 * @LastEditors: 程
 * @LastEditTime: 2023-09-07 19:22:12
-->
<script setup lang="ts">
import articleRightVue from '@/views/article/articleRight.vue';
import articleLeftVue from '@/views/article/articleLeft.vue';
</script>
<template>
  <div class="article flex">
    <articleLeftVue />
    <articleRightVue />
  </div>
</template>
<style lang="less" scoped>
.article {
  width: 100%;
  height: 95%;
  padding: 0 20px;
  box-sizing: border-box;
  margin-top: 20px;
}
</style>
