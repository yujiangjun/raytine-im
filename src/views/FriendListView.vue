<script setup lang="ts">
import { reactive } from "vue";
import { getFriends } from "../util/friend";
import FriendItem from "../components/FriendItem.vue";
const firends = reactive(await getFriends());
console.log(firends);
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
    ></FriendItem>
  </div>
</template>
