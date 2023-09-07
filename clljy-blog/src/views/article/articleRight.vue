<!--
 * @Descripttion: 
 * @version: 
 * @Author: 程
 * @Date: 2023-09-07 19:18:07
 * @LastEditors: 程
 * @LastEditTime: 2023-09-07 19:43:20
-->
<script setup lang="ts">
const list = ref(3);
</script>
<template>
  <div class="right">
    <div class="title">最新帖子</div>
    <div class="post">
      <div class="item" v-for="v in list" :key="v">
        <img src="http://controltest.lkggcc.com/uploads/20230907/9411image64f9b7415a94b.png" alt="" />
        <div>{{ v }}</div>
      </div>
    </div>
  </div>
</template>
<style lang="less" scoped>
.right {
  width: 400px;
  height: 100%;
  border-left: 1px solid #0a0a0a;
  box-sizing: border-box;
  padding: 0 10px;
  .title {
    font-size: 24px;
  }
  .post {
    .item {
      margin-top: 20px;
      display: flex;
      align-items: center;
      border-bottom: 1px solid #ccc;
      margin-bottom: 10px;
      img {
        width: 60px;
        height: 60px;
        margin-right: 20px;
        border-radius: 50%;
      }
      div {
        font-size: 18px;
        cursor: pointer;
      }
    }
  }
}
</style>
