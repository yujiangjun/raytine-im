<template>
    <van-row>
        <van-col :span="10">
            <van-image :src="loginPng" :radius="5"></van-image>
        </van-col>
        <van-col :span="10" :offset="2">
            <div class="user_title">余江俊</div>
        </van-col>
    </van-row>
    <van-divider />
    <van-row class="mt_20">
        <van-col :span="24" style="display: flex;">
            <van-icon name="orders-o" size="2rem"/>
            <div class="label_content ml_20">收藏</div>
        </van-col>
    </van-row>
    <van-divider />
    <van-row class="mt_20">
        <van-col :span="24" style="display: flex;">
            <van-icon name="setting-o" size="2rem"/>
            <div class="label_content ml_20">个人设置</div>
        </van-col>
    </van-row>
    <van-divider />
    <van-row class="mt_20">
        <van-col :span="24" style="display: flex;">
            <van-icon name="close" size="2rem"/>
            <div class="label_content ml_20">退出登录</div>
        </van-col>
    </van-row>
    <van-divider />
</template>

<script setup lang="ts">
import loginPng from '@/assets/OIP-C.jpg'

</script>

<style scoped>
    .user_title{
        font-weight: 700;
        font-size: 20px;
        line-height: 110px;
    }
    .label_content{
        font-size: 16px;
        line-height: 30px;
    }
</style>