<script setup lang="ts">
import { onMounted, reactive } from "vue";
import SessionItem from "../components/SessionItem.vue";
// import { fun } from "../data/chat";
import { getMySessionList } from "@/api/message/index";
import router from "@/router";
import type { Session } from "@/types/session";
// import storeUser from "@/stores/user";
import { getUserInfo } from "@/util/auth";
let sessions = reactive({
  sessionList: [] as Session[],
});
const goChat = function (item: any) {
  router.push({
    path: "/singleChat",
    query: {
      username: item.username,
    },
  });
};
onMounted(async () => {
  let resp = await getMySessionList({
    myId: getUserInfo().id,
  });
  console.log(resp.data);
  sessions.sessionList = resp.data;
});
</script>
<template>
  <div>
    <SessionItem
      v-for="item in sessions.sessionList"
      :key="item.id"
      :avator="item.targetAvatar"
      :username="item.targetName"
      :mes-content="item.msgContent"
      :send-time="item.sessionTime"
      class="mt_10"
      @click="goChat(item)"
    ></SessionItem>
  </div>
</template>
