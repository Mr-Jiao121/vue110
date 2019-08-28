//入口文件

import Vue from 'vue'
//1.1导入路由的包
import VueRouter from 'vue-router'
//1.2安装路由
Vue.use(VueRouter);



import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'

import VueResource from 'vue-resource'
Vue.use(VueResource);

//1.3导入路由模块
import router from './router.js'

//按需导入
import {Header,Swipe, SwipeItem } from 'mint-ui'
Vue.component(Header.name,Header)
Vue.component(Swipe.name,Swipe)
Vue.component(SwipeItem.name,SwipeItem)

import app from './App.vue'
var vm=new Vue({
    el:'#app',
    render:c=>c(app),
    //1.4挂载
    router
})
