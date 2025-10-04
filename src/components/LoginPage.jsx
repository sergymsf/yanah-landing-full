import React, { useEffect, useState } from "react";
import { supabase } from "../lib/supabaseClient";
import "boxicons/css/boxicons.min.css";
import "../styles/LoginPage.css";

export default function LoginPage() {
  const [isRegister, setIsRegister] = useState(false);
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleAuth = async (e) => {
    e.preventDefault();
    setMessage("");

    try {
      if (isRegister) {
        const { error } = await supabase.auth.signUp({
          email: formData.email,
          password: formData.password,
        });
        if (error) throw error;
        setMessage("✅ Registo feito! Confirma o teu email.");
      } else {
        const { error } = await supabase.auth.signInWithPassword({
          email: formData.email,
          password: formData.password,
        });
        if (error) throw error;
        setMessage("✅ Login feito com sucesso!");
      }
    } catch (err) {
      setMessage(`❌ Erro: ${err.message}`);
    }
  };

  return (

    
    <div className="login-page">
      <a href="/" className="logo-link"> <img src="src/assets/logo.png" alt="Logo" className="logo-image" /> </a>
      <div className={`container ${isRegister ? "active" : ""}`}>
        {/* LOGIN */}
        <div className="form-box login">
          <form onSubmit={handleAuth}>
            <h1>Login</h1>
            <div className="input-box">
              <input
                type="email"
                name="email"
                placeholder="Email"
                onChange={handleChange}
                required
              />
              <i className="bx bx-envelope"></i>
            </div>
            <div className="input-box">
              <input
                type="password"
                name="password"
                placeholder="Password"
                onChange={handleChange}
                required
              />
              <i className="bx bx-lock"></i>
            </div>
            <button type="submit" className="btn">
              Login
            </button>
            <p>or login with</p> 
            <div className="social-icons"> 
              <a href="#"><i className="bx bxl-facebook"></i></a> 
              <a href="#"><i className="bx bxl-apple"></i></a> 
              <a href="#"><i className="bx bxl-google"></i></a> 
            </div>
            {message && <p>{message}</p>}
          </form>
        </div>

        {/* REGISTER */}
        <div className="form-box register">
          <form onSubmit={handleAuth}>
            <h1>Register</h1>
            <div className="input-box">
              <input
                type="email"
                name="email"
                placeholder="Email"
                onChange={handleChange}
                required
              />
              <i className="bx bx-envelope"></i>
            </div>
            <div className="input-box">
              <input
                type="password"
                name="password"
                placeholder="Password"
                onChange={handleChange}
                required
              />
              <i className="bx bx-lock"></i>
            </div>
            <button type="submit" className="btn">
              Register
            </button>
            <p>or register with</p>
            <div className="social-icons">
             <a href="#"><i className="bx bxl-facebook"></i></a>
             <a href="#"><i className="bx bxl-apple"></i></a>
             <a href="#"><i className="bx bxl-google"></i></a> 
            </div>
            {message && <p>{message}</p>}
          </form>
        </div>

        {/* TOGGLE BOX */}
        <div className="toggle-box">
          <div className="toggle-panel toggle-left">
            <h1>Welcome to Yanah</h1>
            <p>Don't have an account?</p>
            <button
              type="button"
              className="btn"
              onClick={() => setIsRegister(true)}
            >
              Register
            </button>
          </div>
          <div className="toggle-panel toggle-right">
            <h1>Welcome Back!</h1>
            <p>Already have an account?</p>
            <button
              type="button"
              className="btn"
              onClick={() => setIsRegister(false)}
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
