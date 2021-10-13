import React, { useState } from "react";
import * as data from "../../../Page/constants/data";
import PriceItem from "./PriceItem";
import * as S from "./PriceList.style";

function PriceList() {
    const [itemActive, setItemActive] = useState("");

    const setActive = (title) => {
        itemActive === title ? setItemActive("") : setItemActive(title);
    };
    return (
        <S.PriceList>
            {data.sidebarPriceList &&
                data.sidebarPriceList.map((item, index) => {
                    return (
                        <PriceItem
                            key={index}
                            price={item}
                            active={itemActive === item.title ? true : false}
                            setActive={setActive}
                        ></PriceItem>
                    );
                })}
        </S.PriceList>
    );
}

export default PriceList;
