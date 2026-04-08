"use client";

import { useState } from "react";

export const useLoginAction = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userName, password }),
      });
      if (!res.ok) {
        const data = await res.json();
        setError(data.message || "Login failed");
      } else {
        routerServerGlobal.push("/dashboard");
      }
    } catch (err) {
      setError("An error occurred during login");
    }
  };

  return {
    userName,
    password,
    setUserName,
    setPassword,
    handleLogin,
  };
};
