
import React, { useState } from 'react'
import {  Routes, Route, useLocation } from 'react-router-dom'
import Home from './pages/user/Home'
import AdminDashboard from './pages/admin/AdminDashboard'
import AdminLogin from './pages/admin/AdminLogin'
import RiderLogin from './pages/delivery-person/RiderLogin'
import RiderDashboard from './pages/delivery-person/RiderDashboard'
import Navbar from './components/Navbar'
import AdminNavbar from './components/admin/AdminNavbar'
import RiderNavbar from './pages/delivery-person/RiderNavbar'
import Cart from './pages/user/Cart'
import PlaceOrder from './pages/user/PlaceOrder'
import Footer from './components/Footer'
import LoginPopup from './components/LoginPopup'
import Payment from './pages/user/Payment'

const AppLayout = () => {
  const location = useLocation()
  const [showLogin, setShowLogin] = useState(false)
  const [setShowLoginRider,setSetShowLoginRider]=useState(false)

  const renderNavbar = () => {
    if (location.pathname === '/admin/login' || location.pathname === '/rider/login') {
      return null
    } else if (location.pathname.startsWith('/admin')) {
      return <AdminNavbar />
    } else if (location.pathname.startsWith('/rider')) {
      return <RiderNavbar setSetShowLoginRider={setSetShowLoginRider} />
    } else {
      return <Navbar setShowLogin={setShowLogin} />
    }
  }

  const showFooter = !location.pathname.startsWith('/admin') && !location.pathname.startsWith('/rider')

  return (
    <div>
      
      {showLogin && <LoginPopup setShowLogin={setShowLogin} />}
      {renderNavbar()}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/order' element={<PlaceOrder />} />
        <Route path='/admin' element={<AdminDashboard />} />
        <Route path='/admin/login' element={<AdminLogin />} />
        <Route path='/rider' element={<RiderDashboard />} />
        <Route path='/rider/login' element={<RiderLogin />} />
        <Route path='/payment' element={<Payment/>}/>
      </Routes>
      {showFooter && <Footer />}
      
    </div>
  )
}

const App = () => {
  return (<AppLayout />)
}

export default App
