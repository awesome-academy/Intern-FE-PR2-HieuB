import React from "react";
import * as S from "./PriceItem.style";

function PriceItem({ price }) {
    return (
        <S.PriceItem className="py-2" start={price.start} end={price.end}>
            {price.title}
        </S.PriceItem>
    );
}

export default PriceItem;
