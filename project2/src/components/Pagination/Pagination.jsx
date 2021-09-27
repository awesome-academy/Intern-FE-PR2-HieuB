import { unwrapResult } from "@reduxjs/toolkit";
import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { getTotalPage } from "../../slice/productList.slice";
import * as S from "./Pagination.style";
import { path } from "../../Page/constants/path";
import qs from "query-string";

function Pagination() {
    const history = useHistory();
    const [totalPage, setTotalPage] = useState();
    const filter = useSelector((state) => state.filter);
    const dispatch = useDispatch();

    useEffect(() => {
        const _getTotalPage = async () => {
            const data = await dispatch(getTotalPage(filter));
            const res = unwrapResult(data);
            setTotalPage(res);
        };
        _getTotalPage();
    }, [dispatch, filter]);

    const total = Math.ceil(totalPage / filter._limit);

    const handlePageChange = (e) => {
        const _filter = { ...filter, _page: e.selected + 1 };
        history.push(path.productList + `?${qs.stringify(_filter)}`);
    };
    return (
        <S.Pagination className="pagination-main py-4 d-flex align-items-center justify-content-center mt-5">
            {total > 0 ? (
                <ReactPaginate
                    pageCount={total}
                    forcePage={filter._page - 1}
                    onPageChange={handlePageChange}
                ></ReactPaginate>
            ) : (
                ""
            )}
        </S.Pagination>
    );
}

export default Pagination;
