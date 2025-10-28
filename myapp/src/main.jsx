import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Layout general y páginas
import PublicLayout from './PublicLayout.jsx';
import Oraculo from './Oraculo.jsx';
import LoginPage from './LoginPage.jsx';

// 📰 Noticias
import Noticias from './andres/Noticias.jsx';
import NoticiaDetalle from './andres/NoticiaDetalle.jsx';
import noticiasData from './andres/noticiasData.js';

// 🌐 Centro Social
import CentroSocial from './andres/CentroSocial.jsx';

// Estilos globales y Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        {/* Layout público con navegación */}
        <Route path="/" element={<PublicLayout />}>
          <Route index element={<Noticias noticias={noticiasData} />} />
          <Route path="noticias" element={<Noticias noticias={noticiasData} />} />
          <Route path="noticias/:id" element={<NoticiaDetalle noticias={noticiasData} />} />
          <Route path="oraculo" element={<Oraculo />} />
          <Route path="centro-social" element={<CentroSocial />} />
          <Route path="tabla" element={<h2>📊 Tabla próximamente</h2>} />
          <Route path="programacion" element={<h2>⚽ Programación próximamente</h2>} />
        </Route>

        {/* Página de Login fuera del layout */}
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
