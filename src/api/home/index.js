/*
 * @Descripttion: 
 * @version: v.1
 * @Author: 吴泽豪
 * @Date: 2022-03-09 23:16:01
 * @LastEditors: 吴泽豪
 * @LastEditTime: 2022-03-09 23:21:00
 */
import request from "../../utlis/request";

export const getSwipers = ()=> {
    return request({url:'/home/swiper'})
}
