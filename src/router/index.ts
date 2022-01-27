import {createRouter, createWebHistory, RouteRecordRaw} from 'vue-router'
import Layout from '@/layout/index.vue'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        component: Layout,
        redirect: '/dashboard',
        children: [
            {
                path: '/dashboard',
                component: () => import('@/components/dashboard/Index.vue'),
                name: 'dashboard',
                meta: {
                    title: '首页',
                    icon: '#icondashboard',
                }
            }
        ]
    },

]

// 创建路由
const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router

