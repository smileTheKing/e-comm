import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './component/Footer'
import NavBar from './component/NavBar'
import AboutPage from './page/AboutPage'
import ContactPage from './page/ContactPage'
//import NavBar from './component/NavBar'
import HomePage  from './page/HomePage'
import ShopPage from './page/ShopPage'
import WelcomePage from './page/WelcomePage'
import PrivatePage from './util/PrivatePage'
 

const App = () => {
  const [isLogin, setIsLogin] = useState(false)
  

  return (
    
      <BrowserRouter>
        <Routes>
        <Route path='/' element={[<NavBar/>,<Footer/>]}>
        <Route path='/about' element={<AboutPage/>}/>
        <Route path='/contact' element={<ContactPage/>}/>
        
        <Route path='/welcome' element={<WelcomePage setIsLogin={setIsLogin}/>}/>
        <Route element={<PrivatePage isLogin={isLogin} />}>
          <Route index element={<HomePage/>} replace/>
        </Route>
        <Route element={<PrivatePage isLogin={isLogin} />}>
          <Route path='/store' element={<ShopPage/>} replace/>
        </Route>

        <Route path="*" element={<div>404</div>} />
        </Route>
      
        </Routes>
      </BrowserRouter>
     
  )

  }
export default App