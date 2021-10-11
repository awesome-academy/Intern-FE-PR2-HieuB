import styled from "styled-components";
import NavDropdown from "react-bootstrap/NavDropdown";
import { colors } from "../../Page/constants/colors";

export const Header = styled.header`
    position: fixed;
    right: 0;
    left: 0;
    top: 0;
    z-index: 1030;
    background-color: transparent;
    border: 0;
    transition: all 0.5s ease;
`;

export const Logo = styled.img`
    font-weight: 700;
    font-size: 24px;
    padding: 0 0 6px;
    letter-spacing: 1px;
    line-height: 68px;
    float: left;
`;

export const NavbarItem = styled.span`
    float: left;
    display: block;
    position: relative;
    margin: 0 1rem;
    color: ${colors.bgDark};
    font-size: 1.3rem;
    background-color: transparent !important;
    font-weight: 700;
    letter-spacing: 0.1rem;
    line-height: 2.4rem;
    text-transform: uppercase;
    transition: all 0.5s;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
`;

export const NavDropDownIcon = styled(NavDropdown)`
    .dropdown-toggle::after {
        display: none;
    }

    .dropdown-menu {
        right: 0;
        top: 120% !important;
        left: unset !important;
    }
`;
