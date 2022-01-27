<script setup lang="ts">
import Head from '@/layout/head/Head.vue';
import MenuBar from '@/layout/menu/MenuBar.vue';
</script>

<template>
    <el-container class="layout">
        <el-aside width="200px" class="aside">
            <MenuBar></MenuBar>
        </el-aside>
        <el-container>
            <el-header class="header">
                <Head></Head>
            </el-header>
            <el-main class="main">Main</el-main>
        </el-container>
    </el-container>
</template>

<style lang="scss" scoped>
.layout {
    height: 100%;
    .header {
        border: 1px solid #e5e5e5;
    }
    .main {
        background-color: azure;
    }
}
</style>
