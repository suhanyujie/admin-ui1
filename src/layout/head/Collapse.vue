<template>
    <el-icon class="icons" @click="setMenuExpand">
        <component :is="menuIsExpand ? Fold : Expand" ></component>
    </el-icon>
</template>
<script setup lang='ts'>
import { ref, reactive, computed } from 'vue'
import { useStore } from '@/store/index';
import { Fold, Expand } from '@element-plus/icons-vue'

const store = useStore()
let menuIsExpand = computed(()=>{
    return store.getters['getMenuIsExpand']
})
const setMenuExpand = ()=>{
    store.commit('setMenuIsExpand', !menuIsExpand.value)
}
</script>
<style lang='scss' scoped>
.icons {
    display: flex;
    font-size: 24px;
    align-items: center;
    cursor: pointer;
    margin-right: 16px;
}
</style>
