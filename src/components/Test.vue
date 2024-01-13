<template>
    <!-- <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
        <el-menu-item index="1">处理中心</el-menu-item>
        <el-submenu index="2">
            <template slot="title">我的工作台</template>
            <el-menu-item index="2-1">选项1</el-menu-item>
            <el-menu-item index="2-2">选项2</el-menu-item>
            <el-menu-item index="2-3">选项3</el-menu-item>
            <el-submenu index="2-4">
                <template slot="title">选项4</template>
                <el-menu-item index="2-4-1">选项1</el-menu-item>
                <el-menu-item index="2-4-2">选项2</el-menu-item>
                <el-menu-item index="2-4-3">选项3</el-menu-item>
            </el-submenu>
        </el-submenu>
        <el-menu-item index="3" disabled>消息中心</el-menu-item>
        <el-menu-item index="4"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item>
    </el-menu> -->
    <div class="login-container">
        <div class="login-box">
            <div>login</div>
            <el-form>
                <el-form-item><el-input>1</el-input></el-form-item>
                <el-form-item><el-input>1</el-input></el-form-item>
                <el-form-item><el-button>reset</el-button><el-button type="primary">sumbit</el-button></el-form-item>
                <el-form-item></el-form-item>
            </el-form>
        </div>
    </div>
</template>

  
<script>
export default {
    data() {
        return {
            activeIndex: '1',
            activeIndex2: '1'
        };
    },
    methods: {
        handleSelect(key, keyPath) {
            console.log(key, keyPath);
        }
    }
}
</script>

<style lang="less" scoped>
.login-container {
    background-color: gray;
    height: 100%;
}

.login-box {
    width: 450px;
    height: 300px;
    transform: translate(-50%, -50%);
    position: absolute;
    top: 50%;
    left: 50%;
    background-color: #fff;
}
</style>