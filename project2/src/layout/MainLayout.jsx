import React from "react";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";

function MainLayout({ children }) {
    return (
        <>
            <Header></Header>
            {children}
            <Footer></Footer>
        </>
    );
}

export default MainLayout;
