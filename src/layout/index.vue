<script setup lang="ts">
import Head from '@/layout/head/Head.vue';
import MenuBar from '@/layout/menu/MenuBar.vue';
</script>

<template>
    <el-container class="layout">
        <el-aside class="aside">
            <MenuBar></MenuBar>
        </el-aside>
        <el-container>
            <el-header class="header">
                <Head></Head>
            </el-header>
            <el-main class="main">
                <router-view></router-view>
            </el-main>
        </el-container>
    </el-container>
</template>

<style lang="scss" scoped>
.layout {
    height: 100%;
    .aside{
        width: auto;
    }
    .header {
        border: 1px solid #e5e5e5;
        display: flex;
        align-items: center;
    }
    .main {
        background-color: azure;
    }
}
</style>
