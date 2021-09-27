import styled from "styled-components";
import { colors } from "../../Page/constants/colors";

export const Footer = styled.footer`
    background: ${colors.bgDark};
    padding: 6rem 0;
    position: relative;
    color: ${colors.colorText};

    svg {
        font-size: 2rem;
    }

    .footer-list {
        li {
            padding: 1rem 0;
            font-size: 1.6rem;
            a {
                color: ${colors.whiteColor};
            }
        }
    }
`;

export const FontLG = styled.p`
    font-size: 1.6rem;
    line-height: 1.5;
`;
