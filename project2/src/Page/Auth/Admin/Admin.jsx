import React, { useEffect, useState } from "react";
import Tab from "react-bootstrap/Tab";
import Container from "react-bootstrap/Container";
import * as S from "./Admin.style";
import {
    getCountPagePayment,
    getCountPageProduct,
    getTotalCountAdmin,
    getUserAll
} from "../../../slice/admin.slice";
import { unwrapResult } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Pagination from "../../../components/Pagination/Pagination";
import TaskForm from "../../../components/Admin/TaskForm/TaskForm";
import Control from "../../../components/Admin/Control/Control";
import TaskList from "../../../components/Admin/Task/TaskList";
import { addUser } from "../../../slice/manager.slice";
import ProductForm from "../../../components/Admin/TaskForm/ProductForm";
import ProductTaskList from "../../../components/Admin/Task/ProductTaskList";
import PaymentTaskList from "../../../components/Admin/Task/PaymentTaskList";
import PaymentDetailList from "../../../components/Admin/PaymentDetail/PaymentDetailList";

function Admin() {
    const [isDisplayForm, setIsDisplayForm] = useState(false);
    const [filterAd, setFilterAd] = useState({});
    const [userList, setUserList] = useState([]);
    const [profile, setProfile] = useState({});
    const [show, setShow] = useState(true);

    const dispatch = useDispatch();

    const filterAdmin = useSelector((state) => state.filterAdmin);
    const filterAdminProduct = useSelector((state) => state.filterAdminProduct);
    const filterAdminPayment = useSelector((state) => state.filterAdminPayment);

    useEffect(() => {
        const _getUserAll = async () => {
            const data = await dispatch(getUserAll(filterAdmin));
            const res = unwrapResult(data);
            setUserList(res.data);
        };
        _getUserAll();
        const _getTotalCount = async () => {
            const count = await dispatch(getTotalCountAdmin(filterAdmin));
            const res = unwrapResult(count);
            setFilterAd({ ...filterAdmin, count: res });
        };
        _getTotalCount();
    }, [dispatch, filterAdmin]);

    useEffect(() => {
        const _getTotalCount = async () => {
            const count = await dispatch(
                getCountPageProduct(filterAdminProduct)
            );
            unwrapResult(count);
        };
        _getTotalCount();
    }, [dispatch, filterAdminProduct]);

    useEffect(() => {
        const _getTotalCount = async () => {
            const count = await dispatch(
                getCountPagePayment(filterAdminPayment)
            );
            unwrapResult(count);
        };
        _getTotalCount();
    }, [dispatch, filterAdminPayment]);

    const handleEdit = (type, data) => {
        setProfile({
            type: type,
            user: data
        });
    };

    return (
        <section className="section">
            <Container>
                <S.AdminTabs
                    defaultActiveKey="user"
                    id="uncontrolled-tab-example"
                    className="mb-3"
                >
                    <Tab eventKey="user" title="Qu???n l?? ng?????i d??ng">
                        <Row className="mt-5">
                            {isDisplayForm === true ? (
                                <Col xs="4">
                                    <TaskForm
                                        setDisplayForm={(params) => {
                                            setIsDisplayForm(params);
                                        }}
                                        filterAdmin={filterAd}
                                        profile={profile}
                                    ></TaskForm>
                                </Col>
                            ) : (
                                ""
                            )}

                            <Col xs={isDisplayForm === true ? "8" : "12"}>
                                <Button
                                    type="button"
                                    onClick={() => {
                                        dispatch(addUser({}));
                                        setIsDisplayForm(!isDisplayForm);
                                    }}
                                >
                                    Th??m Ng?????i d??ng
                                </Button>
                                <Control type="user"></Control>
                                <Row className="mt-15">
                                    <Col xs="12">
                                        <TaskList
                                            userList={userList}
                                            handleEdit={handleEdit}
                                            setDisplayForm={(params) => {
                                                setIsDisplayForm(params);
                                            }}
                                        ></TaskList>
                                        <Pagination
                                            admin={true}
                                            type="user"
                                            filterAdmin={filterAd}
                                        ></Pagination>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Tab>
                    <Tab eventKey="product" title="Qu???n l?? s???n ph???m">
                        <Row className="mt-5">
                            {isDisplayForm === true ? (
                                <Col xs="4">
                                    <ProductForm
                                        setDisplayForm={(params) => {
                                            setIsDisplayForm(params);
                                        }}
                                    ></ProductForm>
                                </Col>
                            ) : (
                                ""
                            )}

                            <Col xs={isDisplayForm === true ? "8" : "12"}>
                                <Button
                                    type="button"
                                    onClick={() => {
                                        dispatch(addUser({}));
                                        setIsDisplayForm(!isDisplayForm);
                                    }}
                                >
                                    Th??m s???n ph???m
                                </Button>
                                <Control type="product"></Control>
                                <Row className="mt-15">
                                    <Col xs="12">
                                        <ProductTaskList
                                            userList={userList}
                                            handleEdit={handleEdit}
                                            setDisplayForm={(params) => {
                                                setIsDisplayForm(params);
                                            }}
                                        ></ProductTaskList>
                                        <Pagination
                                            admin={true}
                                            type="product"
                                            filterAdmin={filterAdminProduct}
                                        ></Pagination>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Tab>
                    <Tab eventKey="payment" title="Qu???n l?? ????n h??ng">
                        <PaymentTaskList
                            show={show}
                            handleShow={(stt) => setShow(stt)}
                        ></PaymentTaskList>
                        {show ? (
                            <Pagination
                                admin={true}
                                type="payment"
                                filterAdmin={filterAdminPayment}
                            ></Pagination>
                        ) : (
                            <>
                                <PaymentDetailList></PaymentDetailList>
                                <Button
                                    className="mt-5"
                                    onClick={() => setShow(true)}
                                >
                                    Quay l???i
                                </Button>
                            </>
                        )}
                    </Tab>
                </S.AdminTabs>
            </Container>
        </section>
    );
}

export default Admin;
