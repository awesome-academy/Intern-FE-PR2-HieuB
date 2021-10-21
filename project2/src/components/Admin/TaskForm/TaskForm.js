import React from "react";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import * as S from "./TaskForm.style";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function TaskForm() {
    return (
        <S.Panel>
            <div className="panel-heading d-flex align-items-center justify-content-between">
                <h3 className="panel-title">Thêm người dùng</h3>
                <HighlightOffIcon></HighlightOffIcon>
            </div>
            <div className="panel-body">
                <Form>
                    <Form.Group className="form-group mb-4 mb-4">
                        <Form.Label>Email :</Form.Label>
                        <input
                            type="text"
                            className="form-control"
                            name="email"
                        />
                    </Form.Group>
                    <Form.Group className="form-group mb-4">
                        <Form.Label>Họ :</Form.Label>
                        <input
                            type="text"
                            className="form-control"
                            name="firstName"
                        />
                    </Form.Group>
                    <Form.Group className="form-group mb-4">
                        <Form.Label>Tên :</Form.Label>
                        <input
                            type="text"
                            className="form-control"
                            name="lastName"
                        />
                    </Form.Group>
                    <Form.Group className="form-group mb-4">
                        <Form.Label>Số điện thoại :</Form.Label>
                        <input
                            type="text"
                            className="form-control"
                            name="phone"
                        />
                    </Form.Group>
                    <Form.Group className="form-group mb-4">
                        <Form.Label>Địa chỉ :</Form.Label>
                        <input
                            type="text"
                            className="form-control"
                            name="address"
                        />
                    </Form.Group>
                    <Form.Group className="form-group mb-4">
                        <Form.Label>Mật khẩu:</Form.Label>
                        <input
                            type="text"
                            className="form-control"
                            name="password"
                        />
                    </Form.Group>
                    <Form.Label>Vai trò :</Form.Label>
                    <Form.Select className="form-control" required name="role">
                        <option value="user">Người dùng</option>
                        <option value="admin">Admin</option>
                    </Form.Select>

                    <div className="text-center mt-5">
                        <Button type="submit">Thêm</Button>
                        &nbsp;
                        <Button type="button" className="btn-danger">
                            Hủy Bỏ
                        </Button>
                    </div>
                </Form>
            </div>
        </S.Panel>
    );
}

export default TaskForm;
