import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Oraculo from './Oraculo.jsx'
import LoginPage from './LoginPage.jsx'
import PublicLayout from './PublicLayout.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PublicLayout />}>
          {/* <Route index element={<Home />} /> */}
          <Route path="oraculo" element={<Oraculo />} />
        </Route>

        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>    
  </StrictMode>,
)
