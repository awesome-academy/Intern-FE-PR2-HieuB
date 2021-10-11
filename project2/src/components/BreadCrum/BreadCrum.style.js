import styled from "styled-components";
import Breadcrumb from "react-bootstrap/Breadcrumb";

export const SectionScrumb = styled.section`
    padding: 18.4rem 0 9rem;
    background-size: cover;
    align-self: center;
    position: relative;
    background-position: center center;
`;

export const Title = styled.h4`
    letter-spacing: 0.1rem;
    font-size: 2.4rem;
    display: inline-block;
    padding-bottom: 4rem;

    .page-next {
        position: relative;
        top: 11rem;
        z-index: 99;
    }
`;

export const BreadCrumb = styled(Breadcrumb)`
    .breadcrumb {
        letter-spacing: 0.5px;
        padding: 0.8rem 2.4rem;
        box-shadow: 0 0 3px rgb(60 72 88 / 15%) !important;
        border-radius: 6px !important;
        margin-bottom: 0;

        .breadcrumb-item {
            text-transform: uppercase;
            font-size: 1.4rem;
            font-weight: 700;
            padding-left: 0 2rem;
            display: inline-block;
        }
    }
`;
