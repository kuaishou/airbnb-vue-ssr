import home from '@/views/home/index.vue'
import mine from '@/views/mine/index.vue'
import login from '@/views/login/index.vue'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/home',
        name: 'home',
        component: home,
        mate: {
            title: '',
            KeepAlive: false
        }
    }, {
        path: '/login',
        name: 'login',
        component: login,
        mate: {
            title: 'login',
            KeepAlive: false
        }
    }, {
        path: '/mine',
        name: 'mine',
        component: mine,
        mate: {
            title: '',
            KeepAlive: false
        }
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router



