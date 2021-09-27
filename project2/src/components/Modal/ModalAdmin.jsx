import { unwrapResult } from "@reduxjs/toolkit";
import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useDispatch, useSelector } from "react-redux";
import {
    deleteUser,
    getTotalCountAdmin,
    getUserAll
} from "../../slice/admin.slice";
import { changePageAdmin } from "../../slice/filterAdmin.slice";
import { toastAlert } from "../../utils/helper";

function ModalAdmin({ show, handleClose, item }) {
    const dispatch = useDispatch();
    const handleCloseModal = () => {
        handleClose(false);
    };
    const filterAdmin = useSelector((state) => state.filterAdmin);

    const handleDelete = async (id) => {
        const data = dispatch(deleteUser(id));
        unwrapResult(data);
        dispatch(getTotalCountAdmin(filterAdmin));
        dispatch(changePageAdmin(1));
        dispatch(getUserAll(filterAdmin));
        toastAlert("Xoá thành công", "success");
    };
    return (
        <>
            <Modal show={show} onHide={handleCloseModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Xoá Người dùng</Modal.Title>
                </Modal.Header>
                <Modal.Body className="h4">
                    {`Bạn có chắc chắc muốn xoá người dùng có id ${item.id} này hay không?`}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseModal}>
                        Huỷ
                    </Button>
                    <Button
                        variant="primary"
                        onClick={() => {
                            handleDelete(item.id);
                        }}
                    >
                        Đồng ý
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalAdmin;
