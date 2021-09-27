import styled from "styled-components";
import { colors } from "../../../Page/constants/colors";

export const TaskTable = styled.div`
    .table td,
    .table th {
        vertical-align: middle;
        padding: 0.75rem;
        border-top: 1px solid ${colors.colorGray};
    }
`;
