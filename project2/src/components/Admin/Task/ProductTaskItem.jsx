import React from "react";
import CreateIcon from "@mui/icons-material/Create";
import * as S from "./TaskItem.style";
import Button from "react-bootstrap/Button";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

function ProductTaskItem() {
    const renderLabel = (role) => {
        if (role === "admin") {
            return "label-danger";
        } else if (role === "user") {
            return "label-success";
        } else {
            return "label-default";
        }
    };

    return (
        <>
            <tr>
                <td className="text-center h4">1</td>
                <td className="text-center h4">
                    [KHUYẾN MÃI 35%] Áo Thun POLO Nam, Tay Ngắn Áo Cổ Sọc, Chất
                    Liệu Cá Sấu Cao Cấp - Nhiều màu- Đủ Size
                </td>
                <td className="text-center h4 ">
                    https://api-ecom.duthanhduoc.com/images/8fdcc6d3-70ea-4853-954e-b8776fbab6fa.jpg
                </td>
                <td className="text-center h4 ">
                    Dòng này để mọi người biết product có description :v
                </td>
                <td className="text-center h4">100.000</td>
                <td className="text-center h4">200.000</td>
                <td className="text-center h4">
                    <S.TaskLabel className={`label label-success`}>
                        Áo thun
                    </S.TaskLabel>
                </td>
                <td className="text-center">
                    <div className="d-flex align-items-center justify-content-around">
                        <Button
                            type="button"
                            className="btn-warning d-flex align-items-center mx-2"
                        >
                            <CreateIcon></CreateIcon>
                            Sửa
                        </Button>
                        <Button
                            type="button"
                            className="btn-danger d-flex align-items-center mx-2"
                        >
                            <DeleteForeverIcon></DeleteForeverIcon>
                            Xoá
                        </Button>
                    </div>
                </td>
            </tr>
        </>
    );
}

export default ProductTaskItem;
