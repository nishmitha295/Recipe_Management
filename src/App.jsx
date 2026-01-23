import { useState } from 'react'
import './App.css'
import Signin from './components/login'
import Signup from './components/register'
import { Routes, Route } from 'react-router-dom'
import Recipies from './pages/reciepe'
import Dashboard from './pages/dashboard'



function App() {
  

  return (
    <>
<Routes>
  <Route path="/" element={<Signup />} />
  <Route path="/login" element={<Signin />} />
  <Route path="/recipe" element={<Recipies />} />
  <Route path="/dashboard" element={<Dashboard/>}/>
</Routes>

      </>
  )
}

export default App
