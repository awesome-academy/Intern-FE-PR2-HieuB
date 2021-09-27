import styled from "styled-components";
import searchIcon from "../../assets/images/icon/search.png";
import Form from "react-bootstrap/Form";
import { colors } from "../../Page/constants/colors";

export const InputSearch = styled.input`
    box-shadow: none;
    padding: 1.2rem 1.5rem;
    height: 4.5rem;
    font-size: 1.4rem;
    display: block;
    width: 100%;
    outline: none !important;
    padding-right: 4.5rem;
    border: 1px solid ${colors.colorText} !important; ;
`;

export const InputSubmit = styled.input`
    position: absolute;
    top: 0.25rem;
    right: 1rem;
    opacity: 0;
    width: 4rem;
    height: 4rem;
`;

export const FormSearch = styled(Form)`
    &::after {
        position: absolute;
        background: url(${searchIcon}) center center;
        content: "";
        display: block;
        width: 2rem;
        height: 2rem;
        right: 1.6rem;
        top: 1.3rem;
        pointer-events: none;
    }
`;
