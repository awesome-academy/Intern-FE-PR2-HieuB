import React from "react";
import Category from "./Categories/Category";
import PopularProduct from "./Product/PopularProduct";
import ProductMostViewed from "./Product/ProductMostViewed";

function MainSection() {
    return (
        <section className="section">
            <ProductMostViewed></ProductMostViewed>
            <Category></Category>
            <PopularProduct></PopularProduct>
        </section>
    );
}

export default MainSection;
