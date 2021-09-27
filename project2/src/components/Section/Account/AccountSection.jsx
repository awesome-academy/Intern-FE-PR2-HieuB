import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Tab from "react-bootstrap/Tab";
import Nav from "react-bootstrap/Nav";
import Info from "./Info/Info";
import OrderHistory from "./OrderHistory/OrderHistory";
import Avatar from "../../../assets/images/user/01.jpg";

function AccountSection() {
    return (
        <section className="section">
            <Container>
                <Row>
                    <Col xs="12" className="mt-4 pt-2">
                        <div className="media align-items-center d-flex">
                            <img
                                src={Avatar}
                                className="avatar avatar-md-md rounded-circle"
                                width="50"
                                alt="a"
                            />
                            <div className="ml-3">
                                <h6 className="text-muted mb-0">Hello,</h6>
                                <h5 className="mb-0">
                                    {profile.data && profile.data.lastName}
                                </h5>
                            </div>
                        </div>
                    </Col>
                    <Col xs="12" className="col-12 mt-4 pt-2">
                        <Tab.Container
                            id="left-tabs-example"
                            defaultActiveKey="user"
                        >
                            <Row>
                                <Col sm={3}>
                                    <Nav
                                        variant="pills"
                                        className="flex-column"
                                    >
                                        <Nav.Item>
                                            <Nav.Link
                                                eventKey="user"
                                                className="py-3 h4"
                                            >
                                                Thông tin cá nhân
                                            </Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link
                                                eventKey="orderHistory"
                                                className="py-3 h4"
                                            >
                                                Đơn đã mua
                                            </Nav.Link>
                                        </Nav.Item>
                                    </Nav>
                                </Col>
                                <Col sm={9} className="border-left">
                                    <Tab.Content>
                                        <Tab.Pane eventKey="user">
                                            <Info profile={profile}></Info>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="orderHistory">
                                            <OrderHistory></OrderHistory>
                                        </Tab.Pane>
                                    </Tab.Content>
                                </Col>
                            </Row>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default AccountSection;
