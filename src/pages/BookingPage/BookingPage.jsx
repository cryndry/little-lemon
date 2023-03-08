import React from "react";
import s from "./BookingPage.module.css";
import { useNavigate } from "react-router-dom";
import BookingForm from "components/BookingForm/BookingForm";

const BookingPage = ({ timesReducer, submitForm }) => {
    const navigate = useNavigate();

    return (
        <div className={s.BookingPage}>
            <BookingForm timesReducer={timesReducer} submitForm={submitForm} navigate={navigate}/>
        </div>
    );
};

export default BookingPage;