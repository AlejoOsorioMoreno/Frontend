import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useAuth } from "../Autentication/AutProvider";
import DefaultLayout from "../layout/DefaultLayout";
import { API_URL } from "../Autentication/constanst";
import type { AuthResponseError } from "../types/types";

export default function Signup() {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorResponse, setErrorResponse] = useState("");

  const auth = useAuth();
  const goto = useNavigate();

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    try {
      const response = await fetch(`${API_URL}/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name,
          username,
          password
        })
      });

      if (response.ok) {
        console.log("el usuario se creó correctamente");
        setErrorResponse("");
        goto("/");
      } else {
        console.log("algo malo ocurrió :o");
        const json = (await response.json()) as AuthResponseError;
        setErrorResponse(json.body.error);
        return;
      }
    } catch (error) {
      console.log(error);
    }
  }

  if (auth.esAutentico) {
    return <Navigate to="/dashboard" />;
  }

  return (
    <DefaultLayout>
      <section className="father">
        <div className="wrapper">
          <form onSubmit={handleSubmit}>
            <h1>Signup</h1>
            {!!errorResponse && <div className="errorMessage">{errorResponse}</div>}
            <div className="input-box">
              <label>Nombre</label>
              <input type="text" value={name} onChange={(e) => setName(e.target.value)}></input>
            </div>
            <div className="input-box">
              <label>Email</label>
              <input type="email" value={username} onChange={(e) => setUsername(e.target.value)}></input>
            </div>
            <div className="input-box">
              <label>password</label>
              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}></input>
            </div>
            <button type="submit" className="btn">Create User</button>
          </form>
        </div>
      </section>
    </DefaultLayout>
  );
}
