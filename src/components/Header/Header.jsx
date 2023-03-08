import React from "react";
import s from "./Header.module.css";
import Logo from "assets/Logo.svg";

const Header = () => {
    return (
        <header className={s.Header} id="header">
            <a href="/"><img src={Logo} alt="" /></a>
            <nav className={s.Navigator}>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#menu">Menu</a></li>
                    <li><a href="/booking">Reservations</a></li>
                    <li><a href="#order-online">Order Online</a></li>
                    <li><a href="#login">Login</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;