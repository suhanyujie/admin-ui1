<template>
    <el-container class="layout">
        <el-aside width="200px" class="aside">Aside</el-aside>
        <el-container>
            <el-header class="header">Header</el-header>
            <el-main class="main">Main</el-main>
        </el-container>
    </el-container>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
    .layout{
        height: 100%;
        .aside{
            background-color: aquamarine;
        }
        .header {
            background-color: beige;
        }
        .main{
            background-color: azure;
        }
    }
</style>
