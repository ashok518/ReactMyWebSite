import './App.css';
import React from 'react'
import Navbar from './Navbar'
import { Routes,Route } from 'react-router-dom';
import Home from './Home';
import Services from './Services';
import About from './About';
import Contact from './Contact';



function App() {
  return (
    <>
    <Navbar/>
<Routes>
  <Route path='/' element={<Home/>}></Route>
  <Route path='/about' element={<About/>}></Route>
  <Route path='/contact' element={<Contact/>}></Route>
  <Route path='/services' element={<Services/>}></Route>
</Routes>
    </>
  )
}

export default App
