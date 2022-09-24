<script setup lang="ts">
import { reactive } from "vue";
import { getFriends } from "../util/friend";
import FriendItem from "../components/FriendItem.vue";
const firends = reactive(getFriends());
</script>
<template>
  <div>
    <FriendItem
      v-for="item in firends"
      :avator="item.avator"
      :user-name="item.userName"
      :user-id="item.userId"
      :status="item.status"
      class="mt_10"
    ></FriendItem>
  </div>
</template>
