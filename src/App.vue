<script setup lang="ts">
import headerCommon from '@/components/layout/headerCommon.vue'
import footerCommon from '@/components/layout/footerCommon.vue'

import { ElConfigProvider } from 'element-plus'
// import zhCn from 'element-plus/es/locale/lang/zh-cn'
// import en from 'element-plus/es/locale/lang/en'
import { onMounted, ref } from 'vue';
import { useI18n } from 'vue-i18n';
// import { fetchLanguageApi, saveLanguageApi } from './api/layout';
import { useRoute, useRouter } from 'vue-router'
const router = useRouter()
const route = useRoute()
console.log('ssssssssssssss',route)
const { locale } = useI18n()


const language = ref()

onMounted(async()=>{
//  const res= await  fetchLanguageApi()
//  language.value = res
//  locale.value = lang.name
})
const changeLanguage = (lang: any) => {
  console.log('ssssssssssssss', lang)
  language.value = lang
  locale.value = lang.name

}
</script>

<template>
  <el-config-provider :locale="language">
    <!-- 头部 -->
    <headerCommon v-show="route.fullPath.indexOf('login')===-1" @changeLang="changeLanguage"/>
    <!-- 主体 -->
    <router-view></router-view>
    <!-- <button @click="changeLanguage(zhCn)">中文</button>
    <button @click="changeLanguage(en)">English</button>

    <button @click="() => router.push({ path: '/home' })">首页</button>
    <button @click="() => router.push({ path: '/mine' })">我的</button>

    <router-link to="home">首页link</router-link>
    <router-link to="mine">我的link</router-link> -->
    <footerCommon v-show="route.fullPath.indexOf('login')===-1"/>
  </el-config-provider>

</template>

<style scoped lang="scss">
// .logo {
//   height: 6em;
//   padding: 1.5em;
//   will-change: filter;
//   transition: filter 300ms;
// }

// .logo:hover {
//   filter: drop-shadow(0 0 2em #646cffaa);
// }

// .logo.vue:hover {
//   filter: drop-shadow(0 0 2em #42b883aa);
// }
</style>
