import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { path } from "../../../../Page/constants/path";
import { setFilter } from "../../../../slice/filter.slice";
import RatingItem from "./RatingItem";
import * as S from "./RatingList.style";
import qs from "query-string";
import useQuery from "../../../../hook/useQuery";

function RatingList({ rating, sidebar }) {
    const query = useQuery();
    const [star, setStar] = useState();
    useEffect(() => {
        setStar(Number(query.rating));
    }, [query]);
    const renderRating = (ratings) => {
        let rating = [];
        for (let i = 1; i <= ratings; i++) {
            rating.push(<RatingItem key={i}></RatingItem>);
        }
        return rating;
    };
    const history = useHistory();
    const dispatch = useDispatch();

    const filter = useSelector((state) => state.filter);
    const handleRating = (rating) => {
        if (sidebar === true) {
            let _filter;
            if (rating === star) {
                _filter = { ...filter, rating: [] };
            } else {
                _filter = { ...filter, rating: rating };
            }
            dispatch(setFilter(_filter));
            history.push(path.productList + `?${qs.stringify(_filter)}`);
        }
    };
    return (
        <S.RatingList
            className="list-unstyled text-warning my-3 d-flex"
            onClick={() => handleRating(rating)}
        >
            {renderRating(rating)}
        </S.RatingList>
    );
}

export default RatingList;
