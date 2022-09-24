<template>
    <div>
        <div style="display: flex;">
            <van-image :src="avator"/>
            <label>{{username}}：</label>
            <label>{{sendTime}}</label>
        </div>
        <div>
            {{mesContent}}
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