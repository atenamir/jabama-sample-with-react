import React from 'react'
import { Routes , Route } from 'react-router-dom'

import Footer from './components/Footer'
import Home from './pages/Home.jsx'
import Details from './pages/Details.jsx'

function App() {
  return (
    <>
    
    <Routes >
      <Route path='/' element={<Home />} />
      <Route path='/details/:id' element={<Details />} />
    </Routes>
    <Footer />
    </>
  )
}

export default App