import React, { useRef } from "react";
import s from "./Specials.module.css";
import HomepageButton from "components/HomepageButton/HomepageButton";
import Bruschetta from "assets/Bruschetta.jpg";
import LemonDessert from "assets/Lemon Dessert.jpg";
import GreekSalad from "assets/Greek Salad.jpg";
import SpecialCard from "components/SpecialCard/SpecialCard";

const Specials = () => {
    const specials = useRef([
        { name: "Bruschetta", price: "5.99", image: Bruschetta, desc: "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil; made perfect for an evening dinner." },
        { name: "Lemon Dessert", price: "5.00", image: LemonDessert, desc: "This comes straight from Grandma's recipe book. Every last ingredient has been sourced and is as authentic as can be imagined." },
        { name: "Greek Salad", price: "12.99", image: GreekSalad, desc: "The famous Greek salad of crispy lettuce, peppers, olives and our Chicago styled feta cheese, garnished with crunchy garlic, rosemary croutons." }
    ]);

    return (
        <section className={s.Specials}>
            <section className={s.TitleContainer}>
                <h1 className={s.Title}>This Week's Specials</h1>
                <HomepageButton text="Online Menu" />
            </section>
            <section className={s.Exhibition}>
                {specials.current.map(special => <SpecialCard {...special} />)}
            </section>
        </section>
    );
};

export default Specials;