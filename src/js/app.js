//引入vue组件库
import Vue from 'vue'
//引入vue-awesome-swiper
import VueAwesomeSwiper from 'vue-awesome-swiper'
Vue.use(VueAwesomeSwiper);
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  components: {
    swiper,
    swiperSlide
  }
}
//引入MintUI 
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI);
//引入vue-router
import VueRouter from 'vue-router'
Vue.use(VueRouter);
//引入vue-resource
import VueResource from 'vue-resource'
Vue.use(VueResource);
//设置请求发送的方式
Vue.http.options.emulateJSON = true;
//引入自己的组件
import App from '../App.vue'
import LoginCom from '../components/Login.vue'
import RegisterCom from '../components/Register.vue'
import BaiduCom from '../components/baidu.vue'
import SlideCom from '../components/slide.vue'
Vue.component('baidu',BaiduCom)
Vue.component('slide',SlideCom)
var router = new VueRouter({
    routes:[//所有路由规则都存在于该数组下面
        {name:'login',path:'/login',component:LoginCom},
        {name:'register',path:'/register',component:RegisterCom}
    ]
});
//创建一个Vue对象
new Vue({
    el:'#app',//表示将vue组件的内容放到页面id为app的元素内部
    router:router,
    render:c=>c(App)
    // render:function(createElements){//渲染vue组件内容
    //     return createElements(App);
    // }
});

