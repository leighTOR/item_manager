import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api";

function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    try {
      await api.post("/api/user/register/", { username, password });
      navigate("/login");
    } catch (error) {
      console.error("Registration error", error);
      alert("Registration failed.");
    }
  };

  return (
    <div className="max-w-sm mx-auto p-4 bg-violet-50 min-h-screen flex items-center justify-center">
      <div className="w-full">
        <h2 className="text-xl font-bold mb-4 text-violet-700 text-center">Register</h2>
        <form onSubmit={handleRegister}>
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
          <input
            className="border border-violet-300 rounded p-2 mb-2 w-full shadow-sm focus:outline-none focus:ring-2 focus:ring-violet-400"
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
          <button className="bg-violet-500 hover:bg-violet-600 text-white rounded p-2 w-full transition duration-200" type="submit">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;
