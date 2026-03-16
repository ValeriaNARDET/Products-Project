"use client"

import { use, useState } from "react";
import { useRouter } from "next/navigation";
import useAuthStore from "@store/authStore";
import userLogin from "@/api/authApi";
import styles from "@styles/login.module.scss"

export default function LoginPage() {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();


  const handleLogin = async () => {
    const token = userLogin(username, password) || "testToken";
    // useAuthStore.setToken(token);
    router.push("/products");
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <h1>Login</h1>

        <input
          placeholder="username"
          className={styles.input}
          onChange={(e)=>setUsername(e.target.value)}
          />

        <input
          type="password"
          placeholder="password"
          className={styles.input}
          onChange={(e)=>setPassword(e.target.value)}
          />

        <button className={styles.button} onClick={handleLogin}>Login</button>
        </div>
    </div>
  )
}