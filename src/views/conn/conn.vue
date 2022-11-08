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

.one-item-box:hover {}

.one-item-box .conn-conn-btn {
    margin: auto;
}
</style>