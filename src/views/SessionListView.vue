<script setup lang="ts">
import { ref } from 'vue';
import SessionItem from '../components/SessionItem.vue';
const avator = ref('@/assets/OIP-C.jpg')
const username = ref('yujiangjuan')
const mesContent = ref('hello')
const sendTime = ref('2022-09-12 00:00:00')
</script>
<template>
    <div>
        <SessionItem :avator="avator" :username="username" :mes-content="mesContent" sendTime="sendTime"></SessionItem>
    </div>
</template>