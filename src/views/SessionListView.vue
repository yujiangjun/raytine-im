<script setup lang="ts">
import { reactive, ref } from 'vue';
import SessionItem from '../components/SessionItem.vue';
import {fun} from '../data/chat'
// import loginPng from '@/assets/OIP-C.jpg'
// const avator = ref(loginPng)
// const username = ref('yujiangjuan')
// const mesContent = ref('hello')
// const sendTime = ref('2022-09-12 00:00:00')
const sessions = reactive(fun())

// const chats = fun()
// console.log(chats)
</script>
<template>
    <div>
        <SessionItem v-for="item in sessions" :avator="item.avator" :username="item.username" :mes-content="item.mesContent" :send-time="item.sendTime" class="mt_10"></SessionItem>
    </div>
</template>