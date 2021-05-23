<template>
  <section class="msite">
    <!--首页头部title-->
    <!--由msite_header改成header-->
    <HeaderTop title="华南师范大学生活南区(华师1路)">
      <span class="header_search" slot="left">
        <i class="iconfont icon-icon-test2"></i>
      </span>
      <span class="header_login" slot="right">
        <span class="header_login_text">登录|注册</span>
      </span>
    </HeaderTop>
    <!--首页导航轮播-->
    <nav class="msite_nav">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <a href="javascript:" class="link_to_food">
              <div class="food_container">
                <img src="./images/logo.png">
              </div>
              <span>甜品饮品</span>
            </a>
            <a href="javascript:" class="link_to_food">
              <div class="food_container">
                <img src="./images/logo.png">
              </div>
              <span>商超便利</span>
            </a>
            <a href="javascript:" class="link_to_food">
              <div class="food_container">
                <img src="./images/logo.png">
              </div>
              <span>商超便利</span>
            </a>
            <a href="javascript:" class="link_to_food">
              <div class="food_container">
                <img src="./images/logo.png">
              </div>
              <span>商超便利</span>
            </a>
            <a href="javascript:" class="link_to_food">
              <div class="food_container">
                <img src="./images/logo.png">
              </div>
              <span>商超便利</span>
            </a><a href="javascript:" class="link_to_food">
              <div class="food_container">
                <img src="./images/logo.png">
              </div>
              <span>商超便利</span>
            </a><a href="javascript:" class="link_to_food">
              <div class="food_container">
                <img src="./images/logo.png">
              </div>
              <span>商超便利</span>
            </a><a href="javascript:" class="link_to_food">
              <div class="food_container">
                <img src="./images/logo.png">
              </div>
              <span>商超便利</span>
            </a>
            <!--同样省略-->
          </div>
        </div>
        <!-- 轮播图页码 -->
        <div class="swiper-pagination"></div>
      </div>
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

export default {
  mounted(){
    //创建一个swiper实例来实现轮播
    new Swiper('.swiper-container', {
      autoplay: true,
      // 如果需要分页器
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      }
   })
  },
  components:{
    HeaderTop,
    ShopList
  }
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
