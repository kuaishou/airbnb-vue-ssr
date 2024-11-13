<script lang="ts" setup>
import { title } from 'process';
import { reactive, ref } from 'vue'

const footerMenu = reactive([{
    title: '爱彼迎',
    menus: [
        {
            name: '工作机会',
            link: 'https://www.airbnb.cn/'
        }, {
            name: '工作机会',
            link: 'https://www.airbnb.cn/'
        }, {
            name: '工作机会',
            link: 'https://www.airbnb.cn/'
        }, {
            name: '工作机会',
            link: 'https://www.airbnb.cn/'
        }, {
            name: '工作机会',
            link: 'https://www.airbnb.cn/'
        }
    ]
}, {
    title: '房屋出租',
    menus: [
        {
            name: '工作机会',
            link: 'https://www.airbnb.cn/'
        }, {
            name: '工作机会',
            link: 'https://www.airbnb.cn/'
        }, {
            name: '工作机会',
            link: 'https://www.airbnb.cn/'
        }, {
            name: '工作机会',
            link: 'https://www.airbnb.cn/'
        }, {
            name: '工作机会',
            link: 'https://www.airbnb.cn/'
        }
    ]
}, {
    title: '房屋售卖',
    menus: [
        {
            name: '工作机会',
            link: 'https://www.airbnb.cn/'
        }, {
            name: '工作机会',
            link: 'https://www.airbnb.cn/'
        }, {
            name: '工作机会',
            link: 'https://www.airbnb.cn/'
        }, {
            name: '工作机会',
            link: 'https://www.airbnb.cn/'
        }, {
            name: '工作机会',
            link: 'https://www.airbnb.cn/'
        }
    ]
}, {
    title: '房屋挑选',
    menus: [
        {
            name: '工作机会',
            link: 'https://www.airbnb.cn/'
        }, {
            name: '工作机会',
            link: 'https://www.airbnb.cn/'
        }, {
            name: '工作机会',
            link: 'https://www.airbnb.cn/'
        }, {
            name: '工作机会',
            link: 'https://www.airbnb.cn/'
        }, {
            name: '工作机会',
            link: 'https://www.airbnb.cn/'
        }
    ]
}])

</script>
<template>
    <div class="footer-common">
        <ul class="jump">
            <li class="li" v-for="i in footerMenu" :key="i.title">
                <h4>标题</h4>
                <a v-for=" item in i.menus" :key="item.name" :href="item.link">{{ item.name }}</a>
            </li>
        </ul>
        <div class="copy-right">
            @ 2022 Harry, Inc . All right reseved
        </div>
    </div>

</template>
<style lang="scss" scoped>
// @import url("@/assets/scss/layout/index.scss");
// @import url('../../assets/scss/layout/index.scss');

.footer-common {

    .jump {
        display: flex;
        justify-content: space-between;

        .li {
            display: flex;
            flex-direction: column;

            // justify-content: space-between;
            a {
                font-size: 14px;
                color: #999;
                text-decoration: none;
                margin-bottom: 10px;

                &:hover {
                    text-decoration: underline;
                }
            }
        }
    }


    .copy-right {
        // @include main-wapper;
        margin: 0 auto;
        text-align: center;
        border-top: 1px solid #ccc;
        padding: 30px 0;
        color: #666;
    }

}
</style>
