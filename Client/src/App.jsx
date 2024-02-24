import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Singup from './pages/Singup'
import Signin from './pages/Signin'
import Home from './pages/Home'
import Profile from './pages/Profile'
import About from './pages/About'
import Header from './components/Header'
export default function App() {
  return <BrowserRouter>
    <Header />
    <Routes>

      <Route path='/' element={<Home />} />
      <Route path='/sign-in' element={<Signin />} />
      <Route path='/sign-up' element={<Singup />} />
      <Route path='/about' element={<About />} />
      <Route path='/profile' element={<Profile />} />
    </Routes>
  </BrowserRouter>
}