import React from "react";
import s from "./HomePage.module.css";
import HeroSection from "components/HeroSection/HeroSection";
import Specials from "components/Specials/Specials";
import Testimonials from "components/Testimonials/Testimonials";

const HomePage = () => {
    return (<>
        <HeroSection />
        <Specials />
        <Testimonials />
    </>);
};

export default HomePage;