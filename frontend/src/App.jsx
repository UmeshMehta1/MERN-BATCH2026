import React from 'react'
import Navbar from './Navbar'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './Home'
import About from './About'
import Register from './pages/Register'

const App = () => {
  return (
    <div>
      <Navbar/>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/register' element={<Register/>}/>
      </Routes>
      </BrowserRouter>





    </div>
  )
}

export default App
