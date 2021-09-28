import React from "react";
import Row from "react-bootstrap/Row";
import IntroductionItem from "./IntroductionItem";

function IntroductionList() {
    return (
        <Row>
            <IntroductionItem></IntroductionItem>
            <IntroductionItem></IntroductionItem>
            <IntroductionItem></IntroductionItem>
        </Row>
    );
}

export default IntroductionList;
