import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
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
    }, {
        path: '/system',
        component: Layout,
        meta: {
            title: '系统管理',
            icon: 'el-icon-menu',
            parentId: 0,
        },
        children: [
            {
                path: '/system/department',
                component: () => import('@/views/system/department/department.vue'),
                name: 'department',
                meta: {
                    title: '部门管理',
                    icon: 'el-icon-document',
                }
            }
        ]
    },
    {
        path: '/connection',
        component: Layout,
        redirect: '/connection/conn',
        children: [
            {
                path: '/connection/conn',
                component: () => import('@/views/conn/conn.vue'),
                name: 'loginIndex',
                meta: {
                    title: '连接',
                    icon: 'el-icon-document',
                }
            }
        ]
    }
    // {
    //     path: '/login',
    //     component: Layout,
    //     redirect: '/login/index',
    //     children: [
    //         {
    //             path: '/login/index',
    //             component: () => import('@/views/login/login.vue'),
    //             name: 'loginIndex',
    //             meta: {
    //                 title: '登录',
    //                 icon: 'el-icon-document',
    //             }
    //         }
    //     ]
    // }
]

// 创建路由
const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router

