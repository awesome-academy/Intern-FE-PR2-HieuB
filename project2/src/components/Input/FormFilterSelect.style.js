import styled from "styled-components";
import Form from "react-bootstrap/Form";
import { colors } from "../../Page/constants/colors";

export const FormSelect = styled(Form.Select)`
    box-shadow: none;
    background-color: ${colors.whiteColor};
    border: 1px solid ${colors.bgDark};
    color: ${colors.bgDark};
    height: 4.2rem;
    font-size: 1.5rem;
    border-radius: 6px;
    transition: all 0.5s ease;
`;
