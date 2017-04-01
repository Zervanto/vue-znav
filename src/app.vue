<template>
<div>
<header class="header">
    <div class="wrap">
        <div class="logo">Z导航</div>
        <nav class="nav">
            <ul>
                <li><a href="http://mail.163.com/">网易邮箱</a></li>
                <li><a href="https://mail.qq.com/">QQ邮箱</a></li>
                <li><a href="http://weibo.com/login.php">新浪微博</a></li>
                <li><a href="https://tieba.baidu.com/index.html?errno=3&errmsg=unknow%20error%28110001%29&stoken=&bduss=&ssnerror=0">百度贴吧</a></li>
            </ul>
        </nav>
    </div>
</header>  
<baidu></baidu>
    <router-link to="/login">登录</router-link>
    <router-link to="/register">注册</router-link>
    <router-view></router-view>

    </div>
</template>
<script>
    export default{
        data(){
            return {
                
            }
        },
        methods:{//  存放当前Vue实例中的方法
            getData(){
               // this.$http.get('http://127.0.0.1:2333/api/znavlist').then(data=>(
                    //cosole.log(data);
            }
        },
        created(){
            this.getData();
        }
    }
</script>
<style scoped>
.header{
    width: 100%;
    height: 50px;
    background-color: #555;
}
.wrap{
    width:1000px;
    margin: 0 auto;
}
.header .wrap .logo{
    float: left;
    height: 50px;
    line-height: 50px;
    color: #fff;
    text-align: center;
}
.header .wrap .nav{
    float: right;
    height: 50px;
}
.nav ul li {
    float: left;
    margin: 0 10px ;
}
.nav ul li a{
    height: 50px;
    line-height: 50px;
    text-align: center;
    color: #fff;
}
</style>