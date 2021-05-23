<template>
  <div>
  <section class="order">
    <HeaderTop title="订单列表">
</HeaderTop>
    <section class="order_no_login">
        <img src="./images/person.png">
        <h3>登录后查看外卖订单</h3>
      <router-link to="/login" class='login_botton'>立即登陆</router-link>
    </section>
  </section>
</div>
</template>

<script>
import HeaderTop from '../../components/HearderTop/HearderTop'
export default {
  components:{
    HeaderTop
  }
}
</script>

<style>
.order {
  width: 100%;
}

.order .order_no_login {
  padding-top: 140px;
  width: 60%;
  margin: 0 auto;
  text-align: center;
}
.order .order_no_login >img {
  display: block;
  width: 100%;
  height: 30%;
}
.order .order_no_login >h3 {
  padding: 10px 0;
  font-size: 17px;
  color: #6a6a6a;
}
.order .order_no_login .login_botton {
  display: inline-block;
  background: #ffc107;
  font-size: 14px;
  color: #fff;
  border: 0;
  outline: none;
  border-radius: 5px;
  padding: 10px 20px;
}

</style>
