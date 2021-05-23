<template>
      <div class="shop_container">
        <ul class="shop_list">
          <li class="shop_li border-1px">
            <a>
              <div class="shop_left">
                <img class="shop_img" src="./images/logo.png">
              </div>
              <div class="shop_right">
                <section class="shop_detail_header">
                  <h4 class="shop_title ellipsis">锄禾日当午，汗滴禾下土</h4>
                  <ul class="shop_detail_ul">
                    <li class="supports">保</li>
                    <li class="supports">准</li>
                    <li class="supports">票</li>
                  </ul>
                </section>
                <section class="shop_rating_order">
                  <section class="shop_rating_order_left">
                    <div class="star star-24">
                      <span class="star-item on"></span>
                      <span class="star-item on"></span>
                      <span class="star-item on"></span>
                      <span class="star-item half"></span>
                      <span class="star-item off"></span>
                    </div>
                    <div class="rating_section">
                      3.6
                    </div>
                    <div class="order_section">
                      月售106单
                    </div>
                  </section>
                  <section class="shop_rating_order_right">
                    <span class="delivery_style delivery_right">贝爷专送</span>
                  </section>
                </section>
                <section class="shop_distance">
                  <p class="shop_delivery_msg">
                    <span>¥20起送</span>
                    <span class="segmentation">/</span>
                    <span>配送费约¥5</span>
                  </p>
                </section>
              </div>
            </a>
          </li>
          <!--省略其他店铺展示-->
        </ul>
      </div>
</template>

<script>
export default {

}
</script>

<style>
ul{
    list-style-type:none;
}
.shop_container {
  margin-bottom: 50px;
}
.shop_container .shop_list,
.shop_container .shop_li {
  width: 100%;
}
.shop_container .shop_list >a,
.shop_container .shop_li >a {
  display: block;
  box-sizing: border-box;
  padding: 15px 8px;
  width: 100%;
}
.shop_container .shop_list >a .shop_left,
.shop_container .shop_li >a .shop_left {
  float: left;
  box-sizing: border-box;
  width: 23%;
  height: 75px;
  padding-right: 10px;
}
.shop_container .shop_list >a .shop_left .shop_img,
.shop_container .shop_li >a .shop_left .shop_img {
  display: block;
  width: 100%;
  height: 100%;
}
.shop_container .shop_list >a .shop_right,
.shop_container .shop_li >a .shop_right {
  float: right;
  width: 77%;
}
.shop_container .shop_list >a .shop_right .shop_detail_header,
.shop_container .shop_li >a .shop_right .shop_detail_header {
  width: 100%;
}
.shop_container .shop_list >a .shop_right .shop_detail_header .shop_title,
.shop_container .shop_li >a .shop_right .shop_detail_header .shop_title {
  float: left;
  width: 200px;
  color: #333;
  font-size: 16px;
  line-height: 16px;
  font-weight: 700;
}
.shop_container .shop_list >a .shop_right .shop_detail_header .shop_title::before,
.shop_container .shop_li >a .shop_right .shop_detail_header .shop_title::before {
  content: '品牌';
  display: inline-block;
  font-size: 11px;
  line-height: 11px;
  color: #333;
  background-color: #ffd930;
  padding: 2px 2px;
  border-radius: 2px;
  margin-right: 5px;
}
.shop_container .shop_list >a .shop_right .shop_detail_header .shop_detail_ul,
.shop_container .shop_li >a .shop_right .shop_detail_header .shop_detail_ul {
  float: right;
  margin-top: 3px;
}
.shop_container .shop_list >a .shop_right .shop_detail_header .shop_detail_ul .supports,
.shop_container .shop_li >a .shop_right .shop_detail_header .shop_detail_ul .supports {
  float: left;
  font-size: 10px;
  color: #999;
  border: 1px solid #f1f1f1;
  padding: 0 2px;
  border-radius: 2px;
}
.shop_container .shop_list >a .shop_right .shop_rating_order,
.shop_container .shop_li >a .shop_right .shop_rating_order {
  width: 100%;
  margin-top: 18px;
  margin-bottom: 8px;
}
.shop_container .shop_list >a .shop_right .shop_rating_order .shop_rating_order_left,
.shop_container .shop_li >a .shop_right .shop_rating_order .shop_rating_order_left {
  float: left;
  color: #ff9a0d;
}
.shop_container .shop_list >a .shop_right .shop_rating_order .shop_rating_order_left .rating_section,
.shop_container .shop_li >a .shop_right .shop_rating_order .shop_rating_order_left .rating_section {
  float: left;
  font-size: 10px;
  color: #ff6000;
  margin-left: 4px;
}
.shop_container .shop_list >a .shop_right .shop_rating_order .shop_rating_order_left .order_section,
.shop_container .shop_li >a .shop_right .shop_rating_order .shop_rating_order_left .order_section {
  float: left;
  font-size: 10px;
  color: #666;
  transform: scale(0.8);
}
.shop_container .shop_list >a .shop_right .shop_rating_order .shop_rating_order_right,
.shop_container .shop_li >a .shop_right .shop_rating_order .shop_rating_order_right {
  float: right;
  font-size: 0;
}
.shop_container .shop_list >a .shop_right .shop_rating_order .shop_rating_order_right .delivery_style,
.shop_container .shop_li >a .shop_right .shop_rating_order .shop_rating_order_right .delivery_style {
  transform-origin: 35px 0;
  transform: scale(0.7);
  display: inline-block;
  font-size: 12px;
  padding: 1px;
  border-radius: 2px;
}
.shop_container .shop_list >a .shop_right .shop_rating_order .shop_rating_order_right .delivery_left,
.shop_container .shop_li >a .shop_right .shop_rating_order .shop_rating_order_right .delivery_left {
  color: #fff;
  margin-right: -10px;
  background-color: #02a774;
  border: 1px solid #02a774;
}
.shop_container .shop_list >a .shop_right .shop_rating_order .shop_rating_order_right .delivery_right,
.shop_container .shop_li >a .shop_right .shop_rating_order .shop_rating_order_right .delivery_right {
  color: #02a774;
  border: 1px solid #02a774;
}
.shop_container .shop_list >a .shop_right .shop_distance,
.shop_container .shop_li >a .shop_right .shop_distance {
  width: 100%;
  font-size: 12px;
}
.shop_container .shop_list >a .shop_right .shop_distance .shop_delivery_msg,
.shop_container .shop_li >a .shop_right .shop_distance .shop_delivery_msg {
  float: left;
  transform-origin: 0;
  transform: scale(0.9);
  color: #666;
}
.shop_container .shop_list >a .shop_right .shop_distance .segmentation,
.shop_container .shop_li >a .shop_right .shop_distance .segmentation {
  color: #ccc;
}

</style>