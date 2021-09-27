import React from "react";
import BreadCrum from "../../components/BreadCrum/BreadCrum";
import ProductDetailSection from "../../components/Section/ProducDetail/ProductDetailSection";

function ProductDetail() {
    return (
        <>
            <BreadCrum title="Chi tiết sản phẩm"></BreadCrum>
            <ProductDetailSection></ProductDetailSection>
        </>
    );
}

export default ProductDetail;
