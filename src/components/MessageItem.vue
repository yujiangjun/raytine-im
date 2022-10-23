<template>
  <div class="display_flex">
    <van-image :radius="5" :src="avator" class="avator_small" />
    <div>
      <div class="ml_20">
        <label
          >{{ username }}:<van-icon v-if="dict == 1" name="back-top" /><van-icon
            name="down"
            v-else
        /></label>
        <div v-if="dict === 0" class="message_conent_receive">
          {{ mesContent }}
        </div>
        <div v-else class="message_conent_send">{{ mesContent }}</div>
      </div>
      <div class="ml_20">时间： {{ sendTime }}</div>
    </div>
  </div>
</template>
<script setup lang="ts">
defineProps<{
  username: string;
  mesContent: string;
  sendTime: string;
  avator: string;
  dict: number;
}>();
</script>
<style scoped>
.message_conent_send {
  background-color: rgb(160, 144, 90);
  padding: 10px;
  border-radius: 5px;
}
.message_conent_receive {
  background-color: rgb(31, 27, 17);
  padding: 10px;
  border-radius: 5px;
}
</style>
