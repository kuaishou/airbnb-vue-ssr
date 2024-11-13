<script setup lang="ts">
import { FormInstance } from 'element-plus';
import { reactive, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
const router = useRouter()
const route = useRoute()
console.log('mi9ne')
const activeName = ref('login')
const handleClick = (name: string) => {
    console.log(name)
    // activeName.value=name
}

const ruleFormRef = ref<FormInstance>()
const ruleForm = reactive({
    mobile: '',
    password: '',

})

const rules = reactive({
    mobile: [{ required: true, min: 11, max: 11, message: '请输入正确的手机号', trigger: 'blur' },],
    password: [{ required: true, message: '请输入正确的密码', trigger: 'blur' },],
})

const submitForm = async (formEl: any) => {
    if (!formEl) return
    await formEl.validate((valid: any, fields: any) => {
        if (valid) {
            console.log('submit!')
            router.push({
                name:'home'
            })
        } else {
            console.log('error submit!', fields)
        }
    })
}
</script>

<template>
    <div class="login-page">
        <div class="left-part">

        </div>


        <div class="right-part">
            <div class="login-panel">
                <el-tabs v-model="activeName" @tab-click="handleClick">
                    <el-tab-pane :label="t('login.logintab')" name="login"></el-tab-pane>
                    <el-tab-pane :label="t('login.loginSign')" name="sign"></el-tab-pane>
                </el-tabs>
            </div>
            <el-form ref="ruleFormRef" style="max-width: 600px" :model="ruleForm" :rules="rules" label-width="auto"
                class="demo-ruleForm" status-icon>
                <el-form-item label="手机号" prop="mobile">
                    <el-input placeholder="请输入" v-model="ruleForm.mobile" />
                </el-form-item>
                <el-form-item label="密码" prop="password">
                    <el-input placeholder="请输入" v-model="ruleForm.password" />
                </el-form-item>
                <el-form-item>
                    <!-- <el-button type="primary" @click="submitForm(ruleFormRef)">
                        Create
                    </el-button> -->
                    <el-button @click="submitForm(ruleFormRef)">登录</el-button>
                </el-form-item>
            </el-form>

        </div>
    </div>
</template>

<style scoped lang="scss">
.login-page {
    display: flex;
    height: 100vh;

    .left-part {
        flex: 30;
        height: 100%;
        background-image: url('../../assets/images/login.jpeg');
        background-size: cover;
    }

    .right-part {
        flex: 20;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        .login-panel {
            width: 300px;

            .el-tabs__item {
                font-size: 14px;
            }
        }
    }
}
</style>
