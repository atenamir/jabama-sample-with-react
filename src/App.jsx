import React from 'react'
import { Routes , Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home.jsx'
import Details from './pages/Details.jsx'

function App() {
  return (
    <>
    <Header />
    <Routes >
      <Route path='/' element={<Home />} />
      <Route path='/details/:id' element={<Details />} />
    </Routes>
    <Footer />
    </>
  )
}

export default App