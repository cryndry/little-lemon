import React, { useState } from "react";
import s from "./MobileNavBar.module.css";
import { ReactComponent as MenuButton } from "assets/MenuButton.svg";
import { ReactComponent as CloseButton } from "assets/CloseButton.svg";

const MobileNavBar = ({ links }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className={s.MobileNavBar}>
            {isMenuOpen
                ? <CloseButton onClick={() => { setIsMenuOpen(false) }} />
                : <MenuButton onClick={() => { setIsMenuOpen(true) }} />
            }
            {isMenuOpen && <ul>{links}</ul>}
        </nav>
    );
};

export default MobileNavBar;