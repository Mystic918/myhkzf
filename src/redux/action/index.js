/*
 * @Descripttion: 
 * @version: v.1
 * @Author: 吴泽豪
 * @Date: 2022-03-16 20:52:46
 * @LastEditors: 吴泽豪
 * @LastEditTime: 2022-03-16 21:58:06
 */

/* 
    action 
    store.dispath 发布一个 action(sendAction) 
    reducer 处理 action
    redux/action/index.js
*/
const sendAction = ()=>{
    return {
        type: 'send_type',
        value: '我是sendActions'
    }
}

export { sendAction }