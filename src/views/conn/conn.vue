<template>
    <div>
        <conn-bar></conn-bar>
    </div>

</template> 
<script setup lang='ts'>
import { ref, reactive } from 'vue'
import ConnBar from "./connBar.vue"
const showConnected = ref(false)
const searchContent = ref("")
const curDb = ref(0)
const dbArr = ref([0, 1, 2])
const connName = ref("127.0.0.1:2379-11111111111111111")

const connList = ref([
    {
        "id": 1,
        "connName": "127.0.0.1:2379-1001"
    }, {
        "id": 2,
        "connName": "127.0.0.1:2379-1002"
    }, {
        "id": 3,
        "connName": "127.0.0.1:2379-1003"
    }
])

const toConnect = function () {
    showConnected.value = !showConnected.value
    // 如何写 vue3 组件？
    // 如何更改 ref 值
}

</script>
<style lang='scss' scoped>
// * {
//     padding: 0px;
//     margin: 0px;
// }
</style>