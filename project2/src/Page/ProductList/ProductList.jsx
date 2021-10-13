import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import BreadCrum from "../../components/BreadCrum/BreadCrum";
import ProductListSection from "../../components/Section/ProductList/ProductListSection";
import useQuery from "../../hook/useQuery";
import { setFilter } from "../../slice/filter.slice";
import { getProducts } from "../../slice/products.slice";

function ProductList() {
    const query = useQuery();
    const dispatch = useDispatch();
    useEffect(() => {
        const _filters = {
            ...query,
            _page: query._page || 1,
            _limit: query._limit || 4,
            _sort: query._sort || "price",
            _order: query._order || "asc"
        };
        dispatch(setFilter(_filters));
        const params = {
            _page: _filters._page,
            _limit: _filters._limit,
            name_like: _filters.name_like,
            categoryID: _filters.categoryID || [],
            rating: _filters.rating || [],
            price_gte: _filters.price_gte || [],
            price_lte: _filters.price_lte || [],
            _sort: _filters._sort,
            _order: _filters._order
        };
        const _getProducts = async () => {
            dispatch(getProducts(params));
        };
        _getProducts();
    }, [dispatch, query]);
    return (
        <>
            <BreadCrum></BreadCrum>
            <ProductListSection></ProductListSection>
        </>
    );
}

export default ProductList;
