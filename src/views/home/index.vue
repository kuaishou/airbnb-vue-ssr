<script setup lang="ts">
import { getCurrentInstance, h, ref } from 'vue';
import { getRoomList,fetchElephant } from '@/api/index'

import { useI18n } from 'vue-i18n'

// import IndexedDB from '@/utils/indexedDB'

// //模拟数据，indexedDB数据库
// const airbnbDB = new IndexedDB('airbnb')
// airbnbDB.openStore('elephant', 'id', ['nose', 'ear'])

// //新增
// const addDb = () => {
//   airbnbDB.updateItem('elephant', {
//     nose: '33',
//     ear: 'big'
//   })
// }

// //修改数据库数据
// const editDb = () => {
//   airbnbDB.updateItem('elephant', {
//     id:1,
//     nose: '88',
//     ear: 'bigest'
//   })
// }
// //删除数据库数据
// const deleteDb = () => {
//   airbnbDB.deleteItem('elephant',1)
// }
// //查询所有数据库数据
// const getDb = () => {
//   airbnbDB.getList('elephant')
//   console.log(airbnbDB.getList('elephant'))
// }
// //查询所有数据库数据
// const getItem = async(key:number|string) => {
//  const res= await airbnbDB.getItem('elephant',key)
//   console.log('ddddddd',res)
// }


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


const fetchElephantApi = () => {
  fetchElephant()
}
fetchElephantApi()

</script>

<template>
  <div class="home">
    <div class="box">{{ t('message.home') }} </div>
    <el-button :plain="true" @click="openVn">Show message</el-button>
    <!-- <el-button @click="addDb">add DB</el-button>
    <el-button @click="editDb">edit DB</el-button>
    <el-button @click="deleteDb">delete DB</el-button>
    <el-button @click="getDb">getDb DB</el-button>
    <el-button @click="getItem(2)">getItem DB</el-button> -->
    
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
