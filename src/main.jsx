import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'

import Full from './Full/Full.jsx'
import Product from './Full/product/product.jsx'
import Info from './Full/fotter/info/info.jsx'


import Test from './Full/test/test.jsx'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router basename='/clothing-store'>
      <Routes>
        <Route path='/' element={<Full />} />
        <Route path='/Product' element={<Product />} />
        <Route path='/Info' element={<Info />} />
        <Route path='/Test' element={<Test />} />
      </Routes>
    </Router>
  </StrictMode>,
)
