<template>
  <div class="cartcontrol">
    <!-- 有一个动画-->
    <transition name="move">
  	<div class="iconfont icon-shanchu" v-if="food.count" @click="updateFoodCount(false)"></div>
    </transition>
      <div class="cart-count" v-if="food.count" >{{food.count}}</div>
      <div class="iconfont icon-jijiu" @click="updateFoodCount(true)"></div>
  </div>
</template>

<script>
export default {
    props:{
        food:Object
    },
    methods:{
        updateFoodCount(isAdd){
            this.$store.dispatch('updateFoodCount',{isAdd, food:this.food})
        }
    }
}
</script>

<style>
.cartcontrol {
  font-size: 0;
}
.cartcontrol .cart-decrease {
  display: inline-block;
  padding: 6px;
  line-height: 24px;
  font-size: 24px;
  color: #00a0dc;
}
.cartcontrol .icon-removecircleoutline {
  display: inline-block;
  padding: 6px;
  line-height: 24px;
  font-size: 24px;
  color: green;
}
.cartcontrol .icon-removecircleoutline.move-enter-active,
.cartcontrol .icon-removecircleoutline.move-leave-active {
  transition: all 0.3s;
}
.cartcontrol .icon-removecircleoutline.move-enter,
.cartcontrol .icon-removecircleoutline.move-leave-to {
  opacity: 0;
  transform: translateX(15px) rotate(180deg);
}
.cartcontrol .cart-count {
  display: inline-block;
  vertical-align: top;
  width: 12px;
  padding-top: 6px;
  line-height: 24px;
  text-align: center;
  font-size: 10px;
  color: #93999f;
}
.cartcontrol .icon-addcircle {
  display: inline-block;
  padding: 6px;
  line-height: 24px;
  font-size: 24px;
  color: green;
}

</style>