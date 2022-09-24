<script setup lang="ts">
import { reactive, ref } from 'vue';
import SessionItem from '../components/SessionItem.vue';
import {fun} from '../data/chat'
const sessions = reactive(fun())
</script>
<template>
    <div>
        <SessionItem v-for="item in sessions" :avator="item.avator" :username="item.username" :mes-content="item.mesContent" :send-time="item.sendTime" class="mt_10"></SessionItem>
    </div>
</template>