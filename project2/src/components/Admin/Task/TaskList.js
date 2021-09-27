import TaskItem from "./TaskItem";
import React from "react";
import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";
import * as S from "./TaskList.style";

function TaskList() {
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
                            />
                        </td>
                        <td>
                            <input
                                type="text"
                                className="form-control"
                                name="filterFirstName"
                            />
                        </td>
                        <td>
                            <input
                                type="text"
                                className="form-control"
                                name="filterLastName"
                            />
                        </td>
                        <td>
                            <input
                                type="text"
                                className="form-control"
                                name="filterAddress"
                            />
                        </td>
                        <td>
                            <input
                                type="text"
                                className="form-control"
                                name="filterPhone"
                            />
                        </td>
                        <td>
                            <Form.Select
                                className="form-control"
                                name="filterRole"
                            >
                                <option className="h4" value={-1}>
                                    Tất Cả
                                </option>
                                <option className="h4" value={0}>
                                    Admin
                                </option>
                                <option className="h4" value={1}>
                                    Người dùng
                                </option>
                            </Form.Select>
                        </td>
                        <td />
                    </tr>
                    <TaskItem></TaskItem>
                </tbody>
            </Table>
        </S.TaskTable>
    );
}

export default TaskList;
