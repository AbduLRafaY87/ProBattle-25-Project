import { useState } from 'react'
import{ Routes, Route, Link } from 'react-router-dom';
import Navbar from './Navbar';



function App() {

  return (
    <>
   <Routes>
      <Route path='/' element={ <Navbar/> } />
      <Route path='/about' element={<h1>about </h1>} />
   </Routes>
    </>
  )
}

export default App
