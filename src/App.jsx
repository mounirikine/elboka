import { Route, Routes } from 'react-router-dom'
import { useState, useEffect } from 'react'
import './App.css'
import Home from './pages/Home'
import Work from './pages/Work'
import About from './pages/About'
import Contact from './pages/Contact'
import Loader from './components/Loader'

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 3000);

    return () => clearTimeout(timer)
  }, []);

  return (
    <>
      {loading && <Loader />} 
      {!loading && (
        <Routes>
          <Route path='/' element={<Home />} /> 
          <Route path='/work' element={<Work />} /> 
          <Route path='/about' element={<About />} /> 
          <Route path='/contact' element={<Contact />} /> 
        </Routes>
      )}
    </>
  )
}

export default App
