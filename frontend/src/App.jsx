import React from 'react'

import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './Home'
import About from './About'
import Register from './pages/Register'
import Login from './pages/Login'
import JobProviderDashboard from './pages/JobProviderDashboard'
import Navbar from './pages/Navbar'
import JobCreateForm from './pages/JobCreateForm'

const App = () => {
  return (
    <div>
      <Navbar/>
      <BrowserRouter>

   
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/job-provider-dashboard' element={<JobProviderDashboard/>}/>
        <Route path="/create-job" element={<JobCreateForm/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
