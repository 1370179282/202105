<template>
  <div>
    <div>
      <div class='footguide'>
        <router-link to="/msite" href="javascript:;" class="guide_item">
          <span class="item_icon">
          <i class = "iconfont icon-icon-test" />
          </span>
          <span>外卖</span>
        </router-link>
        <router-link to="/order" href="javascript:;" class="guide_item">
          <span class="item_icon">
          <i class = "iconfont icon-icon-test1" />
          </span>
          <span>订单</span>
        </router-link>
        <router-link to="/search" href="javascript:;" class="guide_item">
          <span class="item_icon">
          <i class = "iconfont icon-icon-test2" />
          </span>
          <span>搜索</span>
        </router-link>
        <router-link to="/profile" href="javascript:;" class="guide_item">
          <span class="item_icon">
          <i class = "iconfont icon-wode-xianxing-4" />
          </span>
          <span>我的</span>
        </router-link>
      </div>
    </div>
  </div> 
</template>

<script>
</script>

<style>
.guide_item{
  text-decoration: none;
  flex:1;
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  z-index: 99;
}
.footguide{
  width: 100%;
  position: fixed;
  bottom:0%;
  display: flex;
  z-index: 99;
  background: white;
}
.footguide::before{
  position: absolute;
  content:"";
  left:0;
  top:0;
  width: 100%;
  height: 1px;
  background-color: darkgray;
  transform: scaleY(0.5);
  z-index:-2;
}/*实现上分割线*/
.footguide .iconfont{
  font-size: 30px;
  color: black;
}
span{
  font-size:12px;
  color:black;
}
/*实现导航选中高亮*/
.router-link-active .iconfont{
  color: #ffc107;
}

</style>
