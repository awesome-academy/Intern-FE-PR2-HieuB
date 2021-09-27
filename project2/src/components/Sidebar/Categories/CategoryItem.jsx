import React, { useEffect, useState } from "react";
import * as S from "./CategoryItem.style";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { setFilter } from "../../../slice/filter.slice";
import { path } from "../../../Page/constants/path";
import qs from "query-string";
import useQuery from "../../../hook/useQuery";

function CategoryItem({ category, setActive, active }) {
    const query = useQuery();
    const [categoryItem, setCategoryItem] = useState();
    useEffect(() => {
        setCategoryItem(Number(query.categoryID));
    }, [query]);
    const filter = useSelector((state) => state.filter);
    const history = useHistory();
    const dispatch = useDispatch();
    const handleSearchCategory = (id) => {
        setActive(id);
        let _filter;
        if (id === categoryItem) {
            setCategoryItem(null);
            _filter = { ...filter, categoryID: null };
        } else {
            setCategoryItem(id);
            _filter = { ...filter, categoryID: id };
        }
        dispatch(setFilter(_filter));
        history.push(path.productList + `?${qs.stringify(_filter)}`);
    };
    return (
        <S.SibarCategoryItem
            className={`py-2 ${active ? "active" : ""}`}
            onClick={() => handleSearchCategory(category.id)}
        >
            {category.name}
        </S.SibarCategoryItem>
    );
}

export default CategoryItem;
