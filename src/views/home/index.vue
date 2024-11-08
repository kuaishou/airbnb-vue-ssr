<script setup lang="ts">
import { getCurrentInstance, h, ref } from 'vue';
import { getRoomList } from '@/api/index'

import { useI18n } from 'vue-i18n'

import IndexedDB from '@/utils/indexedDB'

//模拟数据，indexedDB数据库
const airbnbDB = new IndexedDB('airbnb')
airbnbDB.openStore('room', 'id')
const { t } = useI18n()

console.log(useI18n)
console.log('home')
// import { ElMessage } from 'element-plus'
const { proxy }: any = getCurrentInstance()
const openVn = () => {
  proxy.$message({
    message: h('p', { style: 'line-height: 1; font-size: 14px' }, [
      h('span', null, 'Message can be '),
      h('i', { style: 'color: teal' }, 'VNode'),
    ]),
  })
}
const size = ref<'default' | 'large' | 'small'>('default')

const value1 = ref('')
const getRoomListApi = () => {
  getRoomList()
}
getRoomListApi()
</script>

<template>
  <div class="home">
    <div class="box">{{ t('message.home') }} </div>
    <el-button :plain="true" @click="openVn">Show message</el-button>
    <el-button>Default</el-button>
    <el-button type="primary">Primary</el-button>
    <el-button type="success">Success</el-button>
    <el-button type="info">Info</el-button>
    <el-button type="warning">Warning</el-button>
    <el-button type="danger">Danger</el-button>

    <el-date-picker v-model="value1" type="date" placeholder="Pick a day" :size="size" />
  </div>
</template>

<style lang="scss">
@import url("@/assets/scss/variable.scss");

.home {
  background-color: yellow;

  .box {
    background-color: red;
  }
}
</style>
