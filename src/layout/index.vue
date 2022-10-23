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
                <Tabs></Tabs>
                <router-view></router-view>
            </el-main>
        </el-container>
    </el-container>
</template>
<script setup lang="ts">
import Head from '@/layout/head/Head.vue';
import MenuBar from '@/layout/menu/MenuBar.vue';
import Tabs from "@/layout/tabs/Tabs.vue";
</script>
<style lang="scss" scoped>
.layout {
    height: 100%;

    .aside {
        width: auto;
    }

    .header {
        border: 1px solid #e5e5e5;
        display: flex;
        align-items: center;
    }

    .main {
        padding-top: 0px;
    }
}
</style>
