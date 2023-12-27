import React, { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Home from './Components/Home.jsx'
import Product from './Components/Product.jsx'

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='product' element={<Product />} />
      </Routes>
    </>
  )
}

export default App
