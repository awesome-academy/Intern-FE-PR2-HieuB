import React, { useState } from "react";

function QuantitySelect({ handleSetQuantity }) {
    const [quantity, setQuantity] = useState(1);

    const handleChangeQuantity = (e) => {
        if (e.target.value < 1) {
            setQuantity(1);
        } else {
            setQuantity(e.target.value);
        }
    };

    const handleChangeQuantityInput = (type) => {
        if (type === "minus") {
            if (quantity > 1) {
                setQuantity(quantity - 1);
                handleSetQuantity(quantity - 1);
            } else {
                setQuantity(1);
                handleSetQuantity(1);
            }
        } else {
            setQuantity(quantity + 1);
            handleSetQuantity(quantity + 1);
        }
    };

    return (
        <div className="d-flex shop-list align-items-center">
            <div className="ml-3">
                <input
                    type="button"
                    defaultValue="-"
                    className="minus btn btn-icon btn-soft-primary font-weight-bold"
                    onClick={() => handleChangeQuantityInput("minus")}
                />
                <input
                    type="number"
                    step={1}
                    min={1}
                    name="quantity"
                    value={quantity}
                    title="Qty"
                    className="btn btn-icon btn-soft-primary font-weight-bold"
                    onChange={handleChangeQuantity}
                />
                <input
                    type="button"
                    defaultValue="+"
                    className="plus btn btn-icon btn-soft-primary font-weight-bold"
                    onClick={() => handleChangeQuantityInput("plus")}
                />
            </div>
        </div>
    );
}

export default QuantitySelect;
