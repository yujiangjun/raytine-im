<template>
  <div>
    <RouterView></RouterView>
    <van-tabbar v-model="active">
      <van-tabbar-item replace to="session" icon="home-o">聊天</van-tabbar-item>
      <van-tabbar-item replace to="friends" icon="friends-o"
        >好友</van-tabbar-item
      >
      <van-tabbar-item replace to="search" icon="search">搜索</van-tabbar-item>
      <van-tabbar-item replace to="setting" icon="setting-o"
        >设置</van-tabbar-item
      >
    </van-tabbar>
  </div>
</template>

<script setup lang="ts">
import { RouterView } from "vue-router";
import { ref, type Ref } from "vue";
const active: Ref<number> = ref(0);
</script>
