<template>
  <div>
    <section class="profile">
      <HeaderTop title="我的"></HeaderTop>
      <section class="profile-number">
        <router-link :to="userInfo._id ? '/userinfo': '/login'" href="javascript:" class="profile-link">
          <div class="profile_image">
            <i class="iconfont icon-wode-xianxing-4"></i>
          </div>
          <div class="user-info">
            <p class="user-info-top" v-if="!userInfo.phone">{{userInfo.name || '登录/注册'}}</p>
            <p>
              <span class="user-icon">
                <i class="iconfont icon-shouji"></i>
              </span>
              <span class="icon-mobile-number">{{userInfo.phone || '暂无绑定手机号'}}</span>
            </p>
          </div>
          <span class="arrow">
            <i class="iconfont icon-bianzu"></i>
          </span>
        </router-link>
      </section>
      <section class="profile_info_data border-1px">
        <ul class="info_data_list">
          <a href="javascript:" class="info_data_link">
            <span class="info_data_top"><span>0.00</span>元</span>
            <span class="info_data_bottom">我的余额</span>
          </a>
          <a href="javascript:" class="info_data_link">
            <span class="info_data_top"><span>0</span>个</span>
            <span class="info_data_bottom">我的优惠</span>
          </a>
          <a href="javascript:" class="info_data_link">
            <span class="info_data_top"><span>0</span>分</span>
            <span class="info_data_bottom">我的积分</span>
          </a>
        </ul>
      </section>
      <section class="profile_my_order border-1px">
        <!-- 我的订单 -->
        <a href='javascript:' class="my_order">
          <span>
            <i class="iconfont icon-zhangdan"></i>
          </span>
          <div class="my_order_div">
            <span>我的订单</span>
            <span class="my_order_icon">
              <i class="iconfont icon-bianzu"></i>
            </span>
          </div>
        </a>
        <!-- 积分商城 -->
        <a href='javascript:' class="my_order">
          <span>
            <i class="iconfont icon-liwu"></i>
          </span>
          <div class="my_order_div">
            <span>积分商城</span>
            <span class="my_order_icon">
              <i class="iconfont icon-bianzu"></i>
            </span>
          </div>
        </a>
        <!-- Mint外卖会员卡 -->
        <a href="javascript:" class="my_order">
          <span>
            <i class="iconfont icon-gouwu"></i>
          </span>
          <div class="my_order_div">
            <span>Mint外卖会员卡</span>
            <span class="my_order_icon">
              <i class="iconfont icon-bianzu"></i>
            </span>
          </div>
        </a>
      </section>
      <section class="profile_my_order border-1px">
        <!-- 服务中心 -->
        <a href="javascript:" class="my_order">
          <span>
            <i class="iconfont icon-tongxun"></i>
          </span>
          <div class="my_order_div">
            <span>服务中心</span>
            <span class="my_order_icon">
              <i class="iconfont icon-bianzu"></i>
            </span>
          </div>
        </a>
      </section>
    </section>
  </div>
</template>

<script>
import {mapState} from 'vuex'
import HeaderTop from '../../components/HearderTop/HearderTop'
export default {
  components:{
    HeaderTop
  },
  computed: {
    ...mapState(['userInfo'])
   }
}
</script>

<style>
a{
  text-decoration: none;
}
.profile {
  width: 100%;
  overflow: hidden;
}

.profile .profile-number {
  margin-top: 45.5px;
}
.profile .profile-number .profile-link {
  position: relative;
  display: block;
  background: #ffc107;
  padding: 40px 5px;
}
.profile .profile-number .profile-link .profile_image {
  float: left;
  width: 60px;
  height: 60px;
  margin-top: -38px;
}
.profile .profile-number .profile-link .profile_image .icon-wode-xianxing-4 {
  background:#ffc107;
  font-size: 62px;
}
.profile .profile-number .profile-link .user-info {
  float: left;
  margin-top: -38px;
  margin-left: 15px;
}
.profile .profile-number .profile-link .user-info p {
  font-weight: 700;
  font-size: 18px;
  color: #fff;
}
.profile .profile-number .profile-link .user-info p.user-info-top {
  padding-bottom: 4px;
}
.profile .profile-number .profile-link .user-info p .user-icon {
  display: inline-block;
  margin-left: -15px;
  margin-right: 5px;
  width: 20px;
  height: 20px;
}
.profile .profile-number .profile-link .user-info p .user-icon .icon-shouji {
  font-size: 15px;
  vertical-align: text-top;
  color:orange
}
.profile .profile-number .profile-link .user-info p .icon-msnui-tel {
  font-size: 14px;
  color: #fff;
}
.profile .profile-number .profile-link .arrow {
  width: 12px;
  height: 12px;
  position: absolute;
  right: 15px;
  top: 40%;
}
.profile .profile-number .profile-link .arrow .icon-bianzu {
  color: #fff;
  font-size: 5px;
}
.profile .profile_info_data {
  width: 100%;
  background: #fff;
  overflow: hidden;
}
.profile .profile_info_data .info_data_list .info_data_link {
  float: left;
  width: 33%;
  text-align: center;
  border-right: 1px solid #f1f1f1;
}
.profile .profile_info_data .info_data_list .info_data_link .info_data_top {
  display: block;
  width: 100%;
  font-size: 14px;
  color: #333;
  padding: 15px 5px 10px;
}
.profile .profile_info_data .info_data_list .info_data_link .info_data_top span {
  display: inline-block;
  font-size: 30px;
  color: #f90;
  font-weight: 700;
  line-height: 30px;
}
.profile .profile_info_data .info_data_list .info_data_link .info_data_bottom {
  display: inline-block;
  font-size: 14px;
  color: #666;
  font-weight: 400;
  padding-bottom: 10px;
}

.profile .profile_my_order {
  margin-top: 10px;
  background: #fff;
}
.profile .profile_my_order .my_order {
  display: flex;
  align-items: center;
  padding-left: 15px;
}
.profile .profile_my_order .my_order >span {
  display: flex;
  align-items: center;
  width: 20px;
  height: 20px;
}
.profile .profile_my_order .my_order >span >.iconfont {
  margin-left: -10px;
  font-size: 30px;
}
.profile .profile_my_order .my_order >span .icon-zhangdan {
  color: #269add;
}
.profile .profile_my_order .my_order >span .icon-liwu {
  color: #ff5f3e;
}
.profile .profile_my_order .my_order >span .icon-gouwu {
  color: #f90;
}
.profile .profile_my_order .my_order >span .icon-tongxun {
  color: #12dddd;
}
.profile .profile_my_order .my_order .my_order_div {
  width: 100%;
  border-bottom: 1px solid #f1f1f1;
  padding: 18px 10px 18px 0;
  font-size: 16px;
  color: #333;
  display: flex;
  justify-content: space-between;
}
.profile .profile_my_order .my_order .my_order_div span {
  display: block;
}
.profile .profile_my_order .my_order .my_order_div .my_order_icon {
  width: 10px;
  height: 10px;
}
.profile .profile_my_order .my_order .my_order_div .my_order_icon .icon-bianzu {
  color: #bbb;
  font-size: 10px;
}

</style>
