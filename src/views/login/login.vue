<template>
    <el-row class="row-bg">
        <el-row :span="24">
            <div class="one-item-box">
                <span class="conn-name-box">item Name...</span>
                <el-button type="primary">连接</el-button>
            </div>
        </el-row>
    </el-row>

</template> 
<script setup lang='ts'>
import { ref, reactive } from 'vue'
</script>
<style lang='scss' scoped>
* {
    padding: 0px;
    margin: 0px;
}

.one-item-box {
    width: 262px;
    height: 70px;
    border: 1px solid rgb(175, 167, 169);
    border-radius: 5px;
}

.one-item-box .conn-name-box {
    display: block;
    text-align: left;
    line-height: 70px;
}

.one-item-box:hover {}
</style>