import './App.css'
import React, { useState } from 'react'


function App() {
  const [showOraculo, setShowOraculo] = useState(false);

  const toggleOraculo = () => {
    setShowOraculo(!showOraculo);
  }

  return (
    <div>
      {/* Zona Superior */}
      <div className="zona zona-superior">
        <div style={{
          flex: 1,
          textAlign: 'center',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100%'
        }}>
          <img
          src="/titulo.png"
          alt="logo"
          style={{
            height: '100%',
            objectFit: 'contain'
          }}
        />
      </div>
      <div className="perfil">Perfil</div>
      </div>

      {/* Zona Menú */}
      <div className="zona zona-menu">
        <div>Programación de Partidos</div>
        <div>Noticias</div>
        <div>Oráculo</div>
        <div>Centro Social</div>
        <div>Tabla de Posiciones</div>
        <div>Más</div>
      </div>

      {/* Zona Partidos Recientes */}
      <div className="zona zona-partidos">
        <div className="partido">⚽ Escudo1 - 2 : 1 - Escudo2</div>
        <div className="partido">⚽ Escudo1 - 0 : 0 - Escudo2</div>
        <div className="partido">⚽ Escudo1 - 3 : 2 - Escudo2</div>
        <div className="partido">⚽ Escudo1 - 1 : 4 - Escudo2</div>
      </div>

      {/* Zona Artículos y Onboarding */}
      <div className="zona zona-articulos">
        <div>
          <div className="articulo-principal">
             <img src='/LuisDiaz.png' alt="Publicación Facebook" style={{width: '100%', height: 'auto'}} />
            <div className="titulo-articulo">Título de Artículo principal</div>
          </div>

          <div className="rejilla-articulos">
            {["Fútbol", "Internacional", "Estadísticas", "Noticias", "Champions", "La Liga", "Fichajes", "Opinión"].map((categoria, i) => (
              <div className="panel" key={i}>
                <div className="categoria">{categoria}</div>
                <div>Imagen</div>
                <div className="titulo">Título de artículo</div>
              </div>
            ))}
          </div>
        </div>

        <div className="pregunta-dia">
          <h3>Pregunta del día</h3>
          <p>Opción 1</p>
          <p>Opción 2</p>
        </div>
      </div>

      {/* Botón flotante Oráculo */}
      <div className="oraculo-boton" onClick={toggleOraculo}>
        Oráculo
      </div>

      {/* Chat Oráculo */}
      {showOraculo && (
        <div className="oraculo-chat" id="oraculoChat">
          <div className="oraculo-header">🤖 Oráculo</div>
          <div className="oraculo-body">
            <p>Pregúntale algo a Oráculo...</p>
            <p>*¿Cómo quedará el Chelsea?*</p>
            <p>*¿Cuáles son las últimas estadísticas de Lucho Díaz?*</p>
          </div>
          <div className="oraculo-input">
            <input type="text" placeholder="Escribe tu pregunta aquí..." />
          </div>
        </div>
      )}
    </div>
  )
}

export default App
