/*
 * @Descripttion: 
 * @version: v.1
 * @Author: 吴泽豪
 * @Date: 2022-03-08 22:05:32
 * @LastEditors: 吴泽豪
 * @LastEditTime: 2022-03-08 23:17:51
 */
import React, { useState } from 'react'
import { Badge, TabBar } from 'antd-mobile'
import { Routes, Route, useNavigate } from 'react-router-dom'
import News from '../News'
import {
  AppOutline,
  MessageOutline,
  MessageFill,
  UnorderedListOutline,
  UserOutline,
  SearchOutline,
} from 'antd-mobile-icons'

export default function home() {
  const tabs = [
    {
      key: '/home',
      title: '首页',
      icon: <AppOutline />,
      badge: Badge.dot,
    },
    {
      key: 'todo',
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
      key: 'personalCenter',
      title: '我的',
      icon: <UserOutline />,
    }
  ]

  const history = useNavigate()
  const setRouteActive = (value) => {
    history.push(value)
  }
    return (
        <div>
            <Routes>
                <Route path='news' element={<News/>}></Route>
            </Routes>
            {/* tabbar */}
            <div className='tabbar'>
              <TabBar safeArea activeKey='todo' onChange={value => setRouteActive(value)}>
                {tabs.map(item => (
                  <TabBar.Item key={item.key} icon={item.icon} title={item.title} badge={item.badge} />
                ))}
              </TabBar>
            </div>
        </div>
    )
  }
