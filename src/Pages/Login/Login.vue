<template>
<section class="loginContainer">
  <div class="loginInner">
    <div class="login_header">
      <h2 class="login_logo">贝爷外卖</h2>
      <div class="login_header_title">
        <a href="javascript:;" :class="{on: loginWay}" @click="loginWay=true">短信登录</a>
        <a href="javascript:;" :class="{on: !loginWay}" @click="loginWay=false">密码登录</a>
      </div>
    </div>
    <div class="login_content">
    <form @submit.prevent = "login">
        <div :class="{on: loginWay}" v-if="loginWay">
            <section class="login_message">
              <input type="tel" maxlength="11" placeholder="手机号" v-model="phone">
              <button class="get_verification" :class="{right_phone:rightPhone}" :disabled="!rightPhone" @click.prevent="getCode">
                  {{computeTime>0 ? `(${computeTime}s)已发送` : '获取验证码'}}
                </button>
            </section>
            <section class="login_verification"> 
              <input type="tel" maxlength="8" placeholder="验证码" v-model="code">
            </section>
            <section class="login_hint">
              温馨提示：未注册贝爷外卖帐号的手机号，登录时将自动注册，且代表已同意
              <a href="javascript:;">《用户服务协议》</a>
            </section>
        </div>
        <div :class="{on: !loginWay}" v-else>
            <section>
              <section class="login_message">
                <input type="text" maxlength="11" placeholder="手机/邮箱/用户名" v-model="name">
              </section>
              <section class="login_verification">
                <input type="text" maxlength="8" placeholder="密码" v-if="showPwd" v-model="pwd">
                <input type="password" maxlength="8" placeholder="密码" v-else v-model="pwd">
                <div class="switch_button" :class="showPwd?'on':'off'" @click="showPwd=!showPwd">
                  <div class="switch_circle" :class="{right: showPwd}"></div>
                  <span class="switch_text">{{showPwd ? 'abc' : '...'}}</span>
                </div>
              </section>
              <section class="login_message">
                <input type="text" maxlength="11" placeholder="验证码" v-model="captcha">
                <img class="get_verification" src="http://localhost:4000/captcha" alt="captcha" ref="captcha" @click="getCaptcha">
              </section>
            </section>
          </div>
          <button class="login_submit">登录</button>
    </form>
    </div>
  </div>
  <AlertTip :alertText='alertText' v-show="alertShow" @closeTip="closeTip"></AlertTip>
</section>
</template>

<script>
import AlertTip from '../../components/AlertTip/AlertTip'
import {reqSendCode,reqSmsLogin,reqPwdLogin} from '../../api'
export default {
    
    data () {
	    return {
		    loginWay: true ,// true代表短信登陆, false代表密码
            phone: '',//手机号
            computeTime: 0,
            showPwd: false, // 是否显示密码
            pwd: '',
            name: '', // 用户名
            code: '', // 短信验证码
            captcha: '', // 图形验证码
            alertText: '',//提示文本
            alertShow: false, // 是否显示警告框
	    }
    },
    computed: {
    rightPhone () {
      // 利用正则对手机号进行匹配，返回布尔值
      return /^1\d{10}$/.test(this.phone)
    }
    },
    methods: {
        async getCode () {
       // 如果当前没有计时!this.computeTime等于this.computeTime === 0
         if(!this.computeTime) {
           // 启动倒计时
           this.computeTime = 30
           this.intervalId = setInterval(() => {
             this.computeTime--
             if(this.computeTime <= 0) {
               // 停止计时
               clearInterval(this.intervalId)
             }
           }, 1000)
         }
            // 发送ajax请求（向指定手机号发送验证码短信）
            const result= await reqSendCode(this.phone)
            if(result.code===1){
                //显示提示
                this.showAlert(result.msg)
                //停止计时
                if(this.computeTime){
                    this.computeTime=0
                    clearInterval(this.intervalId)
                    this.intervalId=undefined
                }
            }

        }, 
        showAlert(alertText){
            this.alertShow=true
            this.alertText=alertText
        },
        async login(){
          let result
          if(this.loginWay) {  // 短信登陆
   	        const {rightPhone,phone,code}=this
            if(!this.rightPhone) {
   		    // 手机号不正确
       	        this.showAlert('手机号输错了哦')
                return
   	        } else if(!/^\d{6}$/.test(code)) {
           // 验证必须是6位数字
                this.showAlert('验证码要六位数字哦')
                return
            }
            result = await reqSmsLogin(phone, code)
            }else {	// 密码登陆
                const {name,pwd,captcha}= this
                if(!this.name){
                    this.showAlert('用户名要指定的哦')
                    return
                }else if(!this.pwd){
                    this.showAlert('密码必须正确哦')
                    return
                }else if(!this.captcha){
                    this.showAlert('验证码必须正确哦')
                    return
                }
            result = await reqPwdLogin({name, pwd, captcha})
            }
            if (this.computeTime) {
                 this.computeTime = 0
                 clearInterval(this.intervalId)
                 this.intervalId = undefined
            }
                if(result.code===0){
                    const user =result.data
                    this.$store.dispatch('recordUser',user)
                    this.$router.replace('/profile')
                }else{
                    this.getCaptcha()
                    const msg=result.msg
                    this.showAlert(msg)
                }
        },
        closeTip () {
            this.alertShow = false
            this.alertText = ''
        },
        getCaptcha () {
  	// 每次指定的src要不一样
            this.$refs.captcha.src = 'http://localhost:4000/captcha?time='+Date.now()
        }
    },
    components:{
        AlertTip
    },

}
</script>
<style>
a{
    text-decoration: none;
}
.loginContainer {
  width: 100%;
  height: 100%;
  background: #fff;
}
.loginContainer .loginInner {
  padding-top: 60px;
  width: 80%;
  margin: 0 auto;
}
.loginContainer .loginInner .login_header .login_logo {
  font-size: 40px;
  font-weight: bold;
  color: #ffc107;
  text-align: center;
}
.loginContainer .loginInner .login_header .login_header_title {
  padding-top: 40px;
  text-align: center;
}
.loginContainer .loginInner .login_header .login_header_title >a {
  color: #333;
  font-size: 14px;
  padding-bottom: 4px;
}
.loginContainer .loginInner .login_header .login_header_title >a:first-child {
  margin-right: 40px;
}
.loginContainer .loginInner .login_header .login_header_title >a.on {
  color: #ffc107;
  font-weight: 700;
  border-bottom: 2px solid #ffc107;
}
.loginContainer .loginInner .login_content >form >div {
  display: none;
}
.loginContainer .loginInner .login_content >form >div.on {
  display: block;
}
.loginContainer .loginInner .login_content >form >div input {
  width: 100%;
  height: 100%;
  padding-left: 10px;
  box-sizing: border-box;
  border: 1px solid #ddd;
  border-radius: 4px;
  outline: 0;
  font: 400 14px Arial;
}
.loginContainer .loginInner .login_content >form >div input:focus {
  border: 1px solid #ffc107;
}
.loginContainer .loginInner .login_content >form >div .login_message {
  position: relative;
  margin-top: 16px;
  height: 48px;
  font-size: 14px;
  background: #fff;
}
.loginContainer .loginInner .login_content >form >div .login_message .get_verification {
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  border: 0;
  color: #ccc;
  font-size: 14px;
  background: transparent;
}
.loginContainer .loginInner .login_content >form >div .login_message .get_verification.right_phone {
  color: #000;
}
.loginContainer .loginInner .login_content >form >div .login_verification {
  position: relative;
  margin-top: 16px;
  height: 48px;
  font-size: 14px;
  background: #fff;
}
.loginContainer .loginInner .login_content >form >div .login_verification .switch_button {
  font-size: 12px;
  border: 1px solid #ddd;
  border-radius: 8px;
  transition: background-color 0.3s, border-color 0.3s;
  padding: 0 6px;
  width: 30px;
  height: 16px;
  line-height: 16px;
  color: #fff;
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
}
.loginContainer .loginInner .login_content >form >div .login_verification .switch_button.off {
  background: #fff;
}
.loginContainer .loginInner .login_content >form >div .login_verification .switch_button.off .switch_text {
  float: right;
  color: #ddd;
}
.loginContainer .loginInner .login_content >form >div .login_verification .switch_button.on {
  background: #ffc107;
}
.loginContainer .loginInner .login_content >form >div .login_verification .switch_button >.switch_circle {
  position: absolute;
  top: -1px;
  left: -1px;
  width: 16px;
  height: 16px;
  border: 1px solid #ddd;
  border-radius: 50%;
  background: #fff;
  box-shadow: 0 2px 4px 0 rgba(0,0,0,0.1);
  transition: transform 0.3s;
}
.loginContainer .loginInner .login_content >form >div .login_verification .switch_button >.switch_circle.right {
  transform: translateX(20px);
}
.loginContainer .loginInner .login_content >form >div .login_hint {
  margin-top: 12px;
  color: #999;
  font-size: 14px;
  line-height: 20px;
}
.loginContainer .loginInner .login_content >form >div .login_hint >a {
  color: #ffc107;
}
.loginContainer .loginInner .login_content >form .login_submit {
  display: block;
  width: 100%;
  height: 42px;
  margin-top: 30px;
  border-radius: 4px;
  background: #ffc107;
  color: #fff;
  text-align: center;
  font-size: 16px;
  line-height: 42px;
  border: 0;
}
.loginContainer .loginInner .login_content .about_us {
  display: block;
  font-size: 12px;
  margin-top: 20px;
  text-align: center;
  color: #999;
}
.loginContainer .loginInner .go_back {
  position: absolute;
  top: 5px;
  left: 5px;
  width: 30px;
  height: 30px;
}
.loginContainer .loginInner .go_back >.iconfont {
  font-size: 20px;
  color: #999;
}

</style>