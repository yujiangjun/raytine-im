<template>
    <div class="display_flex">
        <van-image :radius="5" :src="avator" class="avator_small"/>
        <div>
            <div class="ml_20">
                <label>{{username}}：</label>
                <label>{{mesContent}}</label>
            </div>
            <div class="ml_20">
            时间： {{sendTime}}
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
    username: string
    mesContent: string
    sendTime: string
    avator: string
}>()
</script>