import React from "react";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import * as S from "./CategoryItem.style";
import { Link } from "react-router-dom";

function CategoryItem() {
    return (
        <Col xs="6" lg="2" md="4" className="mt-4 pt-2">
            <Card className="explore-feature border-0 rounded text-center bg-white">
                <Card.Body className="p-4">
                    <S.ImageSmall
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9qaJd3RbIxRi5QgHb0QxjBnDcbthLHm8ZMg&usqp=CAU"
                        className="rounded-circle shadow-md"
                        alt="a"
                    />
                    <div className="content mt-3">
                        <h6 className="mb-0">
                            <Link to="/" className="title text-dark">
                                Fashion
                            </Link>
                        </h6>
                    </div>
                </Card.Body>
            </Card>
        </Col>
    );
}

export default CategoryItem;
