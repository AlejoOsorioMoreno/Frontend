import { Navigate, useNavigate } from "react-router-dom";
import { useAuth } from "../Autentication/AutProvider";
import DefaultLayout from "../layout/DefaultLayout"
import Dashboard from './dashboard';
import { useState } from "react"
import { API_URL } from "../Autentication/constanst";
import type { AuthResponse, AuthResponseError } from "../types/types";
import React from "react";
import './login.css'

export default function Login(){

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorResponse, setErrorResponse] = useState("")
  const auth = useAuth();
  const goto = useNavigate();

  
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>){
    e.preventDefault();
    try{
      const response = await fetch(`${API_URL}/login`,{
        method: "POST",
        headers:{
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          username,
          password
        })
      })

      if(
        response.ok){
        console.log("Inicio de sesión exitoso.")
        setErrorResponse("");
        const json =(await response.json()) as AuthResponse;
        
        if(json.body.accessToken && json.body.refreshToken){
          auth.saveUser(json);

          goto("/dashboard")

        }


      }else{
        console.log("algo malo acurrió :o");
        const json = (await response.json()) as AuthResponseError;
        setErrorResponse(json.body.error);
        return;
      
      }
    }catch(error){
      console.log(error)
    }
  }

  if(auth.esAutentico){
    return <Navigate to="/dashboard"/>
  }

  return (
    <DefaultLayout>
    <section className="father">
        <div className="wrapper">
          <form action="">
            <h1>Inicio de sesión</h1>
            <div className="input-box">
              <input type="email" placeholder="correo electronico" required />
              <i className='bx bxs-user'></i>
            </div>
            <div className="input-box">
              <input type="password" placeholder="Contraseña" required />
              <i className='bx bxs-lock-alt'></i>
            </div>
            <div className="remember-forgot">
              <label>
                <input type="checkbox" />Recordar usuario
              </label>
              <a href="#">¿Has olvidado tu contraseña?</a>
            </div>
            <button type="submit" className="btn">
              Iniciar sesión
            </button>
            <div className="register-link">
              <p>
              ¿No tienes una cuenta? <a href="/signup">Registrarse</a>
              </p>
            </div>
          </form>
        </div>
    </section>
    </DefaultLayout>
  );
  
}