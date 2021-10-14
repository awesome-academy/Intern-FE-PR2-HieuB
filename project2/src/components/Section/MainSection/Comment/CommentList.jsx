import React from "react";
import CommentItem from "./CommentItem";

function CommentList() {
    return (
        <ul className="media-list list-unstyled mb-0">
            <CommentItem></CommentItem>
        </ul>
    );
}

export default CommentList;
