import React, { useEffect } from "react";
import s from "./ConfirmedBooking.module.css";

const ConfirmedBooking = () => {
    
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className={s.ConfirmedBooking}>
            <section className={s.Message}>
                <p>Your booking is confirmed.</p> <br />
                <p>We can't wait to see you around!</p>
            </section>
        </div>
    );
};

export default ConfirmedBooking;