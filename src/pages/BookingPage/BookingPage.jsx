import React from "react";
import s from "./BookingPage.module.css";
import { useNavigate } from "react-router-dom";
import BookingForm from "components/BookingForm/BookingForm";

const BookingPage = ({ timesReducer, submitForm }) => {
    const navigate = useNavigate();

    return (
        <div className={s.BookingPage}>
            <section className={s.AboutUs}>
                <p>We are a family owned Mediterranean restaurant.</p><br />
                <p>At Little Lemon, we take great pride in providing our customers with the greatest luxurious experience with a touch of tradition.</p><br />
                <p>Book a table with us to share in this experience.</p>
            </section>
            <section className={s.FormContainer}>
                <BookingForm timesReducer={timesReducer} submitForm={submitForm} navigate={navigate} />
            </section>
        </div>
    );
};

export default BookingPage;