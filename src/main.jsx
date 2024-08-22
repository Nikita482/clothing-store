import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'

import Full from './Full/Full.jsx'
import Product from './Full/product/product.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router basename='/clothing-store'>
      <Routes>
        <Route path='/' element={<Full />} />
        <Route path='/Product' element={<Product />} />
      </Routes>
    </Router>
  </StrictMode>,
)
