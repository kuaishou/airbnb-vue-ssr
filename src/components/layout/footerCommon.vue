<script lang="ts" setup>

import { reactive, ref } from 'vue'
const footerMenu = reactive([
  {
    title: "airbnb",
    menus: [
      {
        name: "careers",
        link: "https://www.airbnb.cn/careers",
      },
      {
        name: "news",
        link: "https://www.airbnb.cn/press/news",
      },
      {
        name: "topic",
        link: "https://www.airbnb.cn/help/topic/1578/法律条款",
      },
      {
        name: "diversity",
        link: "https://www.airbnb.cn/diversity",
      },
      {
        name: "accessibility",
        link: "https://www.airbnb.cn/accessibility",
      },
    ],
  },
  {
    title: "discovery",
    menus: [
      {
        name: "trustAndSafe",
        link: "https://www.airbnb.cn/trust",
      },
      {
        name: "invite",
        link: "https://www.airbnb.cn/invite?r=6",
      },
      {
        name: "evection",
        link: "https://www.airbnb.cn/work?s=footer",
      },
      {
        name: "magzine",
        link: "https://airbnbmag.com",
      },
      {
        name: "airbnborg",
        link: "https://www.airbnb.org/?locale=zh",
      },
    ],
  },
  {
    title: "rent",
    menus: [
      {
        name: "whyRent",
        link: "https://www.airbnb.cn/host/homes?from_footer=1",
      },
      {
        name: "hospitality",
        link: "https://www.airbnb.cn/hospitality",
      },
      {
        name: "responsibleHosting",
        link: "https://www.airbnb.cn/help/responsible-hosting",
      },
      {
        name: "experiences",
        link: "https://www.airbnb.cn/host/experiences?from_footer=1",
      },
      {
        name: "resources",
        link: "https://www.airbnb.cn/resources?traffic_source=footer",
      },
    ],
  },
  {
    title: "service",
    menus: [
      {
        name: "help",
        link: "https://www.airbnb.cn/help?from=footer",
      },
      {
        name: "neighbors",
        link: "https://www.airbnb.cn/neighbors",
      },
    ],
  },
]);
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
