<script setup lang="ts">
import { ref } from "vue";
import loginPng from "@/assets/OIP-C.jpg";
import { Toast } from "vant";
import router from "@/router";
import { Login } from "@/api/login";
import { setToken } from "@/util/auth";
const username = ref("");
const password = ref("");
const onSubmit = async (values: any) => {
  console.log("submit", values);
  Toast("登录成功");
  let token = await Login({
    userCode: username.value,
    password: password.value,
  });
  setToken(token.data);
  console.log(token);
  router.push({
    path: "main/session",
  });
};
</script>

<template>
  <van-image :src="loginPng" position="top" class="van-cell-group--inset" />
  <van-form @submit="onSubmit">
    <van-cell-group inset>
      <van-field
        v-model="username"
        name="用户名"
        label="用户名"
        placeholder="用户名"
        :rules="[{ required: true, message: '请填写用户名' }]"
      />
      <van-field
        v-model="password"
        type="password"
        name="密码"
        label="密码"
        placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
    </van-cell-group>
    <div style="margin: 16px">
      <van-button round block type="primary" native-type="submit">
        登录
      </van-button>
    </div>
  </van-form>
</template>

<style scoped></style>
