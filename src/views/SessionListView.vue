<script setup lang="ts">
import { onMounted, reactive } from "vue";
import SessionItem from "../components/SessionItem.vue";
import { getMySessionList, getUnReadCountList } from "@/api/message/index";
import { getUserInfo as getUserInfoFromSession } from "@/util/auth";
import router from "@/router";
import type { Session } from "@/types/session";
import { getUserInfo } from "@/util/auth";
const my = reactive(getUserInfoFromSession());
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
  sessions.sessionList = resp.data;
  setInterval(() => {
    getUnRead();
  }, 3000);
});
async function getUnRead() {
  let resp = await getUnReadCountList({
    userId: my.id,
  });
  sessions.sessionList.forEach((item) => {
    for (let i = 0; i < resp.data.length; i++) {
      if (
        "" + item.sendId == resp.data[i].sendUserId ||
        "" + item.targetId == resp.data[i].sendUserId
      ) {
        console.log('1233')
        item.unReadCount = resp.data[i].count;
        return;
      }
    }
  });
}
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
      :unReadCount="item.unReadCount"
      class="mt_10"
      @click="goChat(item)"
    ></SessionItem>
  </div>
</template>
