import VueRouter from 'vue-router'

import HomeContainer from './components/tabbar/HomeContainer.vue'
import MemberContainer from './components/tabbar/MemberContainer.vue'
import SearchContainer from './components/tabbar/SearchContainer.vue'
import shopContainer from './components/tabbar/shopContainer.vue'




var router=new VueRouter({
    routes:[//配置路由规则
        {path:'/home',component:HomeContainer},
        {path:'/member',component:MemberContainer},
        {path:'/search',component:SearchContainer},
        {path:'/shop',component:shopContainer},

    ],
    linkActiveClass:'mui-active'
    // router-link-active
})
export default  router