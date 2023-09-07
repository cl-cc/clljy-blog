<!--
 * @Descripttion: 
 * @version: 
 * @Author: 程
 * @Date: 2023-09-07 16:48:25
 * @LastEditors: 程
 * @LastEditTime: 2023-09-07 19:58:06
-->
<script setup lang="ts">
import Header from '@/views/common/Header.vue';
import Footer from '@/views/common/Footer.vue';
</script>
<template>
  <div class="flex flex-col h-full">
    <Header />
    <RouterView />
    <Footer />
  </div>
</template>
<style lang="less" scoped></style>
