import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import "./HojasEstilo/PublicLayout.css"; 
import Fondo_Banner_Oscuro from "./Multimedia/Fondo_banner.png";
import Logo_Vertical from "./Multimedia/Logo_Vertical.png";
import { FiUser } from "react-icons/fi";
import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi";
import { useNavigate } from "react-router-dom";





const PublicLayout = () => {

const navigate = useNavigate();

  return (
    <div className="public-layout">
      {/* === Header Superior === */}
      <header className="zona-superior">
        <div className="header-logo-center">
            <div className="header-logo-container">
            <Link to="/" className="logo-link">
                <img src={Fondo_Banner_Oscuro} alt="Portal Deportivo" className="logo-img" />
            </Link>
            </div>
        </div>

        <Link to="/login" className="btn-iniciar-sesion">
            <FiUser style={{ marginRight: "8px" }} />
            Iniciar sesión
            </Link>

        </header>




      {/* === Barra de Navegación === */}
      <nav className="zona-menu">
        <NavLink
          to="/programacion"
          className={({ isActive }) => (isActive ? "activo" : "")}
        >
          Programación de Partidos
        </NavLink>
        <NavLink
          to="/noticias"
          className={({ isActive }) => (isActive ? "activo" : "")}
        >
          Noticias
        </NavLink>
        <NavLink
          to="/oraculo"
          className={({ isActive }) => (isActive ? "activo" : "")}
        >
          Oráculo
        </NavLink>
        <NavLink
          to="/tabla"
          className={({ isActive }) => (isActive ? "activo" : "")}
        >
          Tabla de Posiciones
        </NavLink>
      </nav>

      {/* === Contenido Principal === */}
      <main className="zona-principal">
        <Outlet />
      </main>

    {/* Footer */ }

    <footer className="footer-container">
        {/* Columna 1: Logo */}
        <div className="footer-column">
            <div className="footer-logo-container">
            <img src={Logo_Vertical} alt="Logo Vertical" className="footer-logo" />
            </div>
        </div>

        {/* Columna 2: Redes sociales */}
        <div className="footer-column">
            <p className="footer-title">Síguenos en Nuestras redes sociales</p>
            <div className="footer-social-icons">
            <a href="#"><FiFacebook /></a>
            <a href="#"><FiTwitter /></a>
            <a href="#"><FiInstagram /></a>
            </div>
        </div>

        {/* Columna 3: Equipo de desarrollo */}
        <div className="footer-column">
            <p className="footer-title">Equipo de Desarrollo</p>
            <button type="button" className="btn btn-dark" data-bs-toggle="modal" data-bs-target="#teamModal">
            Ver
            </button>

            {/* Modal */}
            <div className="modal fade" id="teamModal" tabIndex="-1" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title">Equipo de Desarrollo</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Cerrar"></button>
                </div>
                <div className="modal-body">
                    <div className="team-grid">
                    {/* Reemplaza con imágenes locales */}
                    <div className="team-member">
                        <img src="#" alt="Integrante 1" />
                        <p>Nombre 1</p>
                        <div className="social-icons"><FiFacebook /><FiTwitter /><FiInstagram /></div>
                    </div>
                    <div className="team-member">
                        <img src="#" alt="Integrante 2" />
                        <p>Nombre 2</p>
                        <div className="social-icons"><FiFacebook /><FiTwitter /><FiInstagram /></div>
                    </div>
                    <div className="team-member">
                        <img src="#" alt="Integrante 3" />
                        <p>Nombre 3</p>
                        <div className="social-icons"><FiFacebook /><FiTwitter /><FiInstagram /></div>
                    </div>
                    <div className="team-member">
                        <img src="#" alt="Integrante 4" />
                        <p>Nombre 4</p>
                        <div className="social-icons"><FiFacebook /><FiTwitter /><FiInstagram /></div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
    </footer>


    </div>


  );
};

export default PublicLayout;
