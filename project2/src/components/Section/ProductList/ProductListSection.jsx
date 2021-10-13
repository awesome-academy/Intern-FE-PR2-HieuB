import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Sidebar from "../../Sidebar/Sidebar";
import NavPanel from "./NavPanel/NavPanel";
import ProductItemList from "../MainSection/Product/ProductItemList";
import Pagination from "../../Pagination/Pagination";
import { useSelector } from "react-redux";

function ProductListSection() {
    const data = useSelector((state) => state.products.products);
    return (
        <section className="section">
            <Container>
                <Row>
                    <Sidebar></Sidebar>
                    <Col
                        lg="9"
                        md="8"
                        xs="12"
                        className="mt-5 pt-2 mt-sm-0 pt-sm-0"
                    >
                        <Row className="align-items-center">
                            <NavPanel></NavPanel>
                        </Row>
                        <div className="row">
                            {data.length > 0 ? (
                                data.map((product) => {
                                    return (
                                        <ProductItemList
                                            key={product.id}
                                            product={product}
                                        ></ProductItemList>
                                    );
                                })
                            ) : (
                                <h3>Không có kết quả phù hợp</h3>
                            )}
                            <div className="col-12 mt-4 pt-2">
                                <Pagination></Pagination>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default ProductListSection;
