import styled from "styled-components";
import { Link } from "react-router-dom";

export const CardImage = styled.div`
    width: 100%;
`;

export const CardName = styled(Link)`
    text-overflow: ellipsis;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    display: -webkit-box;
    overflow: hidden;
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
