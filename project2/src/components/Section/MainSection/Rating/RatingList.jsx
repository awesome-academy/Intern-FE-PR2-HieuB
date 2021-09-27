import React from "react";
import RatingItem from "./RatingItem";
import * as S from "./RatingList.style";

function RatingList({ rating }) {
    const renderRating = (ratings) => {
        let rating = [];
        for (let i = 1; i <= ratings; i++) {
            rating.push(<RatingItem key={i}></RatingItem>);
        }
        return rating;
    };
    return (
        <S.RatingList className="list-unstyled text-warning mb-0">
            {renderRating(rating)}
        </S.RatingList>
    );
}

export default RatingList;
