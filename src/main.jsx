import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import Page1 from './pages/page1.jsx'

import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router basename='/clothing-store'>

      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/Page1' element={<Page1 />} />
      </Routes>
    </Router>
  </StrictMode>,
)
