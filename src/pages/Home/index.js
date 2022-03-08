/*
 * @Descripttion: 
 * @version: v.1
 * @Author: 吴泽豪
 * @Date: 2022-03-08 22:05:32
 * @LastEditors: 吴泽豪
 * @LastEditTime: 2022-03-08 23:17:51
 */
import React, { Component } from 'react'

import { Routes, Route } from 'react-router-dom'
import News from '../News'

export default class Home extends Component {
  render() {
    return (
        <div>
            Home
            <Routes>
                <Route path='news' element={<News/>}></Route>
            </Routes>
        </div>
    )
  }
}
