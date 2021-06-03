<template>
  <div>
   	<ShopHeader></ShopHeader>
   	<div class="tab">
   		<div class="tab-item">
            <!-- 使用replace的方式进行路由切换 （路由懒加载） -->
   			<router-link to="/shop/goods" replace>点餐				</router-link>
   		</div>
   		<div class="tab-item">
   			<router-link to="/shop/ratings" replace>评价				</router-link>
   		</div>
   		<div class="tab-item">
   			<router-link to="/shop/info" replace>商家					</router-link>
   		</div>
   	</div>
       <!-- 缓存路由组件对象 -->
   	<keep-alive>
   		<router-view/>
   	</keep-alive>
   </div>
</template>

<script>

import ShopHeader from '../../components/ShopHeader/ShopHeader.vue'
export default {
    components: {
        ShopHeader
    },
    mounted () {
   	this.$store.dispatch('getShopInfo')
    },
}
</script>

<style>
.tab {
  height: 40px;
  line-height: 40px;
  background: #fff;
}
.tab .tab-item {
  float: left;
  width: 33.33333%;
  text-align: center;
  font-size: 14px;
  color: #1785f3;
}
.tab .tab-item a {
  display: block;
  position: relative;
  color:black
}
.tab .tab-item a.router-link-active {
  color: #ffc107;
}
.tab .tab-item a.router-link-active::after {
  content: '';
  position: absolute;
  left: 50%;
  bottom: 1px;
  width: 35px;
  height: 2px;
  transform: translateX(-50%);
  background: #ffc107;
}

</style>