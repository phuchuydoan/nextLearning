"use client";

import { useState } from "react";
import styles from "./login.module.css";
import { useRouter } from "next/navigation";
import { useLoginAction } from "./hooks";

export default function LoginPage() {
  const router = useRouter();
  const { userName, setUserName, password, setPassword, handleLogin } =
    useLoginAction();

  return (
    <div className={styles.container}>
      <h1>Login</h1>
      <form onSubmit={handleLogin} className={styles.form}>
        <div>
          <label htmlFor="username">Username: </label>
          <input
            type="text"
            id="username"
            value={userName}
            required
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password: </label>
          <input
            type="password"
            id="password"
            value={password}
            required
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button className={styles.button} type="submit">
          Login
        </button>
      </form>
      <button onClick={() => router.back()} className={styles.backButton}>
        Go back
      </button>
    </div>
  );
}
