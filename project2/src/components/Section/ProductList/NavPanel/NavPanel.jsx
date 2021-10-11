import React from "react";
import Col from "react-bootstrap/Col";
import FormFilterSelect from "../../../Input/FormFilterSelect";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import GridViewIcon from "@mui/icons-material/GridView";
import * as S from "./NavPanel.style";

function NavPanel() {
    return (
        <Col xs="12" className=" mt-4 mt-sm-0 pt-2 pt-sm-0">
            <div className="d-flex justify-content-md-between align-items-center">
                <FormFilterSelect></FormFilterSelect>
                <div className="d-flex align-items-center">
                    <div className="mx-4">
                        <S.NavPanelIcon className="h5 text-muted">
                            <FormatListBulletedIcon></FormatListBulletedIcon>
                        </S.NavPanelIcon>
                    </div>
                    <div className="mx-4">
                        <S.NavPanelIcon className="h5 text-muted">
                            <GridViewIcon></GridViewIcon>
                        </S.NavPanelIcon>
                    </div>
                </div>
            </div>
        </Col>
    );
}

export default NavPanel;
