/*
 * @Descripttion: 
 * @version: v.1
 * @Author: 吴泽豪
 * @Date: 2022-03-09 22:05:29
 * @LastEditors: 吴泽豪
 * @LastEditTime: 2022-03-09 23:21:15
 */
import React, { Component } from 'react'
import { Swiper, Image, Grid, Button } from 'antd-mobile'
import { getSwipers } from '../../api/home/index'
import  './index.css'
import nav1 from '../../assets/images/nav-1.png'
import nav2 from '../../assets/images/nav-2.png'
import nav3 from '../../assets/images/nav-3.png'
import nav4 from '../../assets/images/nav-4.png'
import store from '../../redux/store/index'
import { sendAction } from '../../redux/action/index'
export default class Index extends Component {
  menu = [
    {title: 'Whole', url: nav1 },
    {title: 'Sharing', url: nav2},
    {title: 'Find', url: nav3},
    {title: 'Find', url: nav4},
  ]
  state = {
    swiperList: []
  }
  componentDidMount(){
    this.getRenderSwiper()
    //监听 store
    store.subscribe(()=>{
        console.log(store.getState())
    })
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
  sendRedux = ()=>{
    //触发store.dispatch提交action, redux 将 action 连接给 store
    const action = sendAction()
    store.dispatch(action)
  }

  render() {
    return (
      <div>
        {/* 轮播图 */}
          <Swiper loop autoplay>{this.state.swiperList}</Swiper>
          {/* 菜单 */}
          <Grid columns={4} gap={8} style={{'margin': '10px auto'}}>
            {
              this.menu.map(item=>{
                return (
                  <Grid.Item style={{margin:'auto'}}>
                    <Image
                      src={item.url}
                      width={49}
                      height={49}
                      fit='cover'
                      style={{ borderRadius: 8}}
                    />
                  </Grid.Item>
                )
              })
            }
        </Grid>
        <button onClick={this.sendRedux}>点b击</button>
      </div>
    )
  }
}
