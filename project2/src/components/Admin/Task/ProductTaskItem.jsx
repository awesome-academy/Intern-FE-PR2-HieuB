import React, { useState } from "react";
import CreateIcon from "@mui/icons-material/Create";
import * as S from "./TaskItem.style";
import Button from "react-bootstrap/Button";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { formatCurrency } from "../../../utils/helper";
import ModalConfirm from "../../Modal/ModalConfirm";
import { useDispatch } from "react-redux";
import { editProduct } from "../../../slice/manager.slice";

function ProductTaskItem({ product, setDisplayForm }) {
    const dispatch = useDispatch();

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const {
        id,
        image,
        categoryID,
        description,
        name,
        quantity,
        price,
        price_before_discount
    } = product;

    const renderLabel = (id) => {
        if (id === 1) {
            return "label-danger";
        } else if (id === 2) {
            return "label-success";
        } else {
            return "label-default";
        }
    };
    const renderCategory = (id) => {
        if (id === 1) {
            return "Áo Thun";
        } else if (id === 2) {
            return "Đồng Hồ";
        } else {
            return "Điện Thoại";
        }
    };

    const handleEdit = () => {
        dispatch(editProduct(product));
        setDisplayForm(true);
    };

    return (
        <>
            <tr>
                <td className="text-center h4">{id}</td>
                <td className="text-center h4">{name}</td>
                <td className="text-center h4 ">{image}</td>
                <td className="text-center h4 ">{description}</td>
                <td className="text-center h4">{formatCurrency(price)}</td>
                <td className="text-center h4">
                    {formatCurrency(price_before_discount)}
                </td>
                <td className="text-center h4 ">{quantity}</td>
                <td className="text-center h4">
                    <S.TaskLabel className={`label ${renderLabel(categoryID)}`}>
                        {renderCategory(categoryID)}
                    </S.TaskLabel>
                </td>
                <td className="text-center">
                    <div className="d-flex align-items-center justify-content-around">
                        <Button
                            type="button"
                            className="btn-warning d-flex align-items-center mx-2"
                            onClick={handleEdit}
                        >
                            <CreateIcon></CreateIcon>
                            Sửa
                        </Button>
                        <Button
                            type="button"
                            className="btn-danger d-flex align-items-center mx-2"
                            onClick={handleShow}
                        >
                            <DeleteForeverIcon></DeleteForeverIcon>
                            Xoá
                        </Button>
                    </div>
                </td>
            </tr>
            <ModalConfirm
                show={show}
                handleClose={handleClose}
                product={product}
                type="adminProduct"
            ></ModalConfirm>
        </>
    );
}

export default ProductTaskItem;
