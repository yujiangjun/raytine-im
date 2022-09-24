<template>
  <van-row align="center" style="height: 500px;">
    <van-col :span="24">
        <van-form @submit="onSubmit">
            <van-cell-group inset>
            <van-field
                v-model="keyword"
                name="keyword"
                placeholder="请输入你要搜索的内容"
                :rules="[{ required: true, message: '请输入你要搜索的内容' }]"
            />
            </van-cell-group>
            <div style="margin-top: 100px">
            <van-button round block type="primary" native-type="submit">
                搜索
            </van-button>
            </div>
        </van-form>
    </van-col>
  </van-row>
</template>

<script setup lang="ts">
import type { ColProps, RowProps, RowAlign, RowJustify } from 'vant';
import { ref, type Ref } from "vue";

const keyword: Ref<string> = ref("");

const onSubmit = function (values: any) {
  console.log(values);
};
</script>
