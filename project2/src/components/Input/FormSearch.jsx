import React from "react";
import * as S from "./FormSearch.style";

function FormSearch() {
    return (
        <div id="searchProducts" className="widget-search mb-0">
            <S.FormSearch
                role="search"
                id="searchForm"
                className="searchForm position-relative"
            >
                <div>
                    <S.InputSearch
                        type="text"
                        className="rounded"
                        name="searchProduct"
                        id="formInputSearchProducts"
                        placeholder="Nhập tên sản phẩm..."
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
