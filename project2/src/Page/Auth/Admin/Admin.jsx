import React, { useState } from "react";
import Tab from "react-bootstrap/Tab";
import Container from "react-bootstrap/Container";
import * as S from "./Admin.style";
import TaskForm from "../../../components/Admin/TaskForm/TaskForm";
import Control from "../../../components/Admin/Control/Control";
import TaskList from "../../../components/Admin/Task/TaskList";

function Admin() {
    const [isDisplayForm, setIsDisplayForm] = useState(true);
    return (
        <section className="section">
            <Container>
                <S.AdminTabs
                    defaultActiveKey="user"
                    id="uncontrolled-tab-example"
                    className="mb-3"
                >
                    <Tab eventKey="user" title="Quản lý người dùng">
                        <div className="row mt-5">
                            <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                                <TaskForm></TaskForm>
                            </div>
                            <div
                                className={
                                    isDisplayForm === true
                                        ? "col-xs-8 col-sm-8 col-md-8 col-lg-8"
                                        : "col-xs-12 col-sm-12 col-md-12 col-lg-12"
                                }
                            >
                                <button
                                    type="button"
                                    className="btn btn-primary"
                                >
                                    <span className="fa fa-plus mr-5" />
                                    Thêm Công Việc
                                </button>
                                <Control></Control>
                                <div className="row mt-15">
                                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                        <TaskList></TaskList>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Tab>
                    <Tab eventKey="payment" title="Quản lý đơn hàng">
                        Quản lý đơn hàng
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
