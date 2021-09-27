import React, { useEffect, useState } from "react";
import * as S from "./PriceItem.style";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { setFilter } from "../../../slice/filter.slice";
import { path } from "../../../Page/constants/path";
import qs from "query-string";
import useQuery from "../../../hook/useQuery";

function PriceItem({ price, active, setActive }) {
    const query = useQuery();
    const [prices, setPrices] = useState({
        start: null,
        end: null
    });
    const history = useHistory();
    const dispatch = useDispatch();

    const filter = useSelector((state) => state.filter);
    useEffect(() => {
        setPrices({
            start: query.price_gte,
            end: query.price_lte
        });
    }, [query]);

    const handlePrice = (price) => {
        setActive(price.title);
        let _filter;
        if (price.start !== prices.start || price.end !== prices.end) {
            _filter = {
                ...filter,
                price_gte: price.start,
                price_lte: price.end
            };
            setPrices({
                start: price.start,
                end: price.end
            });
        } else {
            _filter = { ...filter, price_gte: null, price_lte: null };
            setPrices({
                start: null,
                end: null
            });
        }
        dispatch(setFilter(_filter));
        history.push(path.productList + `?${qs.stringify(_filter)}`);
    };
    return (
        <S.PriceItem
            className={`py-2 ${active ? "active" : ""}`}
            start={price.start}
            end={price.end}
            onClick={() => handlePrice(price)}
        >
            {price.title}
        </S.PriceItem>
    );
}

export default PriceItem;
