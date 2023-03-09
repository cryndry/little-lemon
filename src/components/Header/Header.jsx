import React, { useState, useEffect, useRef } from "react";
import s from "./Header.module.css";
import Logo from "assets/Logo.jpg";
import WebNavBar from "./WebNavBar/WebNavBar";
import MobileNavBar from "./MobileNavBar/MobileNavBar";
import { useWindowDimensions } from "hooks/useWindowDimensions";

const Header = () => {
    const { width } = useWindowDimensions();
    const [navBar, setNavBar] = useState();

    const links = useRef(<>
        <li className={s.Link}><a href="/">Home</a></li>
        <li className={s.Link}><a href="#about">About</a></li>
        <li className={s.Link}><a href="#menu">Menu</a></li>
        <li className={s.Link}><a href="/booking">Reservations</a></li>
        <li className={s.Link}><a href="#order-online">Order Online</a></li>
        <li className={s.Link}><a href="#login">Login</a></li>
    </>);

    useEffect(() => {
        if (width < 800) {
            setNavBar(() => <MobileNavBar links={links.current} />)
        } else {
            setNavBar(() => <WebNavBar links={links.current} />)
        }
    }, [width]);


    return (
        <header className={s.Header} id="header">
            <a href="/"><img className={s.Logo} src={Logo} alt="" /></a>
            {navBar}
        </header>
    );
};

export default Header;