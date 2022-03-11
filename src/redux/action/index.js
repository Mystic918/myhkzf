
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