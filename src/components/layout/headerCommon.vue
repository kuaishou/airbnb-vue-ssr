<script lang="ts" setup>
import { ref } from 'vue'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import en from 'element-plus/es/locale/lang/en'
import { fetchLanguageApi, saveLanguageApi } from '@/api/layout';
const emits = defineEmits<{
    (e: 'changeLang', language: any): void,
}>()
const activeIndex = ref('oders')



const getLanguage = () => {
    fetchLanguageApi().then(res => {
        const { success, result } = res
        if (success) {
            if (result.name === 'zh') {
                emits('changeLang', zhCn)
            } else if (result.name === 'en') {
                emits('changeLang', en)
            }
        }
        console.log('save success', res.success)
    })
}

getLanguage()


//保存语言
const saveLanguage = (lang: any) => {
    saveLanguageApi(lang).then(res => {
        console.log('save success', res.success)
    })
}
const handleSelect = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
    if (key === 'zh') {
        emits('changeLang', zhCn)
    } else if (key === 'en') {
        emits('changeLang', en)
    }
    saveLanguage(key)
}


</script>
<template>
    <div class="header-common">

        <el-menu :default-active="activeIndex" class="header-menu" mode="horizontal" :ellipsis="false"
            @select="handleSelect">
            <el-menu-item>
                <img class="logo" src="../../assets/images/layout/logo.svg" alt="logo" srcset="">
            </el-menu-item>
            <el-menu-item index="oders">房屋订单中心</el-menu-item>
            <el-menu-item index="records">历史足迹</el-menu-item>
            <el-sub-menu index="language">
                <template #title>国际化切换</template>
                <el-menu-item index="zh">中文</el-menu-item>
                <el-menu-item index="en">English</el-menu-item>
            </el-sub-menu>
            <!-- <el-menu-item index="3" disabled>Info</el-menu-item> -->
            <el-menu-item index="avater">
                <img class="avater" src="../../assets/images/layout/avater.svg" alt="个人中心" srcset="">
            </el-menu-item>
        </el-menu>
    </div>

</template>
<style lang="scss" scoped>
// @import url("@/assets/scss/layout/index.scss");
// @import url('../../assets/scss/layout/index.scss');
.header-common {
    // display: flex;
    // justify-content: space-between;
    height: 80px;
    width: 100%;

    .header-menu {
        height: 80px;
    }

    .logo {
        width: 162px;
        height: auto;

    }

    .avater {
        width: 60px;
        height: 60px;
    }

}

.el-menu--horizontal>.el-menu-item:nth-child(1) {
    margin-right: auto;
}

.el-menu-item {
    font-size: 16px;
}
</style>
