import React, { useEffect, useState } from "react";
import Tab from "react-bootstrap/Tab";
import Container from "react-bootstrap/Container";
import * as S from "./Admin.style";
import { getTotalCountAdmin, getUserAll } from "../../../slice/admin.slice";
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

function Admin() {
    const [isDisplayForm, setIsDisplayForm] = useState(false);

    const [filterAd, setFilterAd] = useState({});
    const [userList, setUserList] = useState([]);
    const [profile, setProfile] = useState({});

    const dispatch = useDispatch();

    const filterAdmin = useSelector((state) => state.filterAdmin);

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
                    <Tab eventKey="user" title="Quản lý người dùng">
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
                                    Thêm Người dùng
                                </Button>
                                <Control></Control>
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
                                            filterAdmin={filterAd}
                                        ></Pagination>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Tab>
                    <Tab eventKey="payment" title="Quản lý đơn hàng">
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
                                    Thêm sản phẩm
                                </Button>
                                <Control></Control>
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
                                            filterAdmin={filterAd}
                                        ></Pagination>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Tab>
                    <Tab eventKey="product" title="Quản lý sản phẩm">
                        Quản lý sản phẩm
                    </Tab>
                </S.AdminTabs>
            </Container>
        </section>
    );
}

export default Admin;
