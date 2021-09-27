import React from "react";
import Col from "react-bootstrap/Col";
import FormFilterSelect from "../../../Input/FormFilterSelect";

function NavPanel() {
    return (
        <Col xs="12" className=" mt-4 mt-sm-0 pt-2 pt-sm-0">
            <div className="d-flex justify-content-end align-items-center">
                <FormFilterSelect></FormFilterSelect>
            </div>
        </Col>
    );
}

export default NavPanel;
