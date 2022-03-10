/*
 * @Descripttion: 
 * @version: v.1
 * @Author: 吴泽豪
 * @Date: 2022-03-09 22:05:29
 * @LastEditors: 吴泽豪
 * @LastEditTime: 2022-03-09 23:21:15
 */
import React, { Component } from 'react'
import { Swiper, Image, Grid } from 'antd-mobile'
import { getSwipers } from '../../api/home/index'
import  './index.css'

export default class Index extends Component {
  menu = [
    {title: 'Whole', url: '../../assets/images/nav-1.png'},
    {title: 'Sharing', url: '../../assets/images/nav-2.png'},
    {title: 'Find', url: '../../assets/images/nav-3.png'},
    {title: 'Find', url: '../../assets/images/nav-4.png'},
  ]
  state = {
    swiperList: []
  }
  componentDidMount(){
    this.getRenderSwiper()
  }
  getRenderSwiper = async()=>{
    const result = await getSwipers()
    const resultList = result.map((item, index) => (
            <Swiper.Item key={index}>
                <div
                className='swiper'
                onClick={() => {
                    
                }}
                >
                <Image fit='fill'  height='170px' width='auto' src={item.imgSrc} />
                </div>
            </Swiper.Item>
            ))
            console.log(resultList)
            this.setState({swiperList: resultList})
  }
  render() {
    return (
      <div>
          <Swiper loop autoplay>{this.state.swiperList}</Swiper>
          <Grid columns={4} gap={8}>
            {
              this.menu.map(item=>{
                return (
                  <Grid.Item style={{margin:'auto'}}>
                    <Image
                      src={require(item.url)}
                      width={64}
                      height={64}
                      fit='cover'
                      style={{ borderRadius: 8}}
                    />
                  </Grid.Item>
                )
              })
            }
        </Grid>
      </div>
    )
  }
}
