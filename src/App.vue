<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
import {useRouter} from 'vue-router'
const router=useRouter()


</script>

<template>

<router-view></router-view>
  <!-- <HelloWorld msg="Vite + Vue" /> -->
<button @click="()=>router.push({path:'/home'})">首页</button>
<button @click="()=>router.push({path:'/mine'})">我的</button>

<router-link to="home">首页link</router-link>
<router-link to="mine">我的link</router-link>
</template>

<style scoped lang="scss">
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
