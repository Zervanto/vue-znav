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
// import MintUI from 'mint-ui'
// import 'mint-ui/lib/style.css'
// Vue.use(MintUI);
import VueRouter from 'vue-router'
Vue.use(VueRouter);
//引入vue-resource
import VueResource from 'vue-resource'
Vue.use(VueResource);
//设置请求发送的方式
Vue.http.options.emulateJSON = true;
//引入自己的组件
import App from '../App.vue'
import NavCom from '../components/tab.vue'
import LoginCom from '../components/Login.vue'
import CateCom from '../components/category.vue'
import BaiduCom from '../components/baidu.vue'
import SlideCom from '../components/slide.vue'
import TodosCom from '../components/todolist.vue'
Vue.component('tab',NavCom)
Vue.component('baidu',BaiduCom)
Vue.component('slide',SlideCom)
Vue.component('todos',TodosCom)
var router = new VueRouter({
    routes:[//所有路由规则都存在于该数组下面
        {name:'slide',path:'/',component:SlideCom},
        {name:'shows',path:'/category',component:CateCom},
        {name:'todos',path:'/todos',component:TodosCom}
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

