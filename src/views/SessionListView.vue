<script setup lang="ts">
import { reactive } from "vue";
import SessionItem from "../components/SessionItem.vue";
import { fun } from "../data/chat";
import router from "@/router";
const sessions = reactive(fun());
const goChat = function (item: any) {
  router.push({
    path: "/singleChat",
    query: {
      username: item.username,
    },
  });
};
</script>
<template>
  <div>
    <SessionItem
      v-for="item in sessions"
      :key="item.username"
      :avator="item.avator"
      :username="item.username"
      :mes-content="item.mesContent"
      :send-time="item.sendTime"
      class="mt_10"
      @click="goChat(item)"
    ></SessionItem>
  </div>
</template>
