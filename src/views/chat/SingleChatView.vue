<template>
  <van-row>
    <van-col :span="24">
      <van-nav-bar
        :title="friend.userName"
        left-text="返回"
        left-arrow
        @click-left="onBack"
      />
    </van-col>
  </van-row>
  <van-row>
    <van-col :span="24" class="send_view">
      <MessageItem
        v-for="item in demoMes.msgs"
        :key="item.msgId"
        :avator="item.targetAvatar"
        :dict="item.dict"
        :mes-content="item.content"
        :send-time="item.sendTime"
        :username="item.targetName"
        class="mt_10"
      ></MessageItem>
    </van-col>
  </van-row>
  <van-row class="mt_20">
    <van-col :span="24">
      <van-form @submit="onSubmit">
        <van-field
          v-model="sendContent"
          name="消息"
          placeholder="请输入要发送的内容"
          :rules="[{ required: true, message: '请输入要发送的内容' }]"
        />
        <div style="margin: 16px">
          <van-button round block type="primary" native-type="submit">
            发送
          </van-button>
        </div>
      </van-form>
    </van-col>
  </van-row>
</template>

<script setup lang="ts">
import router from "@/router";
import { onMounted, reactive, ref, type Ref } from "vue";
import { useRoute } from "vue-router";
import type { Account } from "@/types/friends";
import MessageItem from "@/components/MessageItem.vue";
import WSService from "@/ws";
import { getUserInfo } from "@/api/account";
import storeUser from "@/stores/user";
import type { MessageData } from "@/types/message";
import dayjs from 'dayjs';
const my = reactive(storeUser());
const targentId = ref(useRoute().query.targetId);
const demoMes = reactive({
  msgs: [] as MessageData[],
});
const sendContent: Ref<string> = ref("");
let friend: Account = reactive({} as Account);
onMounted(async () => {
  getUser();
  WSService.Instance.connect(my.id);
});
async function getUser() {
  let resp = await getUserInfo({
    id: targentId.value,
  });
  // friend = reactive(resp.data);
  friend.id = resp.data.id;
  friend.userName = resp.data.userName;
  friend.userCode = resp.data.userCode;
  friend.avatar = resp.data.avatar;
  console.log("friend:", friend);
}
// 发送消息
function onSubmit() {
  console.log("发闪送消息");
  let message: MessageData = {
    cat: 1,
    type: 1,
    sendTime: dayjs().format("YYYY-MM-DD HH:mm:ss"),
    messageType: 1,
    dict: 1,
    content: sendContent.value,
    sendUserId: "" + my.id,
    targetId: "" + targentId.value,
    targetName: friend.userName,
    targetAvatar: friend.avatar,
  };
  WSService.Instance.send(message);
  WSService.Instance.ws.onmessage = (mes) => {
    console.log(mes.data);
    demoMes.msgs.push(JSON.parse(mes.data));
    console.log(demoMes);
  };
  sendContent.value = "";
}
const onBack = function () {
  router.back();
};
</script>

<style scoped>
.send_view {
  height: 600px;
  overflow-y: auto;
}
</style>
