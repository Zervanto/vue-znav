<template>
<div>
    <p>this is login page</p>
    <input type="text" v-model="name"> 
    <hr>
    <div>{{name | strToUpperCase | sliceName(6)}}</div>
    <div>{{fullname}}</div>
</div>
</template>
<script>
    export default{
        data(){
            return {
                name:'',
                firstname:'zhao'
            }
        },
        filters:{
            strToUpperCase(input){//过滤器是一个方法
                return input.toUpperCase();                    
            },
            sliceName(name,length){
            // if(length>5){
            //        return 
            //    }
                return name.length>5?name.slice(0,length)+'...':name.slice(0,length);
                // return name.slice(0,5)+'...'
            }
        },
        computed:{
            fullname(){
                return this.firstname+'(^@^)'+this.name;
            }
        }
    }
</script>
<style scoped>

</style>