import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useDispatch, useSelector } from "react-redux";
import { LocalStorage } from "../../Page/constants/localStorage";
import { setCart } from "../../slice/cart.slice";
import { toastAlert } from "../../utils/helper";

function ModalConfirm({ show, handleClose, product }) {
    const handleCloseModal = () => {
        handleClose(false);
    };
    const data = useSelector((value) => value.cart);
    const dispatch = useDispatch();
    const handleDelete = () => {
        let result = data.product.filter((item) => {
            return item.id !== product.id;
        });
        let body = {
            ...data,
            product: result
        };
        let userId = JSON.parse(localStorage.getItem(LocalStorage.user)).user
            .id;
        let cartList = JSON.parse(localStorage.getItem(LocalStorage.cart));
        cartList = cartList.filter((item) => {
            return item.userId !== userId;
        });
        cartList.push(body);
        dispatch(setCart(body));
        toastAlert("Xoá sản phẩm thành công!!!", "success");
        localStorage.setItem(LocalStorage.cart, JSON.stringify(cartList));
    };
    return (
        <>
            <Modal show={show} onHide={handleCloseModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Xoá sản phẩm</Modal.Title>
                </Modal.Header>
                <Modal.Body className="h4">
                    {`Bạn có chắc chắc muốn xoá sản phẩm ${product.name} này hay không?`}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseModal}>
                        Huỷ
                    </Button>
                    <Button variant="primary" onClick={handleDelete}>
                        Đồng ý
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalConfirm;
