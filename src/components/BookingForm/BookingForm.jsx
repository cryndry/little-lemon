import React, { useCallback, useState, useEffect, useRef } from "react";
import s from "./BookingForm.module.css";
import InputArea from "components/InputArea/InputArea";
import HomepageButton from "components/HomepageButton/HomepageButton";
import { CalendarIcon, OccasionIcon, UserIcon, TimeIcon, EmailIcon , PhoneIcon } from "utils/BookingFormIcons";

const BookingForm = ({ timesReducer, submitForm, navigate }) => {
    const [date, setDate] = useState(NaN);
    const [time, setTime] = useState("");
    const [guests, setGuests] = useState("");
    const [occasion, setOccasion] = useState("");
    const [fieldsetNo, setFieldsetNo] = useState(1);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [availableTimes, dispatchAvailableTimes] = timesReducer || [[], () => { }];
    const occasionTypes = useRef(["Birthday", "Engagement", "Anniversary"]);

    const inputColorHandler = useCallback((dataType, reset) => {
        const elm = document.querySelector(`[data-type=${dataType}]`);
        elm.style.border = "";
        elm.parentElement.setAttribute("data-error-msg", "");
        elm.style.color = reset ?? "var(--card-background)";
        elm.style.backgroundColor = reset ?? "var(--hero-green)";
        elm.style.boxShadow = reset ?? "#00000029 0px 3px 6px, #0000003b 0px 3px 6px";
        const arrow = elm.querySelectorAll("svg").item(1);
        if (!arrow) return;
        arrow.style.transition = reset ?? "400ms";
        arrow.style.transform = reset ?? "rotate(180deg)";
    }, []);

    const dateHandler = useCallback((e) => {
        const timeStamp = e.target.valueAsNumber;
        setDate(() => timeStamp);
        setTime(() => "");
        let reset = Number.isNaN(timeStamp) ? "" : null;
        inputColorHandler("date", reset);
        (reset === "") && inputColorHandler("time", reset);
        dispatchAvailableTimes({ type: "date", payload: new Date(timeStamp) });
    }, []);

    const timeHandler = useCallback((e) => {
        setTime(() => e.target.value || e.target.innerText);
        inputColorHandler("time");
    }, []);

    const guestHandler = useCallback((e) => {
        setGuests(() => e.target.value || e.target.innerText);
        inputColorHandler("guests");
    }, []);

    const occasionHandler = useCallback((e) => {
        setOccasion(() => e.target.value || e.target.innerText);
        inputColorHandler("occasion");
    }, []);

    const nameHandler = useCallback((e) => {
        const data = e.target.value || e.target.innerText;
        setName(() => data);
        let reset = (data === undefined || data === "") ? "" : null;
        inputColorHandler("name", reset);
    }, []);

    const emailHandler = useCallback((e) => {
        const data = e.target.value || e.target.innerText;
        setEmail(() => data);
        let reset = (data === undefined || data === "") ? "" : null;
        inputColorHandler("email", reset);
    }, []);

    const phoneHandler = useCallback((e) => {
        const data = e.target.value || e.target.innerText;
        setPhone(() => data);
        let reset = (data === undefined || data === "") ? "" : null;
        inputColorHandler("phone", reset);
    }, []);

    const formHandler = (e) => {
        const errorHandler = (dataType, errorMsg) => {
            const elm = document.querySelector(`[data-type=${dataType}]`);
            elm.style.border = "3px solid #cc4242";
            elm.parentElement.setAttribute("data-error-msg", errorMsg);
        };

        e.preventDefault();
        if (fieldsetNo === 1) {
            let errorFlag = false;
            if (Number.isNaN(date)) {
                errorFlag = true;
                errorHandler("date", "Reservation date is required, please.");
            }
            if (time === "") {
                errorFlag = true;
                errorHandler("time", "Reservation time is required, please.");
            }
            if (guests === "") {
                errorFlag = true;
                errorHandler("guests", "Number of guests is required, please.");
            }

            if (errorFlag) return;
            setFieldsetNo(() => 2);
            return;
        } else {
            let errorFlag = false;
            if (name === "") {
                errorFlag = true;
                errorHandler("name", "Full name is required, please.");
            }
            if (email === "") {
                errorFlag = true;
                errorHandler("email", "Email address is required, please.");
            }
            if (!(/^[A-Za-z0-9._+\-\']+@[A-Za-z0-9.\-]+\.[A-Za-z]{2,}$/.test(email))) {
                errorFlag = true;
                errorHandler("email", "Invalid email address.");
            }
            if (phone === "") {
                errorFlag = true;
                errorHandler("phone", "Phone number is required, please.");
            }
            else if (/\D/.test(phone)){
                errorFlag = true;
                errorHandler("phone", "Phone number shouldn't contain any letters.");
            }
            else if (!(/[0-9]{10,}/.test(phone.replace(" ", "")))){
                errorFlag = true;
                errorHandler("phone", "Phone number should contain at least 10 digits.");
            }

            if (errorFlag) return;
        }

        const formData = { date, time, guests, occasion, name, email, phone };
        const result = submitForm(formData);
        if (result) {
            console.log(formData);
            navigate("/booking/confirmed");
        }
    };

    return (
        <form className={s.BookingForm} onSubmit={formHandler}>
            <fieldset className={s.FormField} {...(fieldsetNo === 1 ? { style: { display: "" } } : { style: { display: "none" } })}>
                <InputArea type="date" dataType="date" id="res-date" Icon={CalendarIcon} onChange={dateHandler} label="Choose Date" role="datePick" />
                <InputArea type="select" dataType="time" options={availableTimes} id="res-time" Icon={TimeIcon} onChange={timeHandler} label="Choose Time" selectedOption={time} role="timePick" placeholder="Reservation Time" />
                <InputArea type="select" dataType="occasion" options={occasionTypes.current} id="occasion" Icon={OccasionIcon} onChange={occasionHandler} label="Occasion" selectedOption={occasion} placeholder="Occasion (Optional)" />
                <InputArea type="select" dataType="guests" options={[...Array(8).keys()].map(num => num + 1)} id="guests" Icon={UserIcon} onChange={guestHandler} label="Number of Diners" selectedOption={guests} placeholder="Number of Diners" />
            </fieldset>
            <fieldset className={s.FormField} {...(fieldsetNo === 1 ? { style: { display: "none" } } : { style: { display: "" } })}>
                <InputArea type="text" dataType="name" id="userName" Icon={UserIcon} onChange={nameHandler} label="Full Name" placeholder="Full Name" />
                <InputArea type="text" dataType="email" id="email" Icon={EmailIcon} onChange={emailHandler} label="Email Address" placeholder="Email Address" />
                <InputArea type="text" dataType="phone" id="phone" Icon={PhoneIcon} onChange={phoneHandler} label="Phone Number" placeholder="Phone Number" />
            </fieldset>
            <HomepageButton text="Make Reservation" />
        </form>
    );
};

export default BookingForm;