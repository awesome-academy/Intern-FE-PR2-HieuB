import React from "react";
import Col from "react-bootstrap/Col";
import SearchIcon from "@mui/icons-material/Search";
function Search() {
    return (
        <Col xs="6">
            <div className="input-group">
                <input
                    name="keyword"
                    type="text"
                    className="form-control"
                    placeholder="Nhập từ khóa..."
                />
                <span className="input-group-btn">
                    <button className="btn btn-primary" type="button">
                        <SearchIcon></SearchIcon>
                    </button>
                </span>
            </div>
        </Col>
    );
}

export default Search;
