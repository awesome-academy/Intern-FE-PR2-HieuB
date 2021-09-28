import React from "react";
import IntroductionList from "./IntroductionList";
import Container from "react-bootstrap/Container";

function Introduction() {
    return (
        <Container fluid className="mt-5 pt-2">
            <IntroductionList></IntroductionList>
        </Container>
    );
}

export default Introduction;
