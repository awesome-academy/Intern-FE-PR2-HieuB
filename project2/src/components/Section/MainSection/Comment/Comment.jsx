import React, { useEffect, useState } from "react";
import CommentList from "./CommentList";
import Col from "react-bootstrap/Col";
import CommentForm from "./CommentForm";
import { useDispatch } from "react-redux";
import { getComment } from "../../../../slice/comment.slice";

function Comment({ product }) {
    const [isLogged, setIsLogged] = useState(false);
    const dispatch = useDispatch();
    useEffect(() => {
        localStorage.getItem("user") ? setIsLogged(true) : setIsLogged(false);
    }, []);
    useEffect(() => {
        if (product) {
            dispatch(getComment(product.id));
        }
    }, [dispatch, product]);

    return (
        <>
            <Col lg="6">
                <CommentList></CommentList>
            </Col>
            <Col lg="6" className="mt-4 mt-lg-0 pt-2 pt-lg-0">
                {isLogged ? <CommentForm product={product}></CommentForm> : ""}
            </Col>
        </>
    );
}

export default Comment;
