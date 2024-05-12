import axios from "axios";
import React, { useState } from "react";
import "./SignInForm.css"; // Importieren Sie die CSS-Datei

type SignInFormProps = {};

export function SignInForm({}: SignInFormProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = async () => {
    try {
      const response = await axios.post("http://localhost:3000/auth/signIn", {
        email,
        password,
      });
      const apiResponse = response.data as { accessToken: string };
      console.log("🚀 ~ apiResponse:", apiResponse);
    } catch (error) {
      console.error("Anmeldung fehlgeschlagen:", error);
    }
  };

  return (
    <div className="container">
      <div className="card">
        <h2>Login</h2>
        <div className="form">
          <input
            type="text"
            id="email"
            name="email"
            placeholder="E-Mail"
            required
            onChange={(text) => setEmail(text.target.value)}
          />
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            required
            onChange={(text) => setPassword(text.target.value)}
          />
          <button type="submit" onClick={signIn}>
            Login
          </button>
        </div>
      </div>
    </div>
  );
}
