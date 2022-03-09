/*
 * @Descripttion: 
 * @version: v.1
 * @Author: 吴泽豪
 * @Date: 2022-03-09 22:05:29
 * @LastEditors: 吴泽豪
 * @LastEditTime: 2022-03-09 23:21:15
 */
import React from 'react'

import { Swiper } from 'antd-mobile'
import  './index.css'
import { getSwipers } from '../../api/home/index'
export default function Index() {

    getSwipers()
const colors = ['#ace0ff', '#bcffbd', '#e4fabd', '#ffcfac']

const items = colors.map((color, index) => (
  <Swiper.Item key={index}>
    <div
      className='swiper'
      style={{ background: color}}
      onClick={() => {
        
      }}
    >
    </div>
  </Swiper.Item>
))

  return (
    <div>
        <Swiper loop autoplay>{items}</Swiper>
    </div>
  )
}
