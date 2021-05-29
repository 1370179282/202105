<template>
  <section class="msite">
    <!--首页头部title-->
    <!--由msite_header改成header-->
    <HeaderTop :title="address.name">
      <span class="header_search" slot="left">
        <i class="iconfont icon-icon-test2"></i>
      </span>
      <span class="header_login" slot="right">
        <span class="header_login_text">登录|注册</span>
      </span>
    </HeaderTop>
    <!--首页导航轮播-->
    <nav class="msite_nav">
      <div class="swiper-container" v-if="categorys.length">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(pages,index) in categorysArr" :key="index">
            <a href="javascript:" class="link_to_food" v-for="(data,index) in pages" :key="index">
              <div class="food_container">
                <img :src="baseImageUrl+data.image_url">
              </div>
              <span>{{data.title}}</span>
            </a>
            <!--同样省略-->
          </div>
        </div>
        <!-- 轮播图页码 -->
        <div class="swiper-pagination"></div>
      </div>
      <img src="./images/msite_back.svg" alt="back" v-else>
    </nav>
    <!--首页附近商家列表-->
    <div class="msite_shop_list">
      <div class="shop_header">
        <i class="iconfont icon-xuanxiang"></i>
        <span class="shop_header_title">附近商家</span>
      </div>
    </div>
    <ShopList></ShopList>
    
  </section>
</template>

<script>
import HeaderTop from "../../components/HearderTop/HearderTop";
import ShopList from "../../components/ShopList/ShopList";
import Swiper from 'swiper';
import 'swiper/swiper.min.css'
import {mapState} from 'vuex'

export default {
  mounted(){
    this.$store.dispatch('getCategorys'),
    this.$store.dispatch('getShops')
  },
watch: {
  categorys (value) { // categorys数组中有数据了
      	// 但界面还没有异步更新
    this.$nextTick(() => {
  	// 一旦完成界面更新, 立即执行回调
      new Swiper('.swiper-container', {
      	autoplay: true,
      	pagination: {
      	el: '.swiper-pagination',
      	clickable: true
        }
      })
    })
  }
},
  components:{
    HeaderTop,
    ShopList
  },
  computed: {
      ...mapState(['address', 'categorys']),
      categorysArr () {
         // 1.先从当前组件中得到所有食品分类的一维数组
         const {categorys} = this
         // 2.准备一个空的二维数组--categorysArr
         const arr = []
         // 3.准备一个小数组--pages(最大长度为8)
         let minArr = []
         // 4.遍历categorys得到处理后的二维数组catagorysArr
         categorys.forEach(data => {
           // 如果当前小数组(pages)已经满了, 创建一个新的
           if (minArr.length === 8) {
             minArr = []
           }
           // 如果minArr是空的, 将小数组(pages)保存到大数组(categorysArr)中
           if (minArr.length === 0) {
             arr.push(minArr)
           }
           // 将当前分类信息保存到小数组(pages)中
           minArr.push(data)
         })
         return arr
      }
  },
  data () {
      return {
        baseImageUrl: 'https://fuss10.ecccvvlemecdn.com'
   	  }
  },
}
</script>

<style>
a{
  text-decoration: none;
}
.msite {
  width: 100%;
}

.msite_nav {
  margin-top: 45px;
  height: 200px;
  background: #fff;
}
.msite_nav .swiper-container {
  width: 100%;
  height: 100%;
}
.msite_nav .swiper-container .swiper-wrapper {
  width: 100%;
  height: 100%;
}
.msite_nav .swiper-container .swiper-wrapper .swiper-slide {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
}
.msite_nav .swiper-container .swiper-wrapper .swiper-slide .link_to_food {
  width: 25%;
}
.msite_nav .swiper-container .swiper-wrapper .swiper-slide .link_to_food .food_container {
  display: block;
  width: 100%;
  text-align: center;
  padding-bottom: 10px;
  font-size: 0;
}
.msite_nav .swiper-container .swiper-wrapper .swiper-slide .link_to_food .food_container img {
  display: inline-block;
  width: 50px;
  height: 50px;
}
.msite_nav .swiper-container .swiper-wrapper .swiper-slide .link_to_food span {
  display: block;
  width: 100%;
  text-align: center;
  font-size: 13px;
  color: #666;
}
.msite_nav .swiper-container .swiper-pagination >span.swiper-pagination-bullet-active {
  background: #ffc107;
}
.msite_shop_list {
  margin-top: 10px;
  background: #fff;
}
.msite_shop_list .shop_header {
  padding: 10px 10px 0;
}
.msite_shop_list .shop_header .shop_icon {
  margin-left: 5px;
  color: #999;
}
.msite_shop_list .shop_header .shop_header_title {
  color: #999;
  font-size: 14px;
  line-height: 20px;
}



        
             
</style>
