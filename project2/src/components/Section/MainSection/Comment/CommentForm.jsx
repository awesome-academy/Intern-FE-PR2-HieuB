import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import FormLabel from "react-bootstrap/FormLabel";
import { LocalStorage } from "../../../../Page/constants/localStorage";
import Button from "react-bootstrap/Button";
import { useDispatch } from "react-redux";
import { postComment } from "../../../../slice/comment.slice";
import { toastAlert } from "../../../../utils/helper";
import ReactStars from "react-rating-stars-component";
import StarRateIcon from "@mui/icons-material/StarRate";
import StarBorderPurple500Icon from "@mui/icons-material/StarBorderPurple500";

function CommentForm({ product }) {
    const dispatch = useDispatch();
    const [checkRating, setCheckRating] = useState(5);
    const [comment, setComment] = useState("");

    const handleComment = (e) => {
        setComment(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const userInfo = JSON.parse(localStorage.getItem(LocalStorage.user));
        const body = {
            userId: userInfo.user.id,
            rating: checkRating,
            comment: comment,
            productId: product.id,
            name: userInfo.user.firstName + userInfo.user.lastName
        };
        dispatch(postComment(body));
        setCheckRating(5);
        setComment("");
        toastAlert("Bình luận thành công", "success");
    };

    const handleRating = {
        size: 40,
        count: 5,
        isHalf: false,
        value: 5,
        color: "gray",
        activeColor: "#ffc107",
        a11y: true,
        emptyIcon: <StarBorderPurple500Icon></StarBorderPurple500Icon>,
        filledIcon: <StarRateIcon></StarRateIcon>,
        onChange: (newValue) => {
            setCheckRating(newValue);
        }
    };

    return (
        <Form className="ml-lg-4" onSubmit={handleSubmit}>
            <Row>
                <Col xs="12">
                    <h4 className="h4">Thêm bình luận:</h4>
                </Col>
                <Col xs="12" className="mt-4">
                    <h6 className="font-weight-bold h4">Đánh giá:</h6>
                    <ReactStars {...handleRating} />
                </Col>
                <Col mf="12" className="mt-3">
                    <Form.Group>
                        <FormLabel className="h4">Bình luận của bạn:</FormLabel>
                        <div className="position-relative">
                            <textarea
                                id="message"
                                placeholder="Your Comment"
                                rows={5}
                                name="message"
                                className="form-control pl-5"
                                value={comment}
                                onChange={handleComment}
                            />
                        </div>
                    </Form.Group>
                </Col>

                <Col md="12" className="py-4">
                    <div className="send">
                        <Button type="submit">Bình luận</Button>
                    </div>
                </Col>
            </Row>
        </Form>
    );
}

export default CommentForm;
