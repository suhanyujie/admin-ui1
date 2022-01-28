<template>
    <el-tabs v-model="activeTab" type="card" @tab-click="clickTab" closable @tab-remove="removeTab">
        <el-tab-pane
            v-for="item in tabList"
            :key="item.path"
            :label="item.title"
            :name="item.path"
        >{{ }}</el-tab-pane>
    </el-tabs>
</template>
<script setup lang='ts'>
import { computed, onMounted, ref, watch } from 'vue'
import { store, useStore } from "@/store/index";
import { useRoute, useRouter } from "vue-router"
import { ITable } from "@/store/type";

let state = useStore()
let route = useRoute()
let router = useRouter()
let activeTab = ref('')

const tabList = computed(() => {
    return state.getters['getTabList']
})

// 设置激活的 tab
const setActiveTab = () => {
    activeTab.value = route.path
}

// 监听路由的变化
watch(() => route.path, () => {
    // 设置激活的选项卡
    setActiveTab()
    // 把当前路由添加到选项卡列表中
    addTab()
})

// 解决刷新后，选项卡丢失问题
onMounted(() => {
    beforeRefresh()
    // 设置激活的选项卡
    setActiveTab()
    // 把当前路由添加到选项卡列表中
    addTab()
})
// 将选项卡数据存储在  sessionStorage 中
const beforeRefresh = () => {
    window.addEventListener('beforeunload', () => {
        sessionStorage.setItem('tabList', JSON.stringify(tabList.value))
    })
    let tabListJson = sessionStorage.getItem('tabList')
    if (tabListJson) {
        let oldTabs = JSON.parse(tabListJson)
        if (oldTabs.length > 0) {
            store.state.tabsList = oldTabs
        }
    }
}

// 添加选项卡
const addTab = () => {
    // 从当前路由中获取
    const { path, meta } = route
    // 通过 vuex 设置
    const tab: ITable = {
        path: path,
        title: meta.title as string,
    }
    store.commit('addTab', tab)
}

// 删除选项卡
const removeTab = (targetName: string) => {
    const tabs = tabList.value
    let activeName = targetName
    if (activeName === '/dashboard') return
    if (activeTab.value === targetName) {
        tabs.forEach((tab: ITable, index: number) => {
            if (tab.path === targetName) {
                // 设定要展示的 tab
                const nextTab: ITable = tabs[index + 1] || tabs[index - 1]
                if (nextTab) {
                    activeName = nextTab.path
                }
            }
        });
    }

    activeTab.value = activeName
    // 重新设定选项卡列表
    store.state.tabsList = tabs.filter((tab: ITable) => tab.path !== targetName)
    // 路由跳转
    router.push({ path: activeName })
}

const clickTab = (tab: any) => {
    const { props } = tab
    router.push({ path: props.name })
}
</script>
<style lang='scss' scoped>
</style>
