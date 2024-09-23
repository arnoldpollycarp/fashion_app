import React from 'react'
import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import {Routes, Route} from 'react-router-dom'
import Login from './Pages/Login'
import Register from './Pages/Register'

import AOS from 'aos'
import 'aos/dist/aos.css'
import Home from './Pages/Home'
import SessionLayout from './Layout/SessionLayout'
import MainLayout from './Layout/MainLayout'
import DashboardLayout from './Layout/DashboardLayout'
import Dashboard from './Pages/Dashboard/Dashboard'
import Products from './Pages/Dashboard/Products'

function App() {
  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-out-sine",
      delay: 100,
    });
    AOS.refresh();
  })
  return (
    <>
    
      <Routes>
        {/* home page layout  */}
        <Route element={<MainLayout/>}>
          <Route path='/' element={<Home /> } />
        </Route>
        {/* session page layout  */}
        <Route element={ <SessionLayout /> }>
          <Route path='/login' element={ <Login/> } />
          <Route path='/register' element={ <Register /> } />
        </Route>
        {/* Dashboard layout  */}
        <Route element={<DashboardLayout />}>
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/products' element={<Products />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
