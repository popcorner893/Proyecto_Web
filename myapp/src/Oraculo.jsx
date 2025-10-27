import React, { useEffect, useState } from "react";
import Select from "react-select";
import "./HojasEstilo/Oraculo.css";
import * as tf from "@tensorflow/tfjs";
import scaler from "./Multimedia/scaler_params.json";

const Oraculo = () => {
  const [ligas, setLigas] = useState({});
  const [ligaSeleccionada, setLigaSeleccionada] = useState(null);
  const [equipo1, setEquipo1] = useState(null);
  const [equipo2, setEquipo2] = useState(null);
  const [resultado, setResultado] = useState(null);
  const [modelo, setModelo] = useState(null);
  const [cargandoModelo, setCargandoModelo] = useState(true);

  // === Cargar logos dinámicamente ===
  useEffect(() => {
    const logos = import.meta.glob("/src/Multimedia/Logos/**/*.png", { eager: true });
    const estructura = {};
    Object.entries(logos).forEach(([ruta, contenido]) => {
      const partes = ruta.split("/");
      const nombreLiga = partes[partes.length - 2].replace(/_/g, " ");
      const nombreArchivo = partes[partes.length - 1].replace(".png", "");
      const nombreLimpio = nombreArchivo.replace(/_/g, " ");
      if (!estructura[nombreLiga]) estructura[nombreLiga] = [];
      estructura[nombreLiga].push({
        label: nombreLimpio,
        value: nombreLimpio,
        logo: contenido.default,
      });
    });
    setLigas(estructura);
  }, []);

  // === Cargar modelo TensorFlow.js (GraphModel) ===
  useEffect(() => {
    const cargarModelo = async () => {
      try {
        const modelUrl = `${window.location.origin}/modelo_oraculo_tfjs/model.json`;
        console.log("Cargando modelo GraphModel desde:", modelUrl);
        const model = await tf.loadGraphModel(modelUrl);
        setModelo(model);
        setCargandoModelo(false);
        console.log("✅ Modelo cargado correctamente");
      } catch (err) {
        console.error("❌ Error al cargar el modelo:", err);
      }
    };
    cargarModelo();
  }, []);

  // === Fondo dinámico ===
  useEffect(() => {
  const canvas = document.getElementById("network-bg");
  if (!canvas) return;

  const parent = canvas.parentElement || canvas; // should be .oraculo-background
  const ctx = canvas.getContext("2d");

  function setSize() {
    const width = (canvas.width = parent.clientWidth || window.innerWidth);
    const height = (canvas.height = parent.clientHeight || window.innerHeight);
    return { width, height };
  }

  let { width, height } = setSize();

  // create points relative to container size
  const numPoints = 80;
  const points = Array.from({ length: numPoints }, () => ({
    x: Math.random() * width,
    y: Math.random() * height,
    vx: (Math.random() - 0.5) * 0.6,
    vy: (Math.random() - 0.5) * 0.6,
    radius: 2 + Math.random() * 2,
  }));

  let rafId = null;
  function draw() {
    ctx.clearRect(0, 0, width, height);
    // same drawing code but using width/height variables
    for (let i = 0; i < numPoints; i++) {
      for (let j = i + 1; j < numPoints; j++) {
        const dx = points[i].x - points[j].x;
        const dy = points[i].y - points[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 140) {
          ctx.strokeStyle = `rgba(0, 255, 100, ${1 - dist / 140})`;
          ctx.lineWidth = 0.4;
          ctx.beginPath();
          ctx.moveTo(points[i].x, points[i].y);
          ctx.lineTo(points[j].x, points[j].y);
          ctx.stroke();
        }
      }
    }
    for (let p of points) {
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fillStyle = "#00ff88";
      ctx.shadowBlur = 6;
      ctx.shadowColor = "#00ff88";
      ctx.fill();
      p.x += p.vx;
      p.y += p.vy;
      if (p.x < 0 || p.x > width) p.vx *= -1;
      if (p.y < 0 || p.y > height) p.vy *= -1;
    }
    rafId = requestAnimationFrame(draw);
  }

  const glowInterval = setInterval(() => {
    const p = points[Math.floor(Math.random() * points.length)];
    const oldRadius = p.radius;
    p.radius = oldRadius * 3;
    setTimeout(() => (p.radius = oldRadius), 300);
  }, 600);

  draw();

  const handleResize = () => {
    // recalc size and reposition points proportionally (simple approach: reset points)
    const newSize = setSize();
    width = newSize.width;
    height = newSize.height;
    // optionally re-randomize points to fill new size
    // for simplicity, clamp positions:
    for (let p of points) {
      p.x = Math.min(p.x, width);
      p.y = Math.min(p.y, height);
    }
  };
  window.addEventListener("resize", handleResize);

  return () => {
    clearInterval(glowInterval);
    window.removeEventListener("resize", handleResize);
    if (rafId) cancelAnimationFrame(rafId);
  };
}, []);


  // === Función de predicción ===
const handlePrediccion = async () => {
  if (!equipo1 || !equipo2) {
    alert("Por favor selecciona ambos equipos.");
    return;
  }
  if (!modelo) {
    alert("El modelo aún no está cargado.");
    return;
  }

  try {
    // 1️⃣ Simulación de features (ejemplo)
    const features = {
      HomeElo: Math.random() * 2000,
      AwayElo: Math.random() * 2000,
      Form3Home: Math.random() * 3,
      Form5Home: Math.random() * 5,
      Form3Away: Math.random() * 3,
      Form5Away: Math.random() * 5,
      Home_Shots_last3_sum: Math.random() * 30,
      Home_Target_last3_sum: Math.random() * 15,
      Home_Fouls_last3_sum: Math.random() * 30,
      Home_Corners_last3_sum: Math.random() * 15,
      Home_Yellow_last3_sum: Math.random() * 5,
      Home_Red_last3_sum: Math.random() * 2,
      Home_GoalsFor_last3_sum: Math.random() * 10,
      Home_GoalsAgainst_last3_sum: Math.random() * 10,
      Home_Shots_last3_mean: Math.random() * 10,
      Home_Target_last3_mean: Math.random() * 5,
      Home_Fouls_last3_mean: Math.random() * 10,
      Home_Corners_last3_mean: Math.random() * 5,
      Home_Yellow_last3_mean: Math.random() * 2,
      Home_Red_last3_mean: Math.random(),
      Home_GoalsFor_last3_mean: Math.random() * 4,
      Home_GoalsAgainst_last3_mean: Math.random() * 4,
      Away_Shots_last3_sum: Math.random() * 30,
      Away_Target_last3_sum: Math.random() * 15,
      Away_Fouls_last3_sum: Math.random() * 30,
      Away_Corners_last3_sum: Math.random() * 15,
      Away_Yellow_last3_sum: Math.random() * 5,
      Away_Red_last3_sum: Math.random() * 2,
      Away_GoalsFor_last3_sum: Math.random() * 10,
      Away_GoalsAgainst_last3_sum: Math.random() * 10,
      Away_Shots_last3_mean: Math.random() * 10,
      Away_Target_last3_mean: Math.random() * 5,
      Away_Fouls_last3_mean: Math.random() * 10,
      Away_Corners_last3_mean: Math.random() * 5,
      Away_Yellow_last3_mean: Math.random() * 2,
      Away_Red_last3_mean: Math.random(),
      Away_GoalsFor_last3_mean: Math.random() * 4,
      Away_GoalsAgainst_last3_mean: Math.random() * 4,
    };

    

    // 3️⃣ Asegura el orden correcto de features
    const featureArray = scaler.feature_names.map((name) => features[name]);
    const standardized = featureArray.map(
      (val, i) => (val - scaler.mean[i]) / scaler.scale[i]
    );

    // 5️⃣ Crea el tensor con los datos escalados
    const inputTensor = tf.tensor2d([standardized]);

    // 6️⃣ Predicción
    const outputs = modelo.execute({ input_layer_3: inputTensor });

    // ⚠️ GraphModels a veces devuelven un solo tensor o un array de tensores
    let lambda_home, lambda_away;

    if (Array.isArray(outputs)) {
      lambda_home = outputs[0].dataSync()[0];
      lambda_away = outputs[1].dataSync()[0];
    } else {
      // Si devuelve un solo tensor con dos columnas (shape [1,2])
      const data = outputs.dataSync();
      lambda_home = data[0];
      lambda_away = data[1];
    }

    // 🔸 Convertimos a valores discretos (por ejemplo, goles esperados)
    const pred_home = Math.max(0, Math.round(lambda_home));
    const pred_away = Math.max(0, Math.round(lambda_away));

    // 🔹 Confianza simple
    const confianza = 1 - Math.abs(pred_home - pred_away) / 5;

    // ✅ Actualiza el estado para que React renderice los goles
    setResultado({ goles1: pred_home, goles2: pred_away, confianza });

    console.log(
      `Predicción: ${pred_home}-${pred_away} (confianza ${(confianza * 100).toFixed(1)}%)`
    );

  } catch (error) {
    console.error("Error en la predicción:", error);
  }
};


  // === Estilos de Select ===
  const selectStyles = {
    control: (base, state) => ({
      ...base,
      backgroundColor: "#fff",
      color: "#000",
      borderColor: state.isFocused ? "var(--verde-inteligente)" : "rgba(22,163,74,0.9)",
      boxShadow: state.isFocused ? `0 6px 16px rgba(22,163,74,0.12)` : "none",
      minHeight: 52,
      borderRadius: 12,
      paddingLeft: 8,
      cursor: "pointer",
    }),
    singleValue: (base) => ({ ...base, color: "#000", fontWeight: 600 }),
    placeholder: (base) => ({ ...base, color: "#333" }),
    menu: (base) => ({ ...base, backgroundColor: "#fff", borderRadius: 10 }),
    option: (base, state) => ({
      ...base,
      backgroundColor: state.isFocused ? "rgba(22,163,74,0.08)" : "#fff",
      color: "#000",
      padding: 12,
    }),
    indicatorSeparator: () => ({ display: "none" }),
    dropdownIndicator: (base) => ({ ...base, color: "rgba(0,0,0,0.6)" }),
  };

  return (
    <div className="oraculo-container">
      <main className="zona-principal">
        <div className="oraculo-background">
        <canvas id="network-bg"></canvas>
        <div className="streaks" aria-hidden>
          <div className="streak s1" />
          <div className="streak s2" />
          <div className="streak s3" />
          <div className="streak s4" />
          <div className="streak s5" />
        </div>
      </div>
        <h1>El Oráculo</h1>
        <p>
          El Oráculo usa un modelo de Inteligencia Artificial para predecir el resultado de los partidos.
          <br /> ⚠️ No debe tomarse como consejo de apuestas.
        </p>

        <div className="panel-oraculo">
          <h2>Predicción de Partido</h2>

          <div className="selector-liga">
            <label className="label-select">Liga de Fútbol</label>
            <Select
              options={Object.keys(ligas).map((liga) => ({
                label: (
                  <div className="option-with-icon">
                    <img
                      src={
                        ligas[liga].find((e) => e.label.toLowerCase() === liga.toLowerCase())?.logo ||
                        ligas[liga][0]?.logo
                      }
                      alt={liga}
                    />
                    <span>{liga}</span>
                  </div>
                ),
                value: liga,
              }))}
              onChange={(opt) => {
                setLigaSeleccionada(opt.value);
                setEquipo1(null);
                setEquipo2(null);
                setResultado(null);
              }}
              placeholder="Selecciona una liga..."
              classNamePrefix="custom-select"
              styles={selectStyles}
            />
          </div>

          {ligaSeleccionada && (
            <>
              <div className="selector-equipos-headers">
                <div className="equip-header">Equipo local</div>
                <div className="equip-header">Equipo visitante</div>
              </div>

              <div className="selector-equipos">
                <div className="select-wrap">
                  <Select
                    options={ligas[ligaSeleccionada]
                      .filter(
                        (eq) =>
                          eq.label.toLowerCase() !== ligaSeleccionada.toLowerCase() &&
                          (!equipo2 || eq.value !== equipo2.value)
                      )}
                    value={equipo1}
                    onChange={(val) => setEquipo1(val)}
                    placeholder="Selecciona equipo local"
                    formatOptionLabel={(option) => (
                      <div className="option-with-icon">
                        <img src={option.logo} alt={option.label} />
                        <span>{option.label}</span>
                      </div>
                    )}
                    classNamePrefix="custom-select"
                    styles={selectStyles}
                  />
                </div>

                <div className="select-wrap">
                  <Select
                    options={ligas[ligaSeleccionada]
                      .filter(
                        (eq) =>
                          eq.label.toLowerCase() !== ligaSeleccionada.toLowerCase() &&
                          (!equipo1 || eq.value !== equipo1.value)
                      )}
                    value={equipo2}
                    onChange={(val) => setEquipo2(val)}
                    placeholder="Selecciona equipo visitante"
                    formatOptionLabel={(option) => (
                      <div className="option-with-icon">
                        <img src={option.logo} alt={option.label} />
                        <span>{option.label}</span>
                      </div>
                    )}
                    classNamePrefix="custom-select"
                    styles={selectStyles}
                  />
                </div>
              </div>
            </>
          )}

          {ligaSeleccionada && (
            <div className="separador">
              <div className="linea" />
              <button className="btn-predecir" onClick={handlePrediccion}>
                Predecir
              </button>
              <div className="linea" />
            </div>
          )}

          {resultado && (
            <div className="resultado-wrapper">
              <div className="resultado">
                <div className="resultado-equipo">
                  <img src={equipo1.logo} alt={equipo1.label} className="res-logo" />
                  <h3>{equipo1.label}</h3>
                  <p className="goles">{resultado.goles1}</p>
                </div>

                <div className="resultado-separator" aria-hidden></div>

                <div className="resultado-equipo">
                  <img src={equipo2.logo} alt={equipo2.label} className="res-logo" />
                  <h3>{equipo2.label}</h3>
                  <p className="goles">{resultado.goles2}</p>
                </div>
              </div>
            </div>
          )}
          {resultado?.confianza && (
            <p className="confianza">
              Nivel de confianza: {(resultado.confianza * 100).toFixed(1)}%
            </p>
          )}
        </div>
      </main>
    </div>
  );
};

export default Oraculo;













