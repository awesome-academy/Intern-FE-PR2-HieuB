import React from "react";
import OrderHistoryItem from "./OrderHistoryItem";

function OrderHistoryList({ paymentId, paymentType, list }) {
    const renderHistoryItem = () => {
        return list.map((item, index) => {
            return (
                <OrderHistoryItem
                    product={item}
                    paymentId={paymentId}
                    paymentType={paymentType}
                    key={index}
                ></OrderHistoryItem>
            );
        });
    };
    return <>{renderHistoryItem()}</>;
}

export default OrderHistoryList;
