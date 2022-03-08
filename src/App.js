/*
 * @Descripttion: 
 * @version: v.1
 * @Author: 吴泽豪
 * @Date: 2022-03-08 21:43:31
 * @LastEditors: 吴泽豪
 * @LastEditTime: 2022-03-08 23:08:37
 */
import { Button } from 'antd-mobile'
import { BrowserRouter as Router, Route, Routes, Link , Outlet} from 'react-router-dom'

import Home from './pages/Home'
import CityList from './pages/CityList'

function App() {
  return (
    <Router>
      <div className="App">
        <Link to='/home'>home</Link>
        <Link to='/citylist'>citylist</Link>
        <Routes>
          <Route path='/home' element={<Home/>}/>
          <Route path='/home/*' element={<Home/>}/>
          <Route path='/citylist' element={<CityList/>}/>
          {/* <Outlet /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
