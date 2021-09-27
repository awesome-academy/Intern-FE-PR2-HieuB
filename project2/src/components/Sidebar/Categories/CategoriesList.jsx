import React, { useEffect, useState } from "react";
import CategoryItem from "./CategoryItem";
import { useDispatch } from "react-redux";
import { getCategories } from "../../../slice/categories.slice";
import { unwrapResult } from "@reduxjs/toolkit";

function CategoriesList() {
    const dispatch = useDispatch();
    const [categories, setCategories] = useState([]);
    const [itemActive, setItemActive] = useState("");

    useEffect(() => {
        const _getCategories = async () => {
            const data = await dispatch(getCategories());
            const res = unwrapResult(data);
            setCategories(res);
        };
        _getCategories();
    }, [dispatch]);

    const setActive = (id) => {
        itemActive === id ? setItemActive("") : setItemActive(id);
    };

    return (
        <ul className="list-unstyled mt-4 mb-0">
            {categories &&
                categories.map((category) => {
                    return (
                        <CategoryItem
                            key={category.id}
                            category={category}
                            setActive={setActive}
                            active={itemActive === category.id ? true : false}
                        ></CategoryItem>
                    );
                })}
        </ul>
    );
}

export default CategoriesList;
