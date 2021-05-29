import axios from 'axios';
export default function ajax(url = '',data = {}, type= 'GET'){
    return new Promise(function(resolve,reject){
        let promise;
        if(type === 'GET'){
            let dataStr='';
            Object.keys(data).forEach(key=>{
                dataStr=dataStr+key+'='+data[key]+'&';
            })
            if(dataStr !== ''){
                dataStr=dataStr.substring(0,dataStr.lastIndexOf('&'));
                url=url+'?'+dataStr;
            }
            promise = axios.get(url)
        }else{
            promise = axios.post(url,data)
        }
        promise.then(response=>{
            resolve(response.data)
        })
        .catch(error=>{
            reject(error)
        })
    })
}
/*export  function getPosition () {
    return new Promise((resolve, reject) => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
          let latitude = position.coords.latitude
          let longitude = position.coords.longitude
          let data = {
            latitude: latitude,
            longitude: longitude
          }
          resolve(data)
        }, function () {
          reject(arguments)
        })
      } else {
        reject('你的浏览器不支持当前地理位置信息获取')
      }
    })
  }*/