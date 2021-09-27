import React from "react";
import BreadCrum from "../../components/BreadCrum/BreadCrum";
import CheckoutSection from "../../components/Section/Checkout/CheckoutSection";

function Checkout() {
    return (
        <>
            <BreadCrum title="Thanh toán"></BreadCrum>
            <CheckoutSection></CheckoutSection>
        </>
    );
}

export default Checkout;
