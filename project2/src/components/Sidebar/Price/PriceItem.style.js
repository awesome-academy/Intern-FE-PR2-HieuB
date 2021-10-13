import styled from "styled-components";
import { colors } from "../../../Page/constants/colors";

export const PriceItem = styled.li`
    cursor: pointer;
    &.active {
        color: ${colors.primaryColor};
    }
`;
