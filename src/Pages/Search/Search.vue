<template>
  <section class="search">
    <HeaderTop title="搜索"></HeaderTop>
    <form class="search_form" @submit.prevent="search">
      <input type="search" name="search" placeholder="请输入商家或美食名称"
    class="search_input" v-model="keyword">
      <input type="submit" class="search_submit">
    </form>
    <section class="list" v-if="!noSearchShops">
      <ul class="list_container">
        <!--:to="'/shop?id='+item.id"-->
        <router-link :to="{path:'/shop', query:{id:item.id}}" tag="li"
        v-for="item in searchShops" :key="item.id" class="list_li">
          <section class="item_left">
            <img :src="imgBaseUrl + item.image_path" class="restaurant_img">
          </section>
          <section class="item_right">
            <div class="item_right_text">
              <p>
                <span>{{item.name}}</span>
              </p>
              <p>月售 {{item.month_sales||item.recent_order_num}} 单</p>
              <p>{{item.delivery_fee||item.float_minimum_order_amount}} 元起送 / 距离{{item.distance}}</p>
            </div>
          </section>
        </router-link>
      </ul>
    </section>
    <div class="search_none" v-else>很抱歉！无搜索结果</div>
</section>
</template>

<script>
import HeaderTop from '../../components/HearderTop/HearderTop'
import {mapState} from 'vuex'
export default {
  components:{
    HeaderTop
  },
  methods: {
    search () {
      // 得到搜索关键字
      const keyword = this.keyword
      // 进行搜索
      if (keyword) {
        this.$store.dispatch('searchShops', keyword)
      }
    }
  },
  computed:{
    ...mapState(['searchShops']) 
  },
  data(){
    return {
      keyword:'',
      imgBaseUrl:'http://cangdu.org:8001/img/',
      noSearchShops: false
    }
  },
  watch: {
    searchShops (value) {
      if (!value.length) { // 没有数据
        this.noSearchShops = true
      } else { // 有数据
        this.noSearchShops = false
      }
    }
  },
}
</script>

<style>
.search {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.search .search_form {
  margin-top: 45px;
  background-color: #fff;
  padding: 12px 8px;
}
.search .search_form input {
  height: 35px;
  padding: 0 4px;
  border-radius: 2px;
  font-weight: bold;
  outline: none;
}
.search .search_form input.search_input {
  float: left;
  width: 79%;
  border: 4px solid #f2f2f2;
  font-size: 14px;
  color: #333;
  background-color: #f2f2f2;
}
.search .search_form input.search_submit {
  float: right;
  width: 18%;
  border: 4px solid #ffc107;
  font-size: 16px;
  color: #fff;
  background-color: #ffc107;
}
.search .list .list_container {
  background-color: #fff;
}
.search .list .list_container .list_li {
  display: flex;
  justify-content: center;
  padding: 10px;
}
.search .list .list_container .list_li .item_left {
  margin-right: 10px;
}
.search .list .list_container .list_li .item_left .restaurant_img {
  width: 50px;
  height: 50px;
  display: block;
}
.search .list .list_container .list_li .item_right {
  font-size: 12px;
  flex: 1;
}
.search .list .list_container .list_li .item_right .item_right_text p {
  line-height: 12px;
  margin-bottom: 6px;
}
.search .list .list_container .list_li .item_right .item_right_text p:last-child {
  margin-bottom: 0;
}
.search .search_none {
  margin: 0 auto;
  color: #333;
  background-color: #fff;
  text-align: center;
  margin-top: 0.125rem;
}


</style>
