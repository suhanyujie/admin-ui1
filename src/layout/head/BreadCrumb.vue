<template>
    <el-breadcrumb :separator-icon="ArrowRight">
        <!-- <el-breadcrumb-item :to="{ path: '/' }">homepage</el-breadcrumb-item> -->
        <el-breadcrumb-item v-for="item in tabs">{{item.meta.title}}</el-breadcrumb-item>
    </el-breadcrumb>
</template>
<script setup lang='ts'>
import { ref, reactive, Ref, watch } from 'vue'
import { ArrowRight } from '@element-plus/icons-vue'
import { useRoute, RouteLocationMatched } from "vue-router";
import { match } from 'assert';

let route = useRoute()
const tabs: Ref<RouteLocationMatched[]> = ref([])

const getBreadCrumb = ()=>{
    let matched = route.matched.filter(item=>item.meta && item.meta.title)
    const first = matched[0]
    if (first.path !== '/dashboard') {
        // 构造一个路由
        matched = [{
            path: '/dashboard',
            meta: {
                title: '首页'
            }
        } as any].concat(matched)
    }
    tabs.value = matched
}

getBreadCrumb()

watch(()=>route.path, ()=>getBreadCrumb())

</script>
<style lang='scss' scoped>
</style>
