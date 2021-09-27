import React from "react";
import BreadCrum from "../../components/BreadCrum/BreadCrum";
import CartSection from "../../components/Section/Cart/CartSection";

function Cart() {
    return (
        <>
            <BreadCrum title="Giỏ hàng"></BreadCrum>
            <CartSection></CartSection>
        </>
    );
}

export default Cart;
