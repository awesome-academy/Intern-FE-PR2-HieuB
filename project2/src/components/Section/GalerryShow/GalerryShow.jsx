import React from "react";
import Col from "react-bootstrap/Col";
import { Zoom } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import * as S from "./GalerryShow.style";

function GalerryShow({ images }) {
    return (
        <Col md="5">
            <div className="slide-container">
                <div className="slide-container">
                    <Zoom scale={0.4}>
                        {images &&
                            images.map((each, index) => (
                                <S.Image key={index} src={each} alt="a" />
                            ))}
                    </Zoom>
                </div>
            </div>
        </Col>
    );
}

export default GalerryShow;
