import React from "react";
import Col from "react-bootstrap/Col";
import DropdownButton from "react-bootstrap/DropdownButton";
import { useDispatch } from "react-redux";
import {
    changeOrderAdmin,
    changeSortAdmin
} from "../../../slice/filterAdmin.slice";
import {
    changeOrderAdminProduct,
    changeSortAdminProduct
} from "../../../slice/filterAdminProduct.slice";

function Sort({ type }) {
    const dispatch = useDispatch();

    const handleSort = (sort, order) => {
        dispatch(changeSortAdmin(sort));
        dispatch(changeOrderAdmin(order));
    };

    const handleSortProduct = (sort, order) => {
        dispatch(changeSortAdminProduct(sort));
        dispatch(changeOrderAdminProduct(order));
    };

    const renderHandleSort = (type, order) => {
        if (type === "product") {
            return handleSortProduct("name", order);
        } else {
            return handleSort("email", order);
        }
    };

    return (
        <Col sx="6">
            <DropdownButton id="dropdown-basic-button" title="Sắp xếp">
                <span
                    className="p-3 h4 d-flex align-items-center justify-content-between"
                    onClick={() => {
                        renderHandleSort(type, "asc");
                    }}
                >
                    Tên A-Z
                </span>
                <span
                    className="p-3 h4 d-flex align-items-center justify-content-between"
                    onClick={() => {
                        renderHandleSort(type, "desc");
                    }}
                >
                    Tên Z-A
                </span>
            </DropdownButton>
        </Col>
    );
}

export default Sort;
