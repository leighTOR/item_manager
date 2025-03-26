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
    <div class="max-w-sm mx-auto p-4">
      <h2 class="text-xl mb-4">Register</h2>
      <form onSubmit={handleRegister}>
        <input
          class="border p-2 mb-2 w-full"
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          class="border p-2 mb-2 w-full"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <input
          class="border p-2 mb-2 w-full"
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
        <button class="bg-green-500 text-white p-2 w-full" type="submit">
          Sign Up
        </button>
      </form>
    </div>
  );
}

export default Register;
