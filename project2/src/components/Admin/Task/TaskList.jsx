import TaskItem from "./TaskItem";
import React from "react";
import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";
import * as S from "./TaskList.style";
import { useDispatch, useSelector } from "react-redux";
import {
    changeAddressAdmin,
    changeEmailAdmin,
    changeFirstNameAdmin,
    changeLastNameAdmin,
    changePhoneAdmin,
    changeRoleAdmin
} from "../../../slice/filterAdmin.slice";

function TaskList({ handleEdit, setDisplayForm }) {
    const dispatch = useDispatch();

    const list = useSelector((state) => state.adminUser.profile);
    const handleEditUser = (type, data) => {
        handleEdit(type, data);
    };

    return (
        <S.TaskTable className="table-responsive bg-white shadow mt-5">
            <Table className="table-center table-padding mb-0 table">
                <thead>
                    <tr>
                        <th className="text-center  h4 mw-5">Id:</th>
                        <th className="text-center h4 mw-20">Email:</th>
                        <th className="text-center h4 mw-10">Họ:</th>
                        <th className="text-center h4 mw-10">Tên:</th>
                        <th className="text-center h4 mw-20">Địa chỉ:</th>
                        <th className="text-center h4 mw-20">Số điện thoại:</th>
                        <th className="text-center h4 mw-10">Vai trò:</th>
                        <th className="text-center h4 mw-20">Thao tác:</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td />
                        <td>
                            <input
                                type="text"
                                className="form-control"
                                name="filterEmail"
                                onChange={(e) => {
                                    dispatch(changeEmailAdmin(e.target.value));
                                }}
                            />
                        </td>
                        <td>
                            <input
                                type="text"
                                className="form-control"
                                name="filterFirstName"
                                onChange={(e) => {
                                    dispatch(
                                        changeFirstNameAdmin(e.target.value)
                                    );
                                }}
                            />
                        </td>
                        <td>
                            <input
                                type="text"
                                className="form-control"
                                name="filterLastName"
                                onChange={(e) => {
                                    dispatch(
                                        changeLastNameAdmin(e.target.value)
                                    );
                                }}
                            />
                        </td>
                        <td>
                            <input
                                type="text"
                                className="form-control"
                                name="filterAddress"
                                onChange={(e) => {
                                    dispatch(
                                        changeAddressAdmin(e.target.value)
                                    );
                                }}
                            />
                        </td>
                        <td>
                            <input
                                type="text"
                                className="form-control"
                                name="filterPhone"
                                onChange={(e) => {
                                    dispatch(changePhoneAdmin(e.target.value));
                                }}
                            />
                        </td>
                        <td>
                            <Form.Select
                                className="form-control"
                                name="filterRole"
                                onChange={(e) => {
                                    dispatch(changeRoleAdmin(e.target.value));
                                }}
                            >
                                <option className="h4" value="all">
                                    Tất Cả
                                </option>
                                <option className="h4" value="admin">
                                    Admin
                                </option>
                                <option className="h4" value="user">
                                    Người dùng
                                </option>
                                <option className="h4" value="notactive">
                                    Huỷ kích hoạt
                                </option>
                            </Form.Select>
                        </td>
                        <td />
                    </tr>
                    {list &&
                        list.map((item) => {
                            return (
                                <TaskItem
                                    userItem={item}
                                    key={item.id}
                                    handleEdit={handleEditUser}
                                    setDisplayForm={setDisplayForm}
                                ></TaskItem>
                            );
                        })}
                </tbody>
            </Table>
        </S.TaskTable>
    );
}

export default TaskList;
