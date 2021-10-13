import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { path } from "../../Page/constants/path";
import { setFilter } from "../../slice/filter.slice";
import * as S from "./FormFilterSelect.style";
import qs from "query-string";

function FormFilterSelect() {
    const [select, setSelect] = useState({
        sort: "price",
        order: "asc"
    });
    const dispatch = useDispatch();
    const history = useHistory();
    const filter = useSelector((state) => state.filter);
    useEffect(() => {
        setSelect({
            sort: filter._sort,
            order: filter._order
        });
    }, [filter]);

    const handleSort = (e) => {
        let _filter;
        if (e.target.value === "priceasc") {
            _filter = { ...filter, _sort: "price", _order: "asc" };
        } else if (e.target.value === "pricedesc") {
            _filter = { ...filter, _sort: "price", _order: "desc" };
        } else {
            _filter = { ...filter, _sort: "views", _order: "desc" };
        }
        dispatch(setFilter(_filter));
        history.push(path.productList + `?${qs.stringify(_filter)}`);
    };

    const setDefaultValue = () => {
        if (select.sort === "views") {
            return "views";
        } else if (select.sort === "price" && select.order === "asc") {
            return "priceasc";
        } else {
            return "pricedesc";
        }
    };
    return (
        <Form className="custom-form">
            <Form.Group className="form-group mb-0">
                <S.FormSelect
                    id="Sortby"
                    onChange={handleSort}
                    value={setDefaultValue()}
                >
                    <option value="priceasc">Giá tăng dần</option>
                    <option value="pricedesc">Giá giảm dần</option>
                    <option value="views">Phổ biến</option>
                </S.FormSelect>
            </Form.Group>
        </Form>
    );
}

export default FormFilterSelect;
