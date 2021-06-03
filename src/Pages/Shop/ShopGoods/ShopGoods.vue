<template>
  <div>
    <div class="goods">
      <div class="menu-wrapper" ref="menuWrapper">
        <!-- 菜单对应的是食物分类列表-->
        <ul>
         <!--current-->
          <li class="menu-item" v-for="(good, index) in goods"   :key="index">
            <span class="text bottom-border-1px">
              <img class="icon" :src="good.icon" v-if="good.icon">
              {{good.name}}
            </span>
          </li>
        </ul>
      </div>
      <div class="foods-wrapper" ref="foodsWrapper">
        <!-- 右侧的食物列表是根据左侧的分类列表展现的-->
        <!-- 所以右侧是在一个分类标题列表里面嵌套着各类食物列表-->
        <ul ref="foodsUl">
          <li class="food-list-hook" v-for="(good, index) in goods" :key="index">
            <h1 class="title">{{good.name}}</h1>
            <ul>
              <li class="food-item bottom-border-1px" v-for="(food, index) in good.foods"
                  :key="index" @click="showFood(food)">
                <div class="icon">
                  <img width="57" height="57" :src="food.icon">
                </div>
                <div class="content">
                  <h2 class="name">{{food.name}}</h2>
                  <p class="desc">{{food.description}}</p>
                  <div class="extra">
                    <span class="count">月售{{food.sellCount}}份</span>
                    <span>好评率{{food.rating}}%</span>
                  </div>
                  <div class="price">
                    <span class="now">￥{{food.price}}</span>
                    <span class="old" v-if="food.oldPrice">￥{{food.oldPrice}}</span>
                  </div>
                  <div class="cartcontrol-wrapper">
                    <CartControl :food="food"></CartControl>
                  </div>
                </div>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <ShopCart></ShopCart>
    </div>
    <Food :food="food" ref="food"/>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
import {mapState} from 'vuex'
import CartControl from '../../../components/CartControl/CartControl'
import Food from '../../../components/Food/Food.vue'
import ShopCart from '../../../components/ShopCart/ShopCart.vue'
  export default {
    data () {
    return {
      food: {} // 需要显示的food
    }
    },
    mounted () {
      // 使用 axios 请求 mockjs 提供的接口
      this.$store.dispatch('getShopGoods',() => {// 数据更新后执行
        this.$nextTick(() => { // 列表数据更新显示后执行
          new BScroll('.menu-wrapper', {
            click: true
          })
          new BScroll('.foods-wrapper', {
            click: true
          })
          })
      })
    },
    computed: {
      ...mapState(['goods']),
      
    },
    methods:{
      showFood (food) {
      // 设置要传递给food组件的数据
      this.food = food
      // 显示food组件 (在父组件中调用子组件对象的方法)
      this.$refs.food.toggleShow()
    }
  },
  components:{
    CartControl,
    Food,
    ShopCart
  }
  }
</script>

<style>
.goods {
  display: flex;
  position: absolute;
  top: 195px;
  bottom: 46px;
  width: 100%;
  background: #fff;
  overflow: scroll;
}
.goods .menu-wrapper {
  flex: 0 0 80px;
  width: 80px;
  background: #f3f5f7;
}
.goods .menu-wrapper .menu-item {
  display: table;
  height: 54px;
  width: 56px;
  padding: 0 12px;
  line-height: 14px;
}
.goods .menu-wrapper .menu-item.current {
  position: relative;
  z-index: 10;
  margin-top: -1px;
  background: #fff;
  color: darkorange;
  font-weight: 700;
}
.goods .menu-wrapper .menu-item .icon {
  display: inline-block;
  vertical-align: top;
  width: 12px;
  height: 12px;
  margin-right: 2px;
  background-size: 12px 12px;
  background-repeat: no-repeat;
}
.goods .menu-wrapper .menu-item .text {
  display: table-cell;
  width: 56px;
  vertical-align: middle;
  color:rgba(7,17,27,0.1);
  font-size: 12px;
}
.goods .foods-wrapper {
  flex: 1;
}
.goods .foods-wrapper .title {
  padding-left: 14px;
  height: 26px;
  line-height: 26px;
  border-left: 2px solid #d9dde1;
  font-size: 12px;
  color: #93999f;
  background: #f3f5f7;
}
.goods .foods-wrapper .food-item {
  display: flex;
  margin: 18px;
  padding-bottom: 18px;
  color:rgba(7,17,27,0.1)
}
.goods .foods-wrapper .food-item:last-child {
  margin-bottom: 0;
}
.goods .foods-wrapper .food-item .icon {
  flex: 0 0 57px;
  margin-right: 10px;
}
.goods .foods-wrapper .food-item .content {
  flex: 1;
}
.goods .foods-wrapper .food-item .content .name {
  margin: 2px 0 8px 0;
  height: 14px;
  line-height: 14px;
  font-size: 14px;
  color: #07111b;
}
.goods .foods-wrapper .food-item .content .desc,
.goods .foods-wrapper .food-item .content .extra {
  line-height: 10px;
  font-size: 10px;
  color: #93999f;
}
.goods .foods-wrapper .food-item .content .desc {
  line-height: 12px;
  margin-bottom: 8px;
}
.goods .foods-wrapper .food-item .content .extra .count {
  margin-right: 12px;
}
.goods .foods-wrapper .food-item .content .price {
  font-weight: 700;
  line-height: 24px;
}
.goods .foods-wrapper .food-item .content .price .now {
  margin-right: 8px;
  font-size: 14px;
  color: #f01414;
}
.goods .foods-wrapper .food-item .content .price .old {
  text-decoration: line-through;
  font-size: 10px;
  color: #93999f;
}
.goods .foods-wrapper .food-item .content .cartcontrol-wrapper {
  position: absolute;
  right: 0;
  bottom: 12px;
}

</style>