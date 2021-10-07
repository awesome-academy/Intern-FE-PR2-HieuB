import React from "react";
import Category from "./Categories/Category";
import PopularProduct from "./Product/PopularProduct";
import ProductMostViewed from "./Product/ProductMostViewed";

function MainSection({ categories, popularProducts, mostViewProducts }) {
    return (
        <section className="section">
            <ProductMostViewed products={mostViewProducts}></ProductMostViewed>
            <Category categories={categories}></Category>
            <PopularProduct products={popularProducts}></PopularProduct>
        </section>
    );
}

export default MainSection;
