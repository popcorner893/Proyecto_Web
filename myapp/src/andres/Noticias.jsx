import React from "react";
import { Link } from "react-router-dom";
import "../HojasEstilo/Noticias.css";

export default function Noticias({ noticias: noticiasProp }) {
  const fallback = [
    {
      titulo: "Luis Díaz brilla con doblete en la Premier League",
      descripcion: "El colombiano marcó dos goles en la victoria del Liverpool sobre el Tottenham.",
      imagen: "/assets/noticias/luis_diaz_doblete.jpg",
      contenido: "Luis Díaz fue la figura del encuentro con dos anotaciones espectaculares..."
    },
    {
      titulo: "James Rodríguez lidera al São Paulo en la Copa Sudamericana",
      descripcion: "El mediocampista fue clave en la clasificación del club brasileño a semifinales.",
      imagen: "/assets/noticias/james_sao_paulo.jpg",
      contenido: "James comandó el ataque con gran visión de juego..."
    },
    {
      titulo: "Selección Colombia sube posiciones en el ranking FIFA",
      descripcion: "Tras su victoria ante Brasil, la tricolor ascendió al puesto número 11.",
      imagen: "/assets/noticias/colombia_fifa.jpg",
      contenido: "La selección dirigida por Néstor Lorenzo sigue en ascenso..."
    },
    {
      titulo: "Final de Champions: Real Madrid vs Manchester City",
      descripcion: "Dos gigantes europeos se enfrentan por la gloria continental.",
      imagen: "/assets/noticias/champions_final.jpg",
      contenido: "Será un duelo de titanes entre Guardiola y Ancelotti..."
    },
    {
      titulo: "Atlético Nacional anuncia nuevo refuerzo uruguayo",
      descripcion: "El delantero charrúa firmó por tres temporadas con el equipo paisa.",
      imagen: "/assets/noticias/nacional_refuerzo.jpg",
      contenido: "El nuevo delantero llega procedente del fútbol uruguayo..."
    },
    {
      titulo: "Messi vuelve a la acción con el Inter de Miami",
      descripcion: "El argentino regresó tras lesión y anotó un golazo en su reaparición.",
      imagen: "/assets/noticias/messi_miami.jpg",
      contenido: "Messi volvió a brillar con una actuación memorable..."
    }
  ];

  const noticias = noticiasProp && noticiasProp.length ? noticiasProp : fallback;

  return (
    <div className="noticias-container">
      <h2 style={{ color: "#16A34A" }}>📰 Últimas Noticias del Fútbol</h2>

      <div
        className="noticias-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: 18,
          marginTop: 18,
        }}
      >
        {noticias.map((n, index) => (
          <Link
            key={index}
            to={`/noticias/${index}`}
            className="noticia-card card"
            style={{ textDecoration: "none", color: "inherit", overflow: "hidden" }}
          >
            <img
              src={n.imagen}
              alt={n.titulo}
              style={{ width: "100%", height: 180, objectFit: "cover" }}
            />
            <div style={{ padding: 12 }}>
              <h3 style={{ margin: "0 0 8px 0", fontSize: 18 }}>{n.titulo}</h3>
              <p style={{ margin: 0, color: "#555", fontSize: 14 }}>
                {n.descripcion}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
