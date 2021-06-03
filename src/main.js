
import Vue from 'vue'
import App from './App'
import router from './router'
import $ from 'jquery'
import FastClick from 'fastclick'
FastClick.attach(document.body);
import './assets/Fontclass/iconfont.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import store from './store'
import {Button} from 'mint-ui'
import '../mock/mockServer'


Vue.component(Button.name, Button)

new Vue({
  el: '#app',
  render:h => h(App),
  router,
  $,
  store
})

 
