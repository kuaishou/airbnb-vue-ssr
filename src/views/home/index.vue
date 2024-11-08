<script setup lang="ts">
import { getCurrentInstance, h } from 'vue';

console.log('home')
// import { ElMessage } from 'element-plus'
const {proxy}:any=getCurrentInstance()
const openVn = () => {
    proxy.$message({
    message: h('p', { style: 'line-height: 1; font-size: 14px' }, [
      h('span', null, 'Message can be '),
      h('i', { style: 'color: teal' }, 'VNode'),
    ]),
  })
}
</script>

<template>
<div class="home">
  <div class="box">xinghaod </div>
  <div class="el-bb">ddddddddddddd</div>
    <el-button :plain="true" @click="openVn">Show message</el-button>
    <el-button>Default</el-button>
    <el-button type="primary">Primary</el-button>
    <el-button type="success">Success</el-button>
    <el-button type="info">Info</el-button>
    <el-button type="warning">Warning</el-button>
    <el-button type="danger">Danger</el-button>
</div>
</template>

<style lang="scss">
@import url("@/assets/scss/variable.scss");
.home{
  background-color: yellow;
  .box{
    background-color: red;
  }
}

</style>
