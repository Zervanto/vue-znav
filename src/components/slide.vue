<template>
  <div class="slide wrap">
      <!-- swiper -->
      <swiper :options="swiperOption">
        <swiper-slide>
        <a href="https://www.baidu.com/?tn=39042058_13_oem_dg">
        <img src="images/baidu.jpg" alt=""></a>
        </swiper-slide>
        <swiper-slide>
        <a href="http://www.bilibili.com/">
                       <img src="images/bilibili.jpg" alt="">
                   </a>
        </swiper-slide>
        <swiper-slide> 
        <a href="https://www.taobao.com/">
                       <img src="images/taobao.jpg" alt="">
                   </a></swiper-slide>
        <swiper-slide><a href="http://www.gamersky.com">
                       <img src="images/gamesky.jpg" alt="">
                   </a></swiper-slide>
        <swiper-slide><a href="https://www.zhihu.com/explore">
                       <img src="images/zhihu.jpg" alt="">
                   </a></swiper-slide>
        <swiper-slide><a href="https://gold.xitu.io/welcome/frontend">
                       <img src="images/juejin.jpg" alt="">
                   </a></swiper-slide>
        <swiper-slide><a href="http://stackoverflow.com/">
                       <img src="images/stack.jpg" alt="">
                   </a></swiper-slide>
        <swiper-slide><a href="https://segmentfault.com/">
                       <img src="images/sf.jpg" alt="">
                   </a></swiper-slide>
        <swiper-slide> 
        <a href="https://developer.mozilla.org/zh-CN/">
                       <img src="images/mdn.jpg" alt="">
                   </a></swiper-slide>
        <swiper-slide><a href="https://github.com/">
                       <img src="images/github.jpg" alt="">
                   </a></swiper-slide>
        <swiper-slide><a href="http://www.dilidili.com/">
                       <img src="images/dilidili.jpg" alt="">
                   </a></swiper-slide>             
        <swiper-slide><a href="http://5sing.kugou.com/35341590/default.html">
                       <img src="images/51sing.jpg" alt="">
                   </a>
                   </swiper-slide>
        <swiper-slide><a href="http://www.ljsw.cc/">
                       <img src="images/ljsw.jpg" alt="">
                   </a></swiper-slide>
        <swiper-slide> <a href="http://www.csdn.net/">
                       <img src="images/csdn.jpg" alt="">
                   </a></swiper-slide>
        <swiper-slide><a href="http://www.zcool.com.cn/">
                       <img src="images/zcool.jpg" alt="">
                   </a></swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
                <div class="swiper-button-prev" slot="button-prev"></div>
<div class="swiper-button-next" slot="button-next"></div>
      </swiper>

      <!-- swiper -->
      <swiper :options="swiperOption">
        <swiper-slide>
        <a href="https://www.bing.com/?scope=web&FORM=HRDSC1">
                      <img src="images/bing.jpg" alt="">
                   </a>
        </swiper-slide>
        <swiper-slide>
        <a href="https://www.facebook.com">
                      <img src="images/facebook.jpg" alt="">
                   </a>
        </swiper-slide>
        <swiper-slide> <a href="https://www.google.com/ncr">
                      <img src="images/google.jpg" alt="">
                   </a></swiper-slide>
        <swiper-slide> <a href="https://www.youtube.com">
                      <img src="images/youtube.jpg" alt="">
                   </a></swiper-slide>
        <swiper-slide><a href="https://www.quora.com/">
                       <img src="images/quora.jpg" alt="">
                   </a></swiper-slide>
        <swiper-slide><a href="https://twitter.com/?lang=zh-cn">
                      <img src="images/twitter.jpg" alt="">
                   </a></swiper-slide>
        <swiper-slide><a href="https://www.oschina.net/">
                      <img src="images/oschina.jpg" alt="">
                   </a></swiper-slide>
        <swiper-slide> <a href="https://www.v2ex.com">
                      <img src="images/v2ex.jpg" alt="">
                   </a></swiper-slide>
        <swiper-slide> <a href="http://store.steampowered.com/">
                      <img src="images/steam.jpg" alt="">
                   </a></swiper-slide>
        <swiper-slide><a href="http://mail.sina.com.cn/">
                      <img src="images/sina.jpg" alt="">
                   </a></swiper-slide>
        <swiper-slide><a href="http://www.163.com/">
                      <img src="images/wangyi.jpg" alt="">
                   </a></swiper-slide>             
        <swiper-slide><a href="http://www.iconfont.cn/">
                      <img src="images/iconfont.jpg" alt="">
                   </a>
                   </swiper-slide>
        <swiper-slide><a href="https://www.twitch.tv/">
                      <img src="images/twitch.jpg" alt="">
                   </a></swiper-slide>
        <swiper-slide> <a href="https://www.douban.com/">
                      <img src="images/douban.jpg" alt="">
                   </a></swiper-slide>
        <swiper-slide><a href="http://www.guokr.com/">
                      <img src="images/guokr.jpg" alt="">
                   </a></swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
                <div class="swiper-button-prev" slot="button-prev"></div>
<div class="swiper-button-next" slot="button-next"></div>
      </swiper>
</div>
</template>

<script>
  export default {
    data() {
      return {
        swiperOption: {
          pagination: '.swiper-pagination',
          nextButton: '.swiper-button-next',
          prevButton: '.swiper-button-prev',
          slidesPerView: 5,
          paginationClickable: true,
          spaceBetween: 30,
          height:150
        }
      }
    }
  }
</script>
<style scoped>
.slide a{
    float: left;
    position: relative;
    width: 180px;
    height: 140px;
    border-radius: 10px;
    margin:0 10px;
    box-shadow:10px 10px 10px #877;
    /*background: orangered;*/
}
.slide a:hover{
    width: 170px;
    height: 130px;
    border: 5px solid #f5f5f5;
}
.slide a:nth-child(1){
    margin-left: 0;
}
.slide a:nth-child(5){
    margin-right: 0;
    box-shadow:0 10px 10px #877;
}
.slide a img{
    width: 180px;
    height: 140px;
    border-radius: 10px;
    display: block;/*清除间距*/
   
}
</style>