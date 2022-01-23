<script setup lang="ts">
import { ref, computed } from 'vue'
import { useStore } from '@/store/index'

const store = useStore()
defineProps<{ msg: string }>()

const count = ref(0)
const vuexCount = computed(() => {
    return store.getters['getCount']
})
const addBtn = () => {
    store.commit('setCount', ++count.value)
}
</script>

<template>
    <h1>{{ msg }}</h1>

    <button type="button" @click="addBtn">(btn)count is: {{ vuexCount }}</button>

    <div>
        <el-row class="mb-4">
            <el-button>Default</el-button>
            <el-button type="primary">Primary</el-button>
            <el-button type="success">Success</el-button>
            <el-button type="info">Info</el-button>
            <el-button type="warning">Warning</el-button>
            <el-button type="danger">Danger</el-button>
            <el-button>中文</el-button>
        </el-row>
    </div>
</template>

<style scoped>
a {
    color: #42b983;
}

label {
    margin: 0 0.5em;
    font-weight: bold;
}

code {
    background-color: #eee;
    padding: 2px 4px;
    border-radius: 4px;
    color: #304455;
}
</style>
