/* 
    redux 入口 store
    redux/store/index.js
*/
import { createStore } from 'redux'

import { reducer } from '../reducer/index'

const store = createStore(reducer)

export default store