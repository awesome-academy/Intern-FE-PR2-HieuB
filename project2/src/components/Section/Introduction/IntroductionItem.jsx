import React from "react";
import Col from "react-bootstrap/Col";
import * as S from "./IntroductionItem.style";

function IntroductionItem() {
    return (
        <Col md="4" className="mt-4 pt-2 mt-sm-0 pt-sm-0">
            <S.IntroductionBG1 className="py-5 rounded shadow">
                <div className="p-4">
                    <h3>
                        Summer <br /> Collection
                    </h3>
                </div>
            </S.IntroductionBG1>
        </Col>
    );
}

export default IntroductionItem;
