<template>
  <div class="display_flex">
    <van-badge :content="unReadCount">
      <van-image :radius="5" :src="avator" class="avator_small" />
    </van-badge>
    <div>
      <div class="ml_20">
        <label style="font-weight: 700">{{ username }}:</label>
        <label style="font-size: 12px; margin-left: 10px"
          ><i>{{ mesContent }}</i></label
        >
      </div>
      <div class="ml_20 font_small">时间： {{ sendTime }}</div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
  username: string;
  mesContent: string;
  sendTime: string;
  avator: string;
  unReadCount?: number;
}>();
</script>
