/*
 * @Descripttion: 
 * @version: v.1
 * @Author: 吴泽豪
 * @Date: 2022-03-09 22:05:29
 * @LastEditors: 吴泽豪
 * @LastEditTime: 2022-03-16 22:23:48
 */
import { connect } from 'react-redux'
import React, { Component } from 'react'

class HouseList extends Component {
  render() {
    console.log(this.props)
    return (
      <div>{this.props.value}</div>
    )
  }
}



const mapStateToProps = (state)=>{
  console.log('home:' + state)
  return state
}

export default connect(mapStateToProps)(HouseList)
