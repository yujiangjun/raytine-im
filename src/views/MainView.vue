<template>
  <div>
    <Suspense>
      <RouterView></RouterView>
    </Suspense>
    <van-tabbar v-model="active">
      <van-tabbar-item
        replace
        to="session"
        icon="home-o"
        :badge="unReadCount"
        :badge-props="bradgeProps"
        >聊天</van-tabbar-item
      >
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
import { onMounted, reactive, ref, type Ref } from "vue";
import { getUserInfo as getUserInfoFromSession } from "@/util/auth";
import { getUnReadCountTotal } from "@/api/message";
import WSService from "@/ws";
const active: Ref<number> = ref(0);
const my = reactive(getUserInfoFromSession());
const unReadCount = ref(0);
const bradgeProps = {
  max: 99,
};
onMounted(() => {
  WSService.Instance.connect(my.id);
  setInterval(() => {
    getUnReadTotal();
  }, 3000);
});
async function getUnReadTotal() {
  const resp = await getUnReadCountTotal({
    userId: my.id,
  });
  unReadCount.value = resp.data;
}
</script>
