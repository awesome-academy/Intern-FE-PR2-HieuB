import React from "react";
import RatingList from "../Rating/RatingList";
import * as S from "./CommentItem.style";
import { Link } from "react-router-dom";
import logo from "../../../../assets/images/user/01.jpg";

function CommentItem({ comment }) {
    return (
        <S.CommentItem>
            <div className="d-flex justify-content-between">
                <div className="d-flex align-items-center">
                    <Link className="pr-3" to="/">
                        <img
                            src={logo}
                            className="img-fluid avatar avatar-md-sm rounded-circle shadow"
                            alt="avatar"
                        />
                    </Link>
                    <div className="commentor-detail">
                        <h6 className="mb-0">
                            <Link to="/" className="text-dark media-heading">
                                {comment.name}
                            </Link>
                        </h6>
                    </div>
                </div>
                <RatingList rating={comment.rating}></RatingList>
            </div>
            <div className="mt-3">
                <p className="text-muted p-3 bg-light rounded h4">
                    {`" ${comment.comment} "`}
                </p>
            </div>
        </S.CommentItem>
    );
}

export default CommentItem;
