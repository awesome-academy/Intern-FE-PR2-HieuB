import React from "react";
import * as data from "../../../Page/constants/data";
import PriceItem from "./PriceItem";
import * as S from "./PriceList.style";

function PriceList() {
    return (
        <S.PriceList>
            {data.sidebarPriceList &&
                data.sidebarPriceList.map((item, index) => {
                    return <PriceItem key={index} price={item}></PriceItem>;
                })}
        </S.PriceList>
    );
}

export default PriceList;
