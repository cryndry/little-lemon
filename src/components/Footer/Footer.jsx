import React from "react";
import s from "./Footer.module.css";
import Logo from "assets/Logo-vertical.png";

const Footer = () => {
    return (
        <footer className={s.Footer}>
            <section className={s.FooterContent}>
                <figure>
                    <img className={s.Logo} src={Logo} alt="" />
                </figure>
                <section className={s.Navigation}>
                    <h3>Navigation</h3>
                    <nav>
                        <ul className={s.Links}>
                            <li className={s.Link}><a href="/">Home</a></li>
                            <li className={s.Link}><a href="#about">About</a></li>
                            <li className={s.Link}><a href="#menu">Menu</a></li>
                            <li className={s.Link}><a href="/booking">Reservations</a></li>
                            <li className={s.Link}><a href="#order-online">Order Online</a></li>
                            <li className={s.Link}><a href="#login">Login</a></li>
                        </ul>
                    </nav>
                </section>
                <section className={s.ContactUs}>
                    <h3>Contact Us</h3>
                    <ul className={s.Links}>
                        <li className={s.Link}><a href="#">43 Hazel st. Chicago IL US</a></li>
                        <li className={s.Link}><a href="#">(+213) 789-792-2679</a></li>
                        <li className={s.Link}><a href="#">contact@little.lemon.com</a></li>
                    </ul>
                </section>
            </section>
        </footer>
    );
};

export default Footer;