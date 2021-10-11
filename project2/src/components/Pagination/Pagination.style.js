import styled from "styled-components";
import { colors } from "../../Page/constants/colors";

export const Pagination = styled.div`
    ul {
        display: flex;
        li {
            padding: 0 1rem;
            &.selected {
                a {
                    font-weight: bold;
                    color: ${colors.blackColor};
                }
            }
            a {
                font-size: 2rem;
                background-color: unset;
                border: none;
            }
        }
    }
`;
