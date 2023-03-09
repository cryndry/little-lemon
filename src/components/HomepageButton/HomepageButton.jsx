import React from "react";
import s from "./HomepageButton.module.css";

const HomepageButton = ({ text, onClick }) => (
    <button className={s.HomepageButton} {...(onClick ? { onClick } : "")} >{text}</button>
);

export default HomepageButton;