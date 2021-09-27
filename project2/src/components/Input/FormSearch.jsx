import React, { useEffect, useState } from "react";
import * as S from "./FormSearch.style";
import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../../slice/filter.slice";
import qs from "query-string";
import { useHistory } from "react-router";
import { path } from "../../Page/constants/path";
import useQuery from "../../hook/useQuery";

function FormSearch() {
    const query = useQuery();
    useEffect(() => {
        const { name_like = "" } = query;
        setValue(name_like);
    }, [query]);
    const dispatch = useDispatch();
    const filter = useSelector((state) => state.filter);
    const history = useHistory();
    const [value, setValue] = useState("");
    const handleSearchProduct = (e) => {
        setValue(e.target.value);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        const _filter = { ...filter, name_like: value };
        dispatch(setFilter(_filter));
        history.push(path.productList + `?${qs.stringify(_filter)}`);
    };

    return (
        <div id="searchProducts" className="widget-search mb-0">
            <S.FormSearch
                role="search"
                id="searchForm"
                className="searchForm position-relative"
                onSubmit={handleSubmit}
            >
                <div>
                    <S.InputSearch
                        type="text"
                        className="rounded"
                        name="searchProduct"
                        id="formInputSearchProducts"
                        placeholder="Nhập tên sản phẩm..."
                        onChange={handleSearchProduct}
                        value={value}
                    />
                    <S.InputSubmit
                        type="submit"
                        id="searchSubmit"
                        defaultValue="Search"
                    />
                </div>
            </S.FormSearch>
        </div>
    );
}

export default FormSearch;
