<template>
    <template v-for="menu in menuList" :key="menu.path">
        <el-sub-menu v-if="menu.children && menu.children.length > 0" :index="menu.path">
            <template #title>
                <i v-if="menu.meta.icon && menu.meta.icon.includes('el-icon')" :class="menu.meta.icon"></i>
                <!-- 动态组件使用方式 -->
                <component v-else :is="menu.meta.icon" class="icons"></component>
                <span>{{ menu.meta.title }}</span>
            </template>
            <menu-item :menuList="menu.children"></menu-item>
        </el-sub-menu>
        <el-menu-item v-else :index="menu.path">
            <i v-if="menu.meta.icon && menu.meta.icon.includes('el-icon')" :class="menu.meta.icon"></i>
            <!-- 动态组件使用方式 -->
            <component v-else :is="menu.meta.icon" class="icons"></component>
            <span>{{ menu.meta.title }}</span>
        </el-menu-item>
    </template>
</template>
<script setup lang="ts">
defineProps(['menuList'])

</script>
<style lang="scss" scoped>
.icons {
    width: 24px;
    height: 18px;
}
</style>
