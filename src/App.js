/*
 * @Descripttion: 
 * @version: v.1
 * @Author: 吴泽豪
 * @Date: 2022-03-08 21:43:31
 * @LastEditors: 吴泽豪
 * @LastEditTime: 2022-03-09 22:38:46
 */
import { Button } from 'antd-mobile'
import { BrowserRouter as Router, Route, Routes, Link , Outlet, Navigate} from 'react-router-dom'

import Home from './pages/Home'
import CityList from './pages/CityList'

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path='/home' element={<Home/>}/>
          <Route path='/home/*' element={<Home/>}/>
          <Route path='/citylist' element={<CityList/>}/>
          <Route path="/" element={<Navigate to="/home" />} />
          {/* <Outlet /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
