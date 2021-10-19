import { unwrapResult } from "@reduxjs/toolkit";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Introduction from "../../components/Section/Introduction/Introduction";
import MainSection from "../../components/Section/MainSection/MainSection";
import Slider from "../../components/Section/Slider/Slider";
import { setCart } from "../../slice/cart.slice";
import { getCategories } from "../../slice/categories.slice";
import {
    getPopularProducts,
    getProductsMostViewed
} from "../../slice/home.slice";

function HomePage() {
    const dispatch = useDispatch();
    const [popularProducts, setPopularProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [mostViewProducts, setMostViewProducts] = useState([]);

    useEffect(() => {
        const cart = JSON.parse(localStorage.getItem("cart")) || [];
        if (cart.length) {
            const userId = JSON.parse(localStorage.getItem("user"));
            if (userId) {
                let check = cart.find((e) => {
                    return e.userId === userId.user.id;
                });
                check ? dispatch(setCart(check)) : dispatch(setCart([]));
            }
        }
    }, [dispatch]);

    useEffect(() => {
        const _getCategories = async () => {
            const data = await dispatch(getCategories());
            const res = unwrapResult(data);
            setCategories(res);
        };
        _getCategories();
    }, [dispatch]);

    useEffect(() => {
        const params = {
            limit: 8,
            order: "desc"
        };
        const _getMostViewProducts = async () => {
            const data = await dispatch(getProductsMostViewed(params));
            const res = unwrapResult(data);
            setMostViewProducts(res);
        };
        _getMostViewProducts();
    }, [dispatch]);

    useEffect(() => {
        const params = {
            limit: 8,
            order: "desc"
        };
        const _getPopularProducts = async () => {
            const data = await dispatch(getPopularProducts(params));
            const res = unwrapResult(data);
            setPopularProducts(res);
        };
        _getPopularProducts();
    }, [dispatch]);
    return (
        <>
            <Slider></Slider>
            <Introduction></Introduction>
            <MainSection
                popularProducts={popularProducts}
                mostViewProducts={mostViewProducts}
                categories={categories}
            ></MainSection>
        </>
    );
}

export default HomePage;
