<template>
  <van-row>
    <van-col :span="24">
      <van-nav-bar
        :title="friend"
        left-text="返回"
        left-arrow
        @click-left="onBack"
      />
    </van-col>
  </van-row>
  <van-row>
    <van-col :span="24" class="send_view">
      <MessageItem
        v-for="item in demoMes"
        :key="item.sendId"
        :avator="item.reciveAvator"
        :dict="item.mesDict"
        :mes-content="item.content"
        :send-time="item.sendTime"
        :username="item.sendName"
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
import { onMounted, ref, type Ref } from "vue";
import { useRoute } from "vue-router";
import { getDemoMes } from "@/util/cht";
import MessageItem from "@/components/MessageItem.vue";
const friend: Ref<string | undefined> = ref("张三");
const demoMes = getDemoMes();
const sendContent: Ref<string> = ref("");
onMounted(() => {
  console.log("mouted");
  console.log(useRoute().query.username);
  friend.value = useRoute().query.username?.toString();
  console.log(friend.value);
  friend.value = "李四";
  console.log(friend.value);
});

// 发送消息
function onSubmit() {
  console.log("发闪送消息");
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
