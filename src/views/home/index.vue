<template>
    <div class="login">
        <!-- 放置一个卡片组件 -->
        <el-card class="login-card">
            <div class="title">
                <img src="../../assets/img/logo_index.png" alt="">
            </div>
        </el-card>
    </div>
</template>

<script>
export default {
}
</script>

<style lang="less" scoped>
// 写上scoped属性 那么只会对当前的组件样式产生作用 原理 是 为当前的标签生成了 data-v-随机数
   // 100vh相当于当前可视区域的100%高度
   .login {
       background-image:url('../../assets/img/login_bg.jpg');
       background-size: cover;
       height: 100vh;
       display: flex;
       justify-content: center;
       align-items: center;
       .login-card{
           width: 440px;
           height: 350px;
           .title{
               text-align: center;
           }
           img{
               height: 44px;
           }
       }
   }
</style>
