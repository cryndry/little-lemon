import React, { useReducer } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import s from "./Main.module.css";
import HomePage from "pages/HomePage/HomePage";
import BookingPage from "pages/BookingPage/BookingPage";
import { fetchAPI, submitAPI } from "utils/api.js";
import ConfirmedBooking from "components/ConfirmedBooking/ConfirmedBooking";

const Main = () => {
    const updateTimes = (prevState, action) => {
        switch (action.type) {
            case "date":
                return fetchAPI(action.payload);
            default:
                break;
        };
    };
    const initializeTimes = (initialState) => { return initialState };
    const timesReducer = useReducer(updateTimes, [], initializeTimes);

    const submitForm = (formData) => {
        const result = submitAPI(formData);
        return result;
    };

    return (
        <BrowserRouter>
            <main className={s.Main}>
                <Routes>
                    <Route path="/" element={<HomePage />}></Route>
                    <Route path="/booking" element={
                        <BookingPage timesReducer={timesReducer} submitForm={submitForm} />
                    }></Route>
                    <Route path="/booking/confirmed" element={<ConfirmedBooking />}></Route>
                </Routes>
            </main>
        </BrowserRouter>
    );
};

export default Main;