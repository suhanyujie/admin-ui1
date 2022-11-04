<template>
    <el-row class="row-bg">
        <el-row :span="24">
            <div class="one-item-box">
                <el-row :span="24">
                    <el-col :span="10">
                        <span class="conn-name-box">{{ connTitle }}</span>
                    </el-col>
                    <el-col :offset="4" :span="4" class="flex items-center">
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

const msg = ref("hello world")
const connTitle = ref("test-redis-conn")
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

.items-center {
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
</style>