import React from "react";
import s from "./HomePage.module.css";
import HeroSection from "components/HeroSection/HeroSection";
import Specials from "components/Specials/Specials";

const HomePage = () => {
    return (<>
        <HeroSection />
        <Specials />
    </>);
};

export default HomePage;