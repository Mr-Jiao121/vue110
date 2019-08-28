<template>
    <div>

<!--        //轮播图区域-->
        <mt-swipe :auto="5000">
            <!-- 在组件中，使用v-for循环的话，一定要使用 key -->
            <mt-swipe-item v-for="(item,index) in lunbotuList" :key="index">
                <img :src="item.img" alt="">
            </mt-swipe-item>
        </mt-swipe>


<!--        九宫格到六宫格-->
        <div class="mui-content">
            <ul class="mui-table-view mui-grid-view mui-grid-9">
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                    <a href="#">
                        <img src="../../img/menu1.png" alt="">
                    <div class="mui-media-body">新闻咨询</div></a></li>

                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <img src="../../img/menu2.png" alt="">
                    <div class="mui-media-body">图片分享</div></a></li>

                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <img src="../../img/menu3.png" alt="">
                    <div class="mui-media-body">商品购物</div></a></li>
                <br>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <img src="../../img/menu4.png" alt="">
                    <div class="mui-media-body">留言反馈</div></a></li>

                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <img src="../../img/menu5.png" alt="">
                    <div class="mui-media-body">视频专区</div></a></li>

                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <img src="../../img/menu6.png" alt="">
                    <div class="mui-media-body">联系我们</div></a></li>

            </ul>
        </div>



    </div>
</template>
<script>
    import {Toast} from "mint-ui"

    export default{
        data(){
            return {
                //保存轮播图的数组
        lunbotuList:[]
            }
        },
        created(){
            this.getLunbotu();

        },
        methods:{
            getLunbotu(){
                // http://www.liulongbin.top:3005
                this.$http.get('http://www.liulongbin.top:3005/api/getlunbo').then(result=>{

                  if(result.body.status===0){
                      this.lunbotuList=result.body.message;
                      Toast("success")
                  }
                   else{
                       //获取失败
                      Toast("加载轮播图失败")
                  }
                })
            }
        }
    }
</script>

<style lang="css" scoped>


    .mint-swipe{
        height:400px;
    }

    .mint-swipe .mint-swipe-item:nth-child(1){
        background-color: red;

    }
    .mint-swipe .mint-swipe-item:nth-child(2){
        background-color: yellow;

    }
    .mint-swipe .mint-swipe-item:nth-child(3){
        background-color: paleturquoise;

    }
    .mint-swipe img{
        width: 100%;
        height: 100%;
    }
   .mui-grid-view.mui-grid-9{
       background-color: #fff;
       border: 1px solid #000;

   }
    .mui-grid-view.mui-grid-9 img{
        width: 60px;
        height: 60px;
    }
    .mui-media-body{
        font-size: 13px;
    }

    .mui-grid-view.mui-grid-9 .mui-table-view-cell {
        margin: 0 30px;

        border: 0;
    }

</style>