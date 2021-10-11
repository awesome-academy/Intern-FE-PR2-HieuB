import styled from "styled-components";
import bgSlide from "../../../assets/images/bg2.jpg";

export const MainSlider = styled.section`
    height: 100vh;

    .slides {
        margin: 0;
        padding: 0;
        list-style: none;

        .bg-slider {
            background: url(${bgSlide}) center center;
            width: 100%;
            float: left;
            margin-right: -100%;
            position: relative;
            opacity: 1;
            display: block;
            z-index: 1;
            height: 100vh;
            align-self: center;
        }
        .title-heading {
            line-height: 2.6rem;
        }
    }
`;
