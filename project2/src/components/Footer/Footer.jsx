import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import logo from "../../assets/images/product/logo-light.png";
import * as S from "./Footer.style";
import { Link } from "react-router-dom";
import * as data from "../../Page/constants/data";

function Footer() {
    const renderFooterIcon = (data) => {
        return data.map((item, index) => {
            return (
                <li key={index} className="list-inline-item">
                    <Link to={item.path} className="rounded text-white">
                        {item.component}
                    </Link>
                </li>
            );
        });
    };

    const renderFooterLink = (data) => {
        return data.map((item, index) => {
            return (
                <li key={index}>
                    <Link to={item.path} className="text-foot">
                        {item.name}
                    </Link>
                </li>
            );
        });
    };

    return (
        <S.Footer className="footer">
            <Container>
                <Row>
                    <Col lg="4" xs="12" className="mb-0 mb-md-4 pb-0 pb-md-2">
                        <Link to="/" className="logo-footer">
                            <img src={logo} height={24} alt="a" />
                        </Link>
                        <S.FontLG className="mt-4">
                            Start working with Landrick that can provide
                            everything you need to generate awareness, drive
                            traffic, connect.
                        </S.FontLG>
                        <ul className="list-unstyled social-icon social mb-0 mt-4">
                            {renderFooterIcon(data.footerItemList.icon)}
                        </ul>
                    </Col>
                    <div className="col-lg-2 col-md-4 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
                        <h5 className="text-light footer-head">Company</h5>
                        <ul className="list-unstyled footer-list mt-4">
                            {renderFooterLink(data.footerItemList.company)}
                        </ul>
                    </div>
                    <div className="col-lg-3 col-md-4 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
                        <h5 className="text-light footer-head">
                            Usefull Links
                        </h5>
                        <ul className="list-unstyled footer-list mt-4">
                            {renderFooterLink(data.footerItemList.usefull)}
                        </ul>
                    </div>
                </Row>
            </Container>
        </S.Footer>
    );
}

export default Footer;
