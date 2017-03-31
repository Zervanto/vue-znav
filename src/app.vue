<template>
<div>
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
                this.$http.get('http://127.0.0.1:2333/api/znavlist').then(data=>(
                    cosole.log(data);
                ))
            }
        },
        created(){
            this.getData();
        }
    }
</script>
<style scoped>

</style>