import { Link } from "react-router-dom";



import React from "react";
import '../layout/DefaultLayout.css'

const logo=" https://firebasestorage.googleapis.com/v0/b/react-firebase-upload-480ee.appspot.com/o/logo%2Flogo.png_1707651679578?alt=media&token=cd36b018-9e76-4b00-bb12-565d0145865b"
interface DefaultLayoutProps {
    children: React.ReactNode,
}
export default function DefaultLayout({ children }: DefaultLayoutProps) {
    return (
        <>
            <header className="header-layout">
                <div className="logo">
                    <img src={logo} alt="logo" />
                </div>
                <nav className="nav-layout">
                    <ul className="ul-layout">
                        <li className="li--layout">
                            <Link to="/">Home</Link>
                        </li>
                        <li className="li--layout">
                            <Link to="/signup">Signup</Link>
                        </li>
                        <li className="li--layout">
                            <Link to="/login">Login</Link>
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