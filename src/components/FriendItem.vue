<template>
  <div class="display_flex">
    <van-image :radius="5" :src="avator" class="avator_small" />
    <div>
      <div class="ml_20">
        <label>{{ userName }}</label>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
  userId: number;
  userName: string;
  avator: string;
}>();
</script>
