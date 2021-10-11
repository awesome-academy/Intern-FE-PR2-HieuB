import React from "react";
import Card from "react-bootstrap/Card";
import FormSearch from "../Input/FormSearch";
import RatingList from "../Section/MainSection/Rating/RatingList";
import CategoriesList from "./Categories/CategoriesList";
import Col from "react-bootstrap/Col";
import PriceList from "./Price/PriceList";

function Sidebar() {
    const renderRatingList = () => {
        let rating = [];
        for (let i = 5; i >= 1; i--) {
            rating.push(
                <RatingList sidebar={true} key={i} rating={i}></RatingList>
            );
        }
        return rating;
    };
    return (
        <Col lg="3" md="4" xs="12">
            <Card className="border-0 sidebar sticky-bar">
                <Card.Body className="p-0">
                    <div className="widget">
                        <FormSearch></FormSearch>
                    </div>
                    <div className="widget mt-4 pt-2">
                        <h5 className="widget-title">Thể loại</h5>
                        <CategoriesList></CategoriesList>
                    </div>
                    <div className="widget mt-4 pt-2">
                        <h5 className="widget-title pb-3">Đánh giá</h5>
                        {renderRatingList()}
                    </div>
                    <div className="widget mt-4 pt-2">
                        <h5 className="widget-title pb-3">Giá</h5>
                        <PriceList></PriceList>
                    </div>
                </Card.Body>
            </Card>
        </Col>
    );
}

export default Sidebar;
