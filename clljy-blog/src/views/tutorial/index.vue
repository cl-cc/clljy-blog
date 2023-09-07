<!--
 * @Descripttion: 
 * @version: 
 * @Author: 程
 * @Date: 2023-09-07 19:48:29
 * @LastEditors: 程
 * @LastEditTime: 2023-09-07 20:05:54
-->
<script setup lang="ts">
import Nav from './nav.vue';
import Content from './content.vue';
</script>
<template>
  <div class="tutorial flex-1 flex">
    <Nav />
    <Content />
  </div>
</template>
<style lang="less" scoped>
.tutorial {
  width: 100%;
  height: 100%;
  background-color: #fff;
  margin-top: 20px;
}
</style>
