import styled from "styled-components";
import { colors } from "../../../Page/constants/colors";

export const TaskLabel = styled.span`
    &.label {
        background-color: ${colors.colorDanger};
        display: inline;
        padding: 0.2em 0.6em 0.3em;
        font-size: 75%;
        font-weight: 700;
        line-height: 1;
        color: #fff;
        text-align: center;
        white-space: nowrap;
        vertical-align: baseline;
        border-radius: 0.25em;
        &.label-danger {
            background-color: ${colors.colorDanger};
        }
        &.label-success {
            background-color: ${colors.colorSuccess};
        }
    }
`;
