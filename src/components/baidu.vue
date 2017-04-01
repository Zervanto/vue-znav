<template>
<div>
    <section id="baidu">
    <form action="http://www.baidu.com/baidu" target="_blank">
        <div align="center">
            <input name=tn type=hidden value=baidu>
            <input type=text name=word size=30>
            <input type="submit" value="百度搜索">
        </div>
    </form>
    </section>
</div>
</template>
<script>
    export default{
        data(){
            return {}
        }
    }
</script>
<style scoped>
    #baidu{
    margin-top:10px;
}
#baidu form div input:nth-child(2){
    width:500px;
    height:34px;
    text-indent: 1em;
    border:1px solid #b6b6b6;
}
#baidu form div input:nth-child(3){
    width: 100px;
    height: 36px;
    color: #fff;
    font-size: 15px;
    letter-spacing: 1px;
    background: #3385ff;
    border-bottom: 1px solid #2d78f4;
    outline: medium;
    -webkit-appearance: none;
    -webkit-border-radius: 0;
}
</style>