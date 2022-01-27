<template>
    <el-col :span="24">
        <MenuLogo></MenuLogo>
        <el-menu
            @open="handleOpen"
            @close="handleClose"
            default-active="1"
            class="el-menu-vertical-demo"
        >
            <MenuItem :menuList="menuList"></MenuItem>
        </el-menu>
    </el-col>
</template>
<script setup lang="ts">
import MenuItem from './MenuItem.vue';
import MenuLogo from './MenuLogo.vue';
import {
    Location,
    Document,
    Menu as IconMenu,
    Setting,
} from '@element-plus/icons-vue'
import { reactive } from 'vue';

// 菜单数据
let menuList = reactive([
    {
        path: '/dashboard',
        component: 'Layout',
        meta: {
            title: '首页',
            icon: "el-icon-s-home",
            roles: ['sys:manage']
        },
        children: []
    }, {
        path: '/system',
        component: 'Layout',
        alwaysShow: true,
        meta: {
            title: '系统管理',
            icon: "el-icon-menu",
            roles: ['sys:manage'],
            parentId: 0
        },
        children: [
            {
                path: '/department',
                component: '/system/department/department',
                alwaysShow: false,
                name: "department",
                meta: {
                    title: '部门管理',
                    icon: "el-icon-document",
                    roles: ['sys:dept'],
                    parentId: 17
                },
                children: []
            }
        ]
    }
])

const handleOpen = (key: string | number, keyPath: string) => {
    console.log(key, keyPath)
}
const handleClose = (key: string | number, keyPath: string) => {
    console.log(key, keyPath)
}
</script>
<style lang="scss" scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>
