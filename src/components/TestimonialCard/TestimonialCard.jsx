import React from "react";
import s from "./TestimonialCard.module.css";
import { ReactComponent as Star } from "assets/Star.svg";
import Person from "assets/Person.jpg";

const TestimonialCard = () => {
    return (
        <article className={s.TestimonialCard}>
            <section className={s.Stars}>
                {Array.from({ length: 5 }, (val, index) => <Star key={index} />)}
            </section>
            <section className={s.UserInfo}>
                <img src={Person} alt="" />
                <h3>John Doe</h3>
            </section>
            <section className={s.Comment}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Lorem ipsum dolor sit, amet consectetur adipisicing elit.</section>
        </article>
    );
};

export default TestimonialCard;