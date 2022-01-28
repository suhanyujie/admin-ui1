<template>
    <el-col :span="24">
        <MenuLogo v-if="menuIsExpand"></MenuLogo>
        <el-menu
            mode="vertical"
            @open="handleOpen"
            @close="handleClose"
            :default-active="activeIndex"
            class="el-menu-vertical-demo"
            :router="true"
            :collapse="!menuIsExpand"
            :collapse-transition="true"
        >
            <MenuItem :menuList="menuList"></MenuItem>
        </el-menu>
    </el-col>
</template>
<script setup lang="ts">
import { useRoute } from 'vue-router';
import MenuItem from './MenuItem.vue';
import MenuLogo from './MenuLogo.vue';
import {
    Location,
    Document,
    Menu as IconMenu,
    Setting,
} from '@element-plus/icons-vue'
import { ref, computed, reactive } from 'vue';
import { useStore } from '@/store/index';

const store = useStore()
// useRoute 获取当前路由
const route = useRoute()
const activeIndex = computed(()=>{
    const {path} = route
    return path
})

// 菜单数据
let menuList = reactive([
    {
        path: '/dashboard',
        component: 'Layout',
        meta: {
            title: '首页',
            icon: "HomeFilled",
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
                path: '/system/department',
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
let menuIsExpand = computed(()=>{
    return store.getters['getMenuIsExpand']
})
</script>
<style lang="scss" scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}

</style>
