<template>
<div>
    <section class="slide">
       <div class="box">
           <ul>
               <li>
                   <a href="https://www.baidu.com/?tn=39042058_13_oem_dg">
                       <img src="images/baidu.jpg" alt=""></a>
                   <a href="http://www.bilibili.com/">
                       <img src="images/bilibili.jpg" alt="">
                   </a>
                   <a href="https://www.taobao.com/">
                       <img src="images/taobao.jpg" alt="">
                   </a>
                   <a href="http://www.gamersky.com">
                       <img src="images/gamesky.jpg" alt="">
                   </a>
                   <a href="https://www.zhihu.com/explore">
                       <img src="images/zhihu.jpg" alt="">
                   </a>
               </li>
               <li>
                   <a href="https://gold.xitu.io/welcome/frontend">
                       <img src="images/juejin.jpg" alt="">
                   </a>
                   <a href="http://stackoverflow.com/">
                       <img src="images/stack.jpg" alt="">
                   </a>
                   <a href="https://segmentfault.com/">
                       <img src="images/sf.jpg" alt="">
                   </a>
                   <a href="http://www.51cto.com/">
                       <img src="images/51cto.jpg" alt="">
                   </a>
                   <a href="https://github.com/">
                       <img src="images/github.jpg" alt="">
                   </a>
               </li>
               <li>
                   <a href="http://www.dilidili.com/">
                       <img src="images/dilidili.jpg" alt="">
                   </a>
                   <a href="http://5sing.kugou.com/35341590/default.html">
                       <img src="images/51sing.jpg" alt="">
                   </a>
                   <a href="http://www.ljsw.cc/">
                       <img src="images/ljsw.jpg" alt="">
                   </a>
                   <a href="http://www.csdn.net/">
                       <img src="images/csdn.jpg" alt="">
                   </a>
                   <a href="http://www.zcool.com.cn/">
                       <img src="images/zcool.jpg" alt="">
                   </a>
               </li>
           </ul>
       </div>
        <span class="left">&lt;</span>
        <span class="right">&gt;</span>
</section>
<section class="slide">
       <div class="box">
           <ul>
               <li>
                  <a href="https://www.bing.com/?scope=web&FORM=HRDSC1">
                      <img src="images/bing.jpg" alt="">
                   </a>
                   <a href="https://www.facebook.com">
                      <img src="images/facebook.jpg" alt="">
                   </a>
                   <a href="https://www.google.com/ncr">
                      <img src="images/google.jpg" alt="">
                   </a>
                   <a href="https://www.youtube.com">
                      <img src="images/youtube.jpg" alt="">
                   </a>
                     <a href="https://github.com/">
                       <img src="images/github.jpg" alt="">
                   </a>
               </li>
               <li>
                   <a href="https://twitter.com/?lang=zh-cn">
                      <img src="images/twitter.jpg" alt="">
                   </a>
                   <a href="https://www.oschina.net/">
                      <img src="images/oschina.jpg" alt="">
                   </a>
                  <a href="https://www.v2ex.com">
                      <img src="images/v2ex.jpg" alt="">
                   </a>
                   <a href="http://store.steampowered.com/">
                      <img src="images/steam.jpg" alt="">
                   </a>
                   <a href="http://mail.sina.com.cn/">
                      <img src="images/sina.jpg" alt="">
                   </a>
               </li>
               <li>
                  <a href="http://www.163.com/">
                      <img src="../images/wangyi.jpg" alt="">
                   </a>
                   <a href="http://www.iconfont.cn/">
                      <img src="../images/iconfont.jpg" alt="">
                   </a>
                   <a href="https://www.twitch.tv/">
                      <img src="../images/twitch.jpg" alt="">
                   </a>
                   <a href="https://www.douban.com/">
                      <img src="../images/douban.jpg" alt="">
                   </a>
                   <a href="http://www.guokr.com/">
                      <img src="../images/guokr.jpg" alt="">
                   </a>
               </li>
           </ul>
       </div>
        <span class="left">&lt;</span>
        <span class="right">&gt;</span>
</section>
</div>
</template>
<script>
    export default{
        data(){
            return{
            }
        }
    }
</script>
<style scoped>
.slide{
    margin: 50px auto;
    width: 980px;
    padding:5px;
    height: 150px;
    position: relative;
}
.slide .box{
    width: 980px;
    height: 150px;
    overflow-x: hidden;
    position: relative;
}
.slide ul{
    position: absolute;
    left: 0;
    top: 0;
    width: 3920px;
    height: 150px;
}
.slide ul li{
    float: left;
    width: 980px;
    height: 150px;
    /*overflow: hidden;*/
}
.slide ul li a{
    float: left;
    position: relative;
    width: 180px;
    height: 140px;
    border-radius: 10px;
    margin:0 10px;
    box-shadow:10px 10px 10px #877;
    /*background: orangered;*/
}
.slide ul li a:hover{
    width: 170px;
    height: 130px;
    border: 5px solid #f5f5f5;
}
.slide ul li a:nth-child(1){
    margin-left: 0;
}
.slide ul li a:nth-child(5){
    margin-right: 0;
    box-shadow:0 10px 10px #877;
}
.slide ul li a img{
    width: 180px;
    height: 140px;
    border-radius: 10px;
    display: block;/*清除间距*/
    /*background: rgba(0,0,0,0.8);*/
}
span {
    display: inline-block;
    width: 40px;
    height: 40px;
    position: absolute;
    top: 50%;
    margin-top: -20px;
    background: #000;
    cursor: pointer;
    font:bold 30px/40px "黑体";
    text-align: center;
    color: #fff;
    opacity: 0.3;
    border: 1px solid #fff;
}
.left{
    left: -41px;
}

.right {
    right: -41px;
}
</style>