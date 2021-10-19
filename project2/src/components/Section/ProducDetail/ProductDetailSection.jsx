import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { useDispatch } from "react-redux";
import GalerryShow from "../GalerryShow/GalerryShow";
import Comment from "../MainSection/Comment/Comment";
import ProductInformation from "../ProductInfomation/ProductInformation";
import { useParams } from "react-router-dom";
import { getIdFromNameID } from "../../../utils/helper";
import { getProductDetail } from "../../../slice/productDetail.slice";
import { unwrapResult } from "@reduxjs/toolkit";
import { setCart } from "../../../slice/cart.slice";

function ProductDetailSection() {
    const [product, setProduct] = useState();
    const dispatch = useDispatch();
    const { id } = useParams();

    useEffect(() => {
        const userId = JSON.parse(localStorage.getItem("user")).user.id;
        if (localStorage.getItem("cart")) {
            let check = JSON.parse(localStorage.getItem("cart")).find((e) => {
                return e.userId === userId;
            });
            if (check) {
                dispatch(setCart(check));
            }
        } else {
            dispatch(setCart([]));
        }
    }, [dispatch]);

    useEffect(() => {
        const idProduct = getIdFromNameID(id);
        const _getProductItem = async () => {
            const data = await dispatch(getProductDetail(idProduct));
            const res = unwrapResult(data);
            setProduct(res);
        };
        _getProductItem();
    }, [dispatch, id]);
    return (
        <section className="section pb-0">
            <Container>
                <Row className="align-items-center">
                    <GalerryShow
                        images={product ? product.images : ""}
                    ></GalerryShow>
                    <ProductInformation
                        product={product ? product : ""}
                    ></ProductInformation>
                </Row>
            </Container>
            <Container className="mt-100 mt-60">
                <Row className="mt-5">
                    <Comment></Comment>
                </Row>
            </Container>
        </section>
    );
}

export default ProductDetailSection;
