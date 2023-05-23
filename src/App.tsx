import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Hotels from './pages/Hotels'
import Hotel from './pages/Hotel'
import SignIn from './pages/SignIn'
import Password from './pages/Password'
import Success from './pages/Success'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/password" element={<Password />} />
        <Route path="/success" element={<Success />} />
        
        {/* <Route path="/hotels" element={<Hotels />} /> */}
        {/* <Route path="/hotels/:id" element={<Hotel />} /> */}
      </Routes>
    </BrowserRouter>
  )
}

export default App
