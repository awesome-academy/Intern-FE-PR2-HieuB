import React from "react";
import { useSelector } from "react-redux";
import CommentItem from "./CommentItem";

function CommentList() {
    const commentList = useSelector((value) => value.comment.comments);
    const renderCommentList = (data) => {
        return data.map((item, index) => {
            return <CommentItem comment={item} key={index}></CommentItem>;
        });
    };
    return (
        <ul className="media-list list-unstyled mb-0">
            {renderCommentList(commentList)}
        </ul>
    );
}

export default CommentList;
