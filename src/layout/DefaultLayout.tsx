import { Link } from "react-router-dom";
import Signup from '../routes/signup';
import Dashboard from '../routes/dashboard';
import Login from '../routes/login'
import React from "react";
import '../layout/DefaultLayout.css'
import logo from '../../public/img/logo.png';

interface DefaultLayoutProps{
    children: React.ReactNode,
}
export default function DefaultLayout({children}:DefaultLayoutProps){
    return(
        <>
        <header className="header-layout">
            <div className="logo">
                <img src={logo} alt="logo"/>
            </div>
            <nav className="nav-layout">
                <ul className="ul-layout">
                    <li className="li--layout">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="li--layout">
                        <Link to="/signup">signup</Link>
                    </li>
                    <li className="li--layout">
                        <Link to="/login">login</Link>
                    </li>
                </ul>
            </nav>
        </header>
        <main>
            {children}
        </main>
    </>
    )
    
}