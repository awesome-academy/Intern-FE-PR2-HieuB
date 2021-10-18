import React, { useState } from "react";
import HeaderCartList from "../Cart/HeaderCart/HeaderCartList";
import HeaderAccountList from "./Account/HeaderAccountList";
import * as S from "./Header.style";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import Container from "react-bootstrap/Container";
import logo from "../../assets/images/product/logo-dark.png";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link, NavLink } from "react-router-dom";
import { path } from "../../Page/constants/path";

function Header() {
    const [isLogged, setIsLogged] = useState(false);
    return (
        <S.Header id="topnav" className="defaultscroll sticky">
            <Container>
                <Navbar
                    collapseOnSelect
                    expand="lg"
                    bg="transparent"
                    variant="light"
                    className="py-5"
                >
                    <Container>
                        <NavLink to={path.home}>
                            <Navbar.Brand>
                                <S.Logo src={logo} height={24} alt="logo" />
                            </Navbar.Brand>
                        </NavLink>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto">
                                <NavLink to={path.productList}>
                                    <S.NavbarItem className="navbar-item">
                                        danh sách sản phẩm
                                    </S.NavbarItem>
                                </NavLink>
                            </Nav>
                            <Nav>
                                {isLogged ? (
                                    <ul className="buy-button list-inline mb-0 d-flex align-items-center">
                                        <S.NavDropDownIcon
                                            title={
                                                <ShoppingCartIcon className="icons"></ShoppingCartIcon>
                                            }
                                            id="collasible-nav-dropdown-cart"
                                            className="btn btn-icon btn-primary"
                                        >
                                            <HeaderCartList></HeaderCartList>
                                        </S.NavDropDownIcon>
                                        <S.NavDropDownIcon
                                            title={
                                                <PersonOutlineIcon className="icons"></PersonOutlineIcon>
                                            }
                                            id="collasible-nav-dropdown-user"
                                            className="btn btn-icon btn-primary"
                                        >
                                            <HeaderAccountList></HeaderAccountList>
                                        </S.NavDropDownIcon>
                                    </ul>
                                ) : (
                                    <Link
                                        to="/login"
                                        className="btn-primary btn"
                                    >
                                        Đăng nhập
                                    </Link>
                                )}
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </Container>
        </S.Header>
    );
}

export default Header;
