<template>
    <el-row class="row-bg">
        <el-row :span="24">
            <div class="one-item-box">
                <el-row :span="24">
                    <el-col :span="10">
                        <span class="conn-name-box">item Name...</span>
                    </el-col>
                    <el-col :offset="4" :span="4">
                        <div class="grid-content ep-bg-purple" />
                        <el-row :span="24" justify="end">
                            <el-button type="primary" class="conn-conn-btn">连接</el-button>
                        </el-row>
                    </el-col>
                </el-row>

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

.one-item-box .conn-conn-btn {
    margin: auto;
}
</style>