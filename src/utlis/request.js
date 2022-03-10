/*
 * @Descripttion: 
 * @version: v.1
 * @Author: 吴泽豪
 * @Date: 2022-03-09 23:02:38
 * @LastEditors: 吴泽豪
 * @LastEditTime: 2022-03-09 23:23:10
 */
import axios from 'axios'
import { Toast } from 'antd-mobile'
const Axios = axios.create({
    baseURL: '/api',
    timeout: 5000,
    headers: {'X-Custom-Header': 'token'}
})

// 添加请求拦截器
Axios.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    return config;
  }, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  });

// 添加响应拦截器
Axios.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    if(response.status == '200'){
      return response.data.body;
    }
    Toast.show({
      content: response.status,
      afterClose: () => {
        console.log('请求异常')
      },
    })
  }, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
  });

  export default function(options){
    const { url, methods = 'get', data } = options
    if(!url)return false
    return new Promise(resolve=>{
        if(methods.toLowerCase() == 'post'){
            Axios.post(url, data).then(response=>{
              resolve(response)
            })
        }else{
            Axios.get(url).then(function(response) {
              console.log(response)
              resolve(response)
            });
        }
    })
}
