<script setup lang="ts">
import MenuItem from './MenuItem.vue';
import {
    Location,
    Document,
    Menu as IconMenu,
    Setting,
} from '@element-plus/icons-vue'

const handleOpen = (key: string | number, keyPath: string[]) => {
    console.log(key, keyPath)
}
const handleClose = (key: string | number, keyPath: string[]) => {
    console.log(key, keyPath)
}
</script>

<template>
    <el-col :span="24">
        <h5 class="mb-2">Redis Clinet</h5>
        <el-menu @open="handleOpen" @close="handleClose" my-attr="123" default-active="1">
            <MenuItem></MenuItem>
        </el-menu>
    </el-col>
</template>

