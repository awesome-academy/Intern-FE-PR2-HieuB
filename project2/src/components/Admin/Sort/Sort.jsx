import React from "react";
import Col from "react-bootstrap/Col";
import DropdownButton from "react-bootstrap/DropdownButton";
import { useDispatch } from "react-redux";
import {
    changeOrderAdmin,
    changeSortAdmin
} from "../../../slice/filterAdmin.slice";

function Sort() {
    const dispatch = useDispatch();

    const handleSort = (sort, order) => {
        dispatch(changeSortAdmin(sort));
        dispatch(changeOrderAdmin(order));
    };

    return (
        <Col sx="6">
            <DropdownButton id="dropdown-basic-button" title="Sắp xếp">
                <span
                    className="p-3 h4 d-flex align-items-center justify-content-between"
                    onClick={() => {
                        handleSort("email", "asc");
                    }}
                >
                    Tên A-Z
                </span>
                <span
                    className="p-3 h4 d-flex align-items-center justify-content-between"
                    onClick={() => {
                        handleSort("email", "desc");
                    }}
                >
                    Tên Z-A
                </span>
            </DropdownButton>
        </Col>
    );
}

export default Sort;
