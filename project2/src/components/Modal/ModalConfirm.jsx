import { unwrapResult } from "@reduxjs/toolkit";
import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useDispatch, useSelector } from "react-redux";
import { LocalStorage } from "../../Page/constants/localStorage";
import { deleteProduct, getCountPageProduct } from "../../slice/admin.slice";
import { setCart } from "../../slice/cart.slice";
import { changePageAdminProduct } from "../../slice/filterAdminProduct.slice";
import { getProducts } from "../../slice/products.slice";
import { toastAlert } from "../../utils/helper";

function ModalConfirm({ show, handleClose, product, type }) {
    const handleCloseModal = () => {
        handleClose(false);
    };
    const data = useSelector((value) => value.cart);
    const filter = useSelector((state) => state.filterAdminProduct);

    const dispatch = useDispatch();

    const handleDelete = async () => {
        if (type === "adminProduct") {
            try {
                const data = await dispatch(deleteProduct(product.id));
                unwrapResult(data);
                toastAlert("Xoá sản phẩm thành công", "success");
            } catch (error) {
                toastAlert("Xoá sản phẩm thất bại", "error");
            }
            dispatch(getProducts(filter));
            dispatch(changePageAdminProduct(1));
            dispatch(getCountPageProduct(filter));
        } else {
            let result = data.product.filter((item) => {
                return item.id !== product.id;
            });
            let body = {
                ...data,
                product: result
            };
            let userId = JSON.parse(localStorage.getItem(LocalStorage.user))
                .user.id;
            let cartList = JSON.parse(localStorage.getItem(LocalStorage.cart));
            cartList = cartList.filter((item) => {
                return item.userId !== userId;
            });
            cartList.push(body);
            dispatch(setCart(body));
            toastAlert("Xoá sản phẩm thành công!!!", "success");
            localStorage.setItem(LocalStorage.cart, JSON.stringify(cartList));
        }
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
