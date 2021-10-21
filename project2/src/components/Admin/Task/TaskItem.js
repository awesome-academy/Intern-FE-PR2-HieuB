import React from "react";
import CreateIcon from "@mui/icons-material/Create";
import DeleteIcon from "@mui/icons-material/Delete";
import * as S from "./TaskItem.style";

function TaskItem() {
    return (
        <tr>
            <td className="text-center h4">1</td>
            <td className="text-center h4">email</td>
            <td className="text-center h4 ">Họ</td>
            <td className="text-center h4 ">Tên</td>
            <td className="text-center h4">Địa chỉ</td>
            <td className="text-center h4">Số điện thoại</td>
            <td className="text-center h4">
                <S.TaskLabel className="label label-danger">
                    {"Admin"}
                </S.TaskLabel>
            </td>
            <td className="text-center d-flex justify-content-between">
                <button
                    type="button"
                    className="btn btn-warning d-flex align-items-center"
                >
                    <CreateIcon></CreateIcon>
                    Sửa
                </button>
                <button
                    type="button"
                    className="btn btn-danger d-flex align-items-center"
                >
                    <DeleteIcon></DeleteIcon>
                    Xóa
                </button>
            </td>
        </tr>
    );
}

export default TaskItem;
