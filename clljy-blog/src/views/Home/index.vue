<!--
 * @Descripttion: 
 * @version: 
 * @Author: 程
 * @Date: 2023-09-07 16:48:25
 * @LastEditors: 程
 * @LastEditTime: 2023-09-07 17:29:42
-->
<template>
  <div class="flex flex-col h-full">
    <Header />
    <Middle />
    <Footer />
  </div>
</template>
<script setup lang="ts">
import Header from '@/views/common/Header.vue';
import Middle from '@/views/common/Middle.vue';
import Footer from '@/views/common/Footer.vue';
</script>
<style lang="less" scoped></style>
