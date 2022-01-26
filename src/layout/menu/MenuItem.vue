<script setup lang="ts">

defineProps(['menuList'])
</script>

<template>
    <template v-for="menu in menuList" :key="menu.path">
        <el-sub-menu v-if="menu.children && menu.children.length > 0" index="menu.path">
            <template #title>
                <el-icon :class="menu.meta.icon"></el-icon>
                <span>{{menu.meta.title}}</span>
            </template>
            <menu-item :menuList="menu.children"></menu-item>
        </el-sub-menu>
        <el-menu-item v-else index="menu.path">
            <el-icon :class="menu.meta.icon"></el-icon>
            <span>{{menu.meta.title}}</span>
        </el-menu-item>
    </template>
</template>

<style lang="scss" scoped>

</style>
