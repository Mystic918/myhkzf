/*
 * @Descripttion: 
 * @version: v.1
 * @Author: 吴泽豪
 * @Date: 2022-03-08 22:05:32
 * @LastEditors: 吴泽豪
 * @LastEditTime: 2022-03-09 22:33:19
 */
import React, { useState } from 'react'
import { Badge, TabBar } from 'antd-mobile'
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom'
import News from '../News'
import Index from '../Index'
import HouseList from '../HouseList'
import Profile from '../Profile'

import {
  AppOutline,
  MessageOutline,
  MessageFill,
  UnorderedListOutline,
  UserOutline,
  SearchOutline,
} from 'antd-mobile-icons'

export default function Home() {
  const tabs = [
    {
      key: '/home',
      title: '首页',
      icon: <AppOutline />,
      badge: Badge.dot,
    },
    {
      key: '/home/list',
      title: '找房',
      icon: <SearchOutline />,
      badge: '5',
    },
    {
      key: '/home/news',
      title: '资讯',
      icon: (active) =>
        active ? <MessageFill /> : <MessageOutline />,
      badge: '99+',
    },
    {
      key: '/home/profile',
      title: '我的',
      icon: <UserOutline />,
    }
  ]
  // const [activeKey, setActiveKey] = useState('todo');
  const history = useNavigate()
  const {  pathname } = useLocation()
  const setRouteActive = (value) => {
    // setActiveKey(value)
    history(value)
  }
    return (
        <div>
            <Routes>
                <Route path='' element={<Index/>}></Route>
                <Route path='list' element={<HouseList/>}></Route>
                <Route path='profile' element={<Profile/>}></Route>
                <Route path='news' element={<News/>}></Route>
            </Routes>
            {/* tabbar */}
            <div className='tabbar'>
              <TabBar safeArea activeKey={pathname} onChange={value => setRouteActive(value)}>
                {tabs.map(item => (
                  <TabBar.Item key={item.key} icon={item.icon} title={item.title} badge={item.badge} />
                ))}
              </TabBar>
            </div>
        </div>
    )
  }
