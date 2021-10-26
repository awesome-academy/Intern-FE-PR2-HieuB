import styled from "styled-components";
import { colors } from "../../../Page/constants/colors";

export const Panel = styled.div`
    margin-bottom: 2rem;
    background-color: ${colors.whiteColor};
    border: 0.1rem solid ${colors.primaryColor};
    border-radius: 0.4rem;
    box-shadow: 0 1px 1px rgb(0 0 0 / 5%);

    .panel-heading {
        color: ${colors.whiteColor};
        background-color: ${colors.primaryColor};
        border-color: ${colors.primaryColor};
        padding: 1rem 1.5rem;
        border-bottom: 0.1rem solid transparent;
        border-top-left-radius: 0.3rem;
        border-top-right-radius: 0.3rem;

        .panel-title {
            margin-top: 0;
            margin-bottom: 0;
            font-size: 1.6rem;
        }
    }

    .panel-body {
        padding: 1.5rem;
    }
`;
