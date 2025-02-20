import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import Navbar from './Components/Navbar'
import Posts from './Components/Posts'
import PostDetail from './Components/PostDetail'
import NewBlog from './Components/NewBlog'
import ExchangeRates from './Components/ExchangeRates'
import Footer from './Components/Footer'
import './App.css'

function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Posts />}></Route>
        <Route path='/read/:id' element={<PostDetail />}></Route>
        <Route path='/newblog' element={<NewBlog />}></Route>
        <Route path='/exchangerates' element={<ExchangeRates />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
