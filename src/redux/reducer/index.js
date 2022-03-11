/* 
    reducer 处理 action
    redux/reducer/index.js
*/

const initState = {
    value: '默认值'
}
const reducer = (state = initState, action)=>{
    console.log('进入 action ')
    switch(action.type){
        case 'send_type':
            console.log('处理action逻辑区')
            return Object.assign({}, state, action)
        default:
            return state
    }
}

module.exports = {
    reducer
}
