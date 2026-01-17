import { useState } from 'react'
import{ Routes, Route, Link } from 'react-router-dom';
import Homescreen from './home';



function App() {

  return (
    <>
   <Routes>
      <Route path='/' element={ <Homescreen/> } />
      <Route path='/about' element={<h1>about </h1>} />
   </Routes>
    </>
  )
}

export default App
