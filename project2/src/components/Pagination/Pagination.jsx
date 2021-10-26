import { unwrapResult } from "@reduxjs/toolkit";
import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { getTotalPage } from "../../slice/productList.slice";
import * as S from "./Pagination.style";
import { path } from "../../Page/constants/path";
import qs from "query-string";
import { changePageAdmin } from "../../slice/filterAdmin.slice";
import { changePageAdminProduct } from "../../slice/filterAdminProduct.slice";
import { changePageAdminPayment } from "../../slice/filterAdminPayment.slice";

function Pagination({ admin, filterAdmin, type }) {
    const history = useHistory();

    const dispatch = useDispatch();

    const [totalPage, setTotalPage] = useState();

    const filter = useSelector((state) => state.filter);
    const test = useSelector((state) => state.adminUser.countPage);

    const filterProductAdmin = useSelector(
        (state) => state.adminUser.countPageProduct
    );
    const filterPaymentAdmin = useSelector(
        (state) => state.adminUser.countPagePayment
    );

    useEffect(() => {
        const _getTotalPage = async () => {
            if (admin === true && type === "product") {
                setTotalPage(filterProductAdmin);
            } else if (admin === true && type === "user") {
                setTotalPage(test);
            } else if (admin === true && type === "payment") {
                setTotalPage(filterPaymentAdmin);
            } else {
                const data = await dispatch(getTotalPage(filter));
                const res = unwrapResult(data);
                setTotalPage(res);
            }
        };
        _getTotalPage();
    }, [
        dispatch,
        filter,
        admin,
        test,
        type,
        filterProductAdmin,
        filterPaymentAdmin
    ]);

    const total =
        admin === true
            ? Math.ceil(totalPage / filterAdmin._limit)
            : Math.ceil(totalPage / filter._limit);

    const handlePageChange = (e) => {
        if (admin === true && type === "user") {
            dispatch(changePageAdmin(e.selected + 1));
        } else if (admin === true && type === "product") {
            dispatch(changePageAdminProduct(e.selected + 1));
        } else if (admin === true && type === "payment") {
            dispatch(changePageAdminPayment(e.selected + 1));
        } else {
            const _filter = { ...filter, _page: e.selected + 1 };
            history.push(path.productList + `?${qs.stringify(_filter)}`);
        }
    };

    return (
        <S.Pagination className="pagination-main py-4 d-flex align-items-center justify-content-center mt-5">
            {total > 0 ? (
                <ReactPaginate
                    pageCount={total}
                    forcePage={
                        admin === true
                            ? filterAdmin._page - 1
                            : filter._page - 1
                    }
                    onPageChange={handlePageChange}
                ></ReactPaginate>
            ) : (
                ""
            )}
        </S.Pagination>
    );
}

export default Pagination;
