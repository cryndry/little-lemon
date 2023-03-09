import React from "react";
import s from "./SpecialCard.module.css";
import { ReactComponent as DeliveryIcon } from "assets/DeliveryIcon.svg";

const SpecialCard = ({ name, price, image, desc }) => {
    return (
        <article className={s.SpecialCard}>
            <figure className={s.FoodImage}>
                <img src={image} alt={name} />
            </figure>
            <section className={s.FoodSpecs}>
                <div className={s.MainInfo}>
                    <h3>{name}</h3>
                    <h3 style={{ color: "var(--card-price-color)" }}>${price}</h3>
                </div>
                <p className={s.Description}>{desc}</p>
                <h4 className={s.Order}>Order a Delivery <DeliveryIcon /></h4>
            </section>
        </article>
    );
};

export default SpecialCard;