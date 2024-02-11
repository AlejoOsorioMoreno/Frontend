import React from "react";
import { useAuth } from "../Autentication/AutProvider";
import { Link } from "react-router-dom";
import { API_URL } from "../Autentication/constanst";
import './nav.css'
const logo=" https://firebasestorage.googleapis.com/v0/b/react-firebase-upload-480ee.appspot.com/o/logo%2Flogo.png_1707651679578?alt=media&token=cd36b018-9e76-4b00-bb12-565d0145865b"

export  function PortalLayout({children}: {children:React.ReactNode}){
 const auth = useAuth();

    async function handleSignOut(e:React.MouseEvent<HTMLAnchorElement>){
        e.preventDefault();
        try {
            const response = await fetch(`${API_URL}/signout`,{
                method: "DELETE",
                headers:{
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${auth.getRefreshToken()}`
                }
            })

            if(response.ok){
                auth.signOut();
            }
        } catch (Error) {
            // Error.console.log("tienes un error",Error);
            
        }
    }

    return (
        <>
        <header>
          <nav className="box">
          <img src={logo} alt="" style={{ width: 150, marginRight:30, float: 'left' }} />
            <ul className="componet">
              <link rel="stylesheet" href="" />
              
              <li>
                <Link style={{color:'black',fontSize:'25px', textDecoration:'none'}} 
                to="/dashboard">Perfil</Link>
              </li>
              <li>
                <Link style={{color:'black',fontSize:'25px', textDecoration:'none'}} 
                 to="/dashboard">Bienvenido {auth.getUser()?.name ?? ""}</Link>
              </li>
              <li>
                <a style={{color:'black',fontSize:'25px',textDecoration:'none'}}
                 href="#" onClick={handleSignOut}>
                  Salir
                </a>
              </li>
              <li>
              <Link style={{color:'black',fontSize:'25px', textDecoration:'none'}} 
               to="/chat"  >Chat</Link>
              </li>
            </ul>
          </nav>
        </header>
  
        <main>{children}</main>
      </>
    )
}