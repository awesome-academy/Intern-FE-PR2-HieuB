import React, { useState } from "react";
import Col from "react-bootstrap/Col";
import SearchIcon from "@mui/icons-material/Search";
import Button from "react-bootstrap/Button";
import { useDispatch } from "react-redux";
import { changeQAdmin } from "../../../slice/filterAdmin.slice";
import { changeQAdminProduct } from "../../../slice/filterAdminProduct.slice";
function Search({ type }) {
    const [keyword, setKeyword] = useState("");

    const dispatch = useDispatch();

    const handleSearch = (e) => {
        if (type === "user") {
            dispatch(changeQAdmin(e.target.value));
        } else if (type === "product") {
            dispatch(changeQAdminProduct(e.target.value));
        }
        setKeyword(e.target.value);
    };

    return (
        <Col xs="6">
            <div className="input-group">
                <input
                    name="keyword"
                    type="text"
                    className="form-control"
                    placeholder="Nhập từ khóa..."
                    onChange={handleSearch}
                    value={keyword}
                />
                <span className="input-group-btn">
                    <Button type="button">
                        <SearchIcon></SearchIcon>
                    </Button>
                </span>
            </div>
        </Col>
    );
}

export default Search;
