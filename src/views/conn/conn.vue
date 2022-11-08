<template>
    <el-row style="">
        <div class="one-item-box">
            <div style="display: flex; flex-direction: column;">
                <div style="display: flex; flex-direction: row; align-items: flex-start; width: 300px;">
                    <div class="conn-name-div">
                        <span class="conn-name-span" style="">{{
                                connName
                        }}</span>
                    </div>
                    <div class="icon-box"
                        style="display: flex; flex-direction: row-reverse;width: 150px;align-items: flex-end;">
                        <el-button type="default" class="conn-info-btn">信息</el-button>
                        <el-button type="default" class="conn-info-btn" @click.prevent="toConnect()">连接</el-button>
                    </div>
                </div>
                <div v-show="showConnected" class="conn-dropdown " style="margin-top: 10px;">
                    <div style=" display: flex;justify-content: space-between;">
                        <el-select v-model="curDb" class="db-selection" placeholder="Select" size="small">
                            <el-option v-for="item in dbArr" :key="item" :label="item" :value="item" />
                        </el-select>
                        <el-button type="default">Add key</el-button>
                    </div>
                    <div>
                        <el-input v-model="searchContent" placeholder="Please input search keyword" />
                    </div>
                </div>
            </div>
        </div>
    </el-row>

</template> 
<script setup lang='ts'>
import { ref, reactive } from 'vue'
const showConnected = ref(true)
const searchContent = ref("")
const curDb = ref(0)
const dbArr = ref([0, 1, 2])
const connName = ref("127.0.0.1:2379-11111111111111111")

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

.one-item-box {
    // width: 262px;
    // height: 70px;
    // border: 1px solid rgb(175, 167, 169);
    // border-radius: 5px;
}

.one-item-box .conn-name-box {
    display: block;
    text-align: left;
    line-height: 70px;
}

.conn-info-btn {
    margin-right: 0;
}

.conn-name-div {
    width: 140px;
    height: 32px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}

.conn-name-span {
    flex: 1;
    height: 32px;
    line-height: 32px;
}

.show-dropdown {
    display: flex;
}

.hide-dropdown {
    display: none;
}
</style>