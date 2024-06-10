import "./Register-styles.css";
import Helmet from "react-helmet";
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const baseURL = "http://localhost:3001"; // базовый URL сервера

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userData = {
      username,
      password,
    };

    try {
      const response = await axios.post(
        `${baseURL}/api/auth/register`,
        userData
      );
      navigate("/login");
    } catch (error) {
      console.error("Error registering user", error);
      setError(error.response?.data?.message || "Ошибка регистрации");
    }
  };

  return (
    <>
      <Helmet>
        <title>Регистрация</title>
        <body className="reg-body"></body>
      </Helmet>
      <div className="logo-inputs">
        <img src="/img/public_FILL0_wght400_GRAD0_opsz24.svg" alt="" />
        <form className="input" onSubmit={handleSubmit}>
          <img
            className="logo-img"
            src="/img/account_circle_FILL0_wght400_GRAD0_opsz24.svg"
            alt=""
          />
          <div className="inputs">
            <input
              placeholder="Login..."
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <input
              placeholder="Password..."
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            {error && <p className="error-message">{error}</p>}
            <div className="btn">
              <button name="send" value="SEND" type="submit">
                Зарегистрироваться
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
