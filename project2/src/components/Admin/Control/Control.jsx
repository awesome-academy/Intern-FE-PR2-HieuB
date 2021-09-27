import React from "react";
import Search from "../Search/Search";
import Sort from "../Sort/Sort";
import Row from "react-bootstrap/Row";

function Control({ type }) {
    return (
        <Row className="mt-4">
            <Search type={type}></Search>
            <Sort type={type}></Sort>
        </Row>
    );
}

export default Control;
