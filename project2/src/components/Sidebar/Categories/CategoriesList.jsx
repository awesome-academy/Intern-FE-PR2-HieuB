import React from "react";
import CategoryItem from "./CategoryItem";

function CategoriesList() {
    return (
        <ul className="list-unstyled mt-4 mb-0">
            <CategoryItem></CategoryItem>
            <CategoryItem></CategoryItem>
        </ul>
    );
}

export default CategoriesList;
