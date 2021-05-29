import {reqAddress, reqCategorys, reqShops,reqposition} from '../api'
import {RECEIVE_ADDRESS, RECEIVE_CATEGORYS, RECEIVE_LATITUDE_LONGITUDE,  RECEIVE_SHOPS,RECEIVE_USER_INFO} from './mutation-types'
export default {
  //异步获取经度
  /*async getposition ({commit}) {
    const result = await reqposition()
    commit(RECEIVE_LATITUDE_LONGITUDE, {
      latitude: result.latitude,
      longitude: result.longitude
    }) 
  },*/
  // 异步获取地址
  async getAddress ({commit, state}) {
    // 从state状态中获取到经纬度用来设置reqAddress的参数（看接口文档）
    const geohash = state.latitude + ',' + state.longitude
    
    // 1. 发送异步ajax请求
    const result = await reqAddress(geohash)
    // 2. 根据结果提交一个mutation
    commit(RECEIVE_ADDRESS, {address: result.data})
  },
  // 异步获取分类列表
  async getCategorys ({commit}) {
    const result = await reqCategorys()
    commit(RECEIVE_CATEGORYS, {categorys: result.data})
  },
  // 异步获取商家列表
  async getShops ({commit, state}) {
    // 对象的解构赋值
    const {latitude, longitude} = state
    // 注意参数的顺序
    const result = await reqShops({latitude, longitude})
    commit(RECEIVE_SHOPS, {shops: result.data})
  },
  recordUser ({commit}, userInfo) {
    commit(RECEIVE_USER_INFO, {userInfo})
  }
}