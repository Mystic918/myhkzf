/*
 * @Descripttion: 
 * @version: v.1
 * @Author: 吴泽豪
 * @Date: 2022-03-16 20:52:46
 * @LastEditors: 吴泽豪
 * @LastEditTime: 2022-03-16 22:28:11
 */
/* 
    reducer 处理 action
    redux/reducer/index.js
*/

const initState = {
    value: 0
}
const reducer = (state = initState, action)=>{ 
    console.log('进入 action ')
    console.log(action)
    switch(action.type){
        case 'add_action':
            return {
                value: state.value + 1
            }
    }
    return state
}

module.exports = {
    reducer
}
