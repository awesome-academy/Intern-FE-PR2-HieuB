import React from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import RatingList from "../Rating/RatingList";
import FormLabel from "react-bootstrap/FormLabel";

function CommentForm() {
    const renderRatingList = () => {
        let rating = [];
        for (let i = 5; i >= 1; i--) {
            rating.push(
                <span key={i} className="d-block mr-3">
                    <RatingList comment={true} rating={i}></RatingList>
                </span>
            );
        }
        return rating;
    };
    return (
        <Form className="ml-lg-4">
            <Row>
                <Col xs="12">
                    <h4 className="h4">Add your review:</h4>
                </Col>
                <Col xs="12" className="mt-4">
                    <h6 className="font-weight-bold h4">Your Rating:</h6>
                    {renderRatingList()}
                </Col>
                <Col mf="12" className="mt-3">
                    <Form.Group>
                        <FormLabel className="h4">Your Review:</FormLabel>
                        <div className="position-relative">
                            <i
                                data-feather="message-circle"
                                className="fea icon-sm icons"
                            />
                            <textarea
                                id="message"
                                placeholder="Your Comment"
                                rows={5}
                                name="message"
                                className="form-control pl-5"
                                required
                                defaultValue={""}
                            />
                        </div>
                    </Form.Group>
                </Col>

                <Col md="12" className="py-4">
                    <div className="send">
                        <button type="submit" className="btn btn-primary">
                            Submit
                        </button>
                    </div>
                </Col>
            </Row>
        </Form>
    );
}

export default CommentForm;
