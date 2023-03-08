import React, { useCallback, useState, useEffect } from "react";
import s from "./BookingForm.module.css";

const BookingForm = ({ timesReducer, submitForm, navigate }) => {
    const [date, setDate] = useState();
    const [time, setTime] = useState("");
    const [guests, setGuests] = useState("1");
    const [occasion, setOccasion] = useState("Birthday");

    const [availableTimes, dispatchAvailableTimes] = timesReducer || [[], () => {}];

    useEffect(() => {
        const elm = document.getElementById("res-date");
        elm.value = new Date().toISOString().slice(0, -14);
        dateHandler({ target: { valueAsNumber: elm.valueAsNumber } });
    }, []);


    const dateHandler = useCallback((e) => {
        const timeStamp = e.target.valueAsNumber;
        setDate(() => timeStamp);
        dispatchAvailableTimes({ type: "date", payload: new Date(timeStamp) });
    }, []);

    const timeHandler = useCallback((e) => {
        setTime(() => e.target.value);
    }, []);

    const guestHandler = useCallback((e) => {
        setGuests(() => e.target.value);
    }, []);

    const occasionHandler = useCallback((e) => {
        setOccasion(() => e.target.value);
    }, []);

    const formHandler = (e) => {
        e.preventDefault();
        if (date === undefined || time === "") return;
        
        const formData = { date, time, guests, occasion };
        const result = submitForm(formData);
        if (result) {
            navigate("/booking/confirmed");
        }
    };

    return (
        <form className={s.BookingForm} onSubmit={formHandler}>
            <label htmlFor="res-date">Choose date</label>
            <input type="date" id="res-date" role="datePick" onChange={dateHandler} />
            <label htmlFor="res-time">Choose time</label>
            <select id="res-time" role="timePick" onChange={timeHandler}>
                {availableTimes.map(opt => (
                    <option key={opt}>{opt}</option>
                ))}
            </select>
            <label htmlFor="guests">Number of guests</label>
            <input type="number" placeholder="1" min="1" max="10"
                id="guests" onChange={guestHandler}
            />
            <label htmlFor="occasion">Occasion</label>
            <select id="occasion" onChange={occasionHandler}>
                <option>Birthday</option>
                <option>Anniversary</option>
            </select>
            <input type="submit" value="Make Reservation" />
        </form>
    );
};

export default BookingForm;