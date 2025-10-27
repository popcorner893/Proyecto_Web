import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import "./HojasEstilo/LoginPage.css";

const LoginPage = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [captchaValue, setCaptchaValue] = useState(null);

  const togglePassword = () => setPasswordVisible(!passwordVisible);
  const handleCaptcha = (value) => setCaptchaValue(value);
  const handleLogin = () => {
    if (!captchaValue) return alert("Por favor, completa el CAPTCHA antes de continuar.");
    alert("Inicio de sesión exitoso (simulado)");
  };

  return (
    <div className="login-page"> {/* <-- CONTENEDOR QUE OCUPA TODA LA PANTALLA */}
      <div className="login-container"> {/* <-- PANEL DE LOGIN */}
        <h1>Inicia Sesión</h1>

        <div className="form-container">
          {/* Parte izquierda */}
          <div className="form-left">
            <label htmlFor="correo">Correo Electrónico</label>
            <input type="email" id="correo" placeholder="Ingrese su correo" required />

            <label htmlFor="password">Contraseña</label>
            <div className="password-field">
              <input
                type={passwordVisible ? "text" : "password"}
                id="password"
                placeholder="Ingrese su contraseña"
                required
              />
              <button
                type="button"
                className="toggle-pass-btn"
                onClick={togglePassword}
                aria-label="Mostrar u ocultar contraseña"
              >
                {passwordVisible ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
          </div>

          {/* Parte derecha */}
          <div className="form-right">
            <h3>¿No tiene una cuenta?</h3>
            <button className="btn-register">Regístrese</button>
          </div>
        </div>

        <hr />

        {/* CAPTCHA */}
        <div className="captcha-container">
          <ReCAPTCHA
            sitekey="6LeF_fYrAAAAAP-gbGqBdJzWsWj-sUnrBIeqoDtN"
            onChange={handleCaptcha}
          />
        </div>

        <button className="btn-login" onClick={handleLogin}>
          Iniciar Sesión
        </button>

        <div className="links">
          <a href="#">Términos y Condiciones</a> - <a href="#">Política de Privacidad</a>
        </div>
      </div>
    </div>
  );
};


export default LoginPage;



