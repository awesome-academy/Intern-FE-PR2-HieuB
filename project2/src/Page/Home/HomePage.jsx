import React from "react";
import Introduction from "../../components/Section/Introduction/Introduction";
import MainSection from "../../components/Section/MainSection/MainSection";
import Slider from "../../components/Section/Slider/Slider";

function HomePage() {
    return (
        <>
            <Slider></Slider>
            <Introduction></Introduction>
            <MainSection></MainSection>
        </>
    );
}

export default HomePage;
