import "./Login-styles.css";
import Helmet from "react-helmet";
import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleSubmit = async (e) => {
    e.preventDefault();

    const userData = {
      username,
      password,
    };

    try {
      const response = await axios.post(
        "http://localhost:3001/api/auth/login",
        userData
      );
      localStorage.setItem("token", response.data.token);
      const token = response.data.token;
      dispatch({ type: "LOGIN", payload: token });
      navigate("/");
    } catch (error) {
      console.error("Error logging in user", error);
      setError(error.response?.data?.message || "Ошибка входа");
    }
  };

  return (
    <>
      <Helmet>
        <title>Вход</title>
        <body className="login-body"></body>
      </Helmet>
      <div className="logo-inputs">
        <NavLink to="/">
          <img src="/img/public_FILL0_wght400_GRAD0_opsz24.svg" alt="" />
        </NavLink>
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

            <div className="btn">
              <NavLink to="/Register">
                <button> Регистрация</button>
              </NavLink>
              <button type="submit">Вход</button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
