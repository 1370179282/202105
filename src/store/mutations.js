import {RECEIVE_ADDRESS,
		RECEIVE_CATEGORYS,
		RECEIVE_SHOPS,
		RECEIVE_USER_INFO,
		RECEIVE_LATITUDE_LONGITUDE} 
from './mutation-types'

export default {
	[RECEIVE_ADDRESS](state, {address}) {
		state.address = address
	},
	[RECEIVE_CATEGORYS](state, {categorys}) {
		state.categorys = categorys
	},
	[RECEIVE_SHOPS](state, {shops}) {
		state.shops = shops
	},
	[RECEIVE_LATITUDE_LONGITUDE](state, {latitude,longitude}) {
		state.latitude = latitude
		state.longitude = longitude
	},
	[RECEIVE_USER_INFO] (state, {userInfo}) {
		state.userInfo = userInfo
	}
}