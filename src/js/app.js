//引入vue组件库
import Vue from 'vue'
//引入自己的组件
import App from '../app.vue'
//创建一个Vue对象
new Vue({
    el:'#app',//表示将vue组件的内容放到页面id为app的元素内部
    render:function(createElements){//渲染vue组件内容
        return createElements(App);
    }
});