import React from "react";
import CommentList from "./CommentList";
import Col from "react-bootstrap/Col";
import CommentForm from "./CommentForm";

function Comment() {
    return (
        <>
            <Col lg="6">
                <CommentList></CommentList>
            </Col>
            <Col lg="6" className="mt-4 mt-lg-0 pt-2 pt-lg-0">
                <CommentForm></CommentForm>
            </Col>
        </>
    );
}

export default Comment;
