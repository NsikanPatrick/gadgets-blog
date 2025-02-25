import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import Navbar from './Components/Navbar'
import Posts from './Components/Posts'
import PostDetail from './Components/PostDetail'
import NewBlog from './Components/NewBlog'
import ExchangeRates from './Components/ExchangeRates'
import TodoList from './Components/Misc - useReducer/Todos'
import ShoppingCart from './Components/Misc - useReducer/ShoppingCart'
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
        <Route path='/todos' element={<TodoList />}></Route>
        <Route path='/shopping-cart' element={<ShoppingCart />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
