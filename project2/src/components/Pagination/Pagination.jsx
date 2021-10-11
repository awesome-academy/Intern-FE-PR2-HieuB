import React from "react";
import ReactPaginate from "react-paginate";
import * as S from "./Pagination.style";

function Pagination() {
    return (
        <S.Pagination className="pagination-main py-4 d-flex align-items-center justify-content-center mt-5">
            <ReactPaginate pageCount={100}></ReactPaginate>;
        </S.Pagination>
    );
}

export default Pagination;
