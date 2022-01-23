import {createRouter, createWebHistory, RouteRecordRaw} from 'vue-router'
import Layout from '@/layout/index.vue'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'home',
        component: Layout,
    }
]

// 创建路由
const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router

