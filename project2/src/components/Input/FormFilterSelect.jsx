import React from "react";
import Form from "react-bootstrap/Form";
import * as S from "./FormFilterSelect.style";

function FormFilterSelect() {
    return (
        <Form className="custom-form">
            <Form.Group className="form-group mb-0">
                <S.FormSelect id="Sortby">
                    <option value="priceasc">Giá tăng dần</option>
                    <option value="pricedesc">Giá giảm dần</option>
                    <option value="views">Phổ biến</option>
                </S.FormSelect>
            </Form.Group>
        </Form>
    );
}

export default FormFilterSelect;
