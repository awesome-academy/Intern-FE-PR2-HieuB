import React from "react";
import Col from "react-bootstrap/Col";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";

function Sort() {
    return (
        <Col sx="6">
            <DropdownButton id="dropdown-basic-button" title="Sắp xếp">
                <Dropdown.Item
                    className="py-2 h4 d-flex align-items-center justify-content-between"
                    href="#/action-1"
                >
                    Tên A-Z
                </Dropdown.Item>
                <Dropdown.Item className="py-2 h4" href="#/action-2">
                    Tên Z-A
                </Dropdown.Item>
                <Dropdown.Item className="py-2 h4" href="#/action-3">
                    Admin
                </Dropdown.Item>
                <Dropdown.Item className="py-2 h4" href="#/action-3">
                    Người dùng
                </Dropdown.Item>
            </DropdownButton>
        </Col>
    );
}

export default Sort;
