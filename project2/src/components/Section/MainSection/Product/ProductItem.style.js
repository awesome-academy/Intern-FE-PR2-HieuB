import styled from "styled-components";

export const CardImage = styled.div`
    width: 100%;
`;

export const ShopIcon = styled.ul`
    top: 15px;
    right: 15px;
    z-index: 2;
    position: absolute;
    opacity: 0;
    transition: all 0.5s ease;

    ${CardImage}:hover & {
        opacity: 1;
        transition: all 0.5s ease;
    }
`;
