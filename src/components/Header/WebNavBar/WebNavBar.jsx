import React from "react";
import s from "./WebNavBar.module.css";

const WebNavBar = ({ links }) => {
    return (
        <nav className={s.WebNavBar}>
            <ul>
                {links}
            </ul>
        </nav>
    );
};

export default WebNavBar;