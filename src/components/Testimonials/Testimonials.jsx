import React from "react";
import s from "./Testimonials.module.css";
import TestimonialCard from "components/TestimonialCard/TestimonialCard";

const Testimonials = () => {
    return (
        <section className={s.Testimonials}>
            <h1 className={s.Title}>Testimonials</h1>
            <div className={s.TestimonialCards}>
                <TestimonialCard />
                <TestimonialCard />
                <TestimonialCard />
                <TestimonialCard />
            </div>
        </section>
    );
};

export default Testimonials;