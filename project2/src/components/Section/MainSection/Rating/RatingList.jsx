import React from "react";
import RatingItem from "./RatingItem";

function RatingList({ rating }) {
    const renderRating = (ratings) => {
        let rating = [];
        for (let i = 1; i <= ratings; i++) {
            rating.push(<RatingItem key={i}></RatingItem>);
        }
        return rating;
    };
    return (
        <ul className="list-unstyled text-warning mb-0">
            {renderRating(rating)}
        </ul>
    );
}

export default RatingList;
