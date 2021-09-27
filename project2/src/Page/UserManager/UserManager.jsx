import React, { useEffect, useState } from "react";
import AccountSection from "../../components/Section/Account/AccountSection";
import BreadCrum from "../../components/BreadCrum/BreadCrum";
import { useDispatch } from "react-redux";
import { LocalStorage } from "../constants/localStorage";
import { getMe } from "../../slice/auth.slice";
import { unwrapResult } from "@reduxjs/toolkit";

function UserManager() {
    const [userInfo, setUserInfo] = useState({});
    const dispatch = useDispatch();
    useEffect(() => {
        const params = {
            id: JSON.parse(localStorage.getItem(LocalStorage.user)).user.id,
            token: JSON.parse(localStorage.getItem(LocalStorage.user))
                .accessToken
        };
        const _getUser = async () => {
            const data = await dispatch(getMe(params));
            const res = unwrapResult(data);
            setUserInfo(res);
        };
        _getUser();
    }, [dispatch]);
    return (
        <>
            <BreadCrum title="Thông tin cá nhân"></BreadCrum>
            <AccountSection profile={userInfo}></AccountSection>
        </>
    );
}

export default UserManager;
