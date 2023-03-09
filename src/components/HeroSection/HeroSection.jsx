import React from "react";
import s from "./HeroSection.module.css";
import HeroExhibition from "assets/HeroExhibition.jpg";
import HomepageButton from "components/HomepageButton/HomepageButton";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
    const navigate = useNavigate();

    return (
        <section className={s.HeroSection}>
            <div className={s.LittleLemon}>
                <article>
                    <h1 className={s.Title}>Little Lemon</h1>
                    <h2 className={s.Location}>Chicago</h2>
                    <p className={s.Description}>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                    <HomepageButton text="Reserve a Table" onClick={() => {navigate("/booking")}} />
                </article>
                <div className={s.ImageContainer}>
                    <figure className={s.HeroImage}>
                        <img src={HeroExhibition} alt="" />
                    </figure>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;