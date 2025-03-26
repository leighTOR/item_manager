import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../constants";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post("/api/token/", { username, password });
      localStorage.setItem(ACCESS_TOKEN, res.data.access);
      localStorage.setItem(REFRESH_TOKEN, res.data.refresh);
      navigate("/");
    } catch (error) {
      console.error("Login error", error);
      alert("Login failed. Please check your credentials.");
    }
  };

  return (
    <div className="max-w-sm mx-auto p-4 bg-violet-50 min-h-screen flex items-center justify-center">
      <div className="w-full">
        <h2 className="text-xl font-bold mb-4 text-violet-700 text-center">Login</h2>
        <form onSubmit={handleLogin}>
          <input
            className="border border-violet-300 rounded p-2 mb-2 w-full shadow-sm focus:outline-none focus:ring-2 focus:ring-violet-400"
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            className="border border-violet-300 rounded p-2 mb-2 w-full shadow-sm focus:outline-none focus:ring-2 focus:ring-violet-400"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button className="bg-violet-500 hover:bg-violet-600 text-white rounded p-2 w-full transition duration-200" type="submit">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
