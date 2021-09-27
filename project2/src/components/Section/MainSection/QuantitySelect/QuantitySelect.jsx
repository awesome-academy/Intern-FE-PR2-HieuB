import React from "react";

function QuantitySelect() {
    return (
        <div className="d-flex shop-list align-items-center">
            <h6 className="mb-0">Quantity:</h6>
            <div className="ml-3">
                <input
                    type="button"
                    defaultValue="-"
                    className="minus btn btn-icon btn-soft-primary font-weight-bold"
                />
                <input
                    type="text"
                    step={1}
                    min={1}
                    name="quantity"
                    defaultValue={1}
                    title="Qty"
                    className="btn btn-icon btn-soft-primary font-weight-bold"
                />
                <input
                    type="button"
                    defaultValue="+"
                    className="plus btn btn-icon btn-soft-primary font-weight-bold"
                />
            </div>
        </div>
    );
}

export default QuantitySelect;
