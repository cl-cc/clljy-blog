<!--
 * @Descripttion: 
 * @version: 
 * @Author: 程
 * @Date: 2023-09-07 19:18:07
 * @LastEditors: 程
 * @LastEditTime: 2023-09-07 19:43:12
-->
<script setup lang="ts">
import { ref } from 'vue';
const list = ref(3);
</script>
<template>
  <div class="left flex-1">
    <el-card class="mb-5" v-for="v in list" :key="v">
      <div class="box-card flex items-center">
        <img class="pic" src="http://controltest.lkggcc.com/uploads/20230907/9411image64f9b7415a94b.png" alt="" />
        <div class="info">
          <div>Java教程</div>
          <div>这是专门针对小白的零基础Java教程，使用最新的Java 20！可以在线免费学习！零基础迈向Java架构师！</div>
        </div>
      </div>
    </el-card>
  </div>
</template>
<style lang="less" scoped>
.left {
  box-sizing: border-box;
  padding: 20px;
  .box-card {
    height: 120px;
    cursor: pointer;
    .pic {
      width: 150px;
      height: 100px;
      margin-right: 20px;
    }
    .info {
      div:first-child {
        font-size: 20px;
        font-weight: bold;
        color: #409eff;
        margin-bottom: 15px;
      }
    }
  }
}
</style>
