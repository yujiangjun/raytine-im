<script setup lang="ts">
import { reactive } from "vue";
import { getFriends } from "../util/friend";
import FriendItem from "../components/FriendItem.vue";
import type { Account } from "@/types/friends";
const firends = reactive(await getFriends());
console.log(firends);
const goChat = function (item: Account) {
  console.log(item.id);
};
</script>
<template>
  <div>
    <FriendItem
      v-for="item in firends"
      :key="item.id"
      :avator="item.avatar"
      :user-name="item.userName"
      :user-id="item.id"
      class="mt_10"
      @click="goChat(item)"
    ></FriendItem>
  </div>
</template>
