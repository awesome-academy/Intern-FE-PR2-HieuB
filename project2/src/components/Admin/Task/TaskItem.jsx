import React from "react";
import CreateIcon from "@mui/icons-material/Create";
import * as S from "./TaskItem.style";
import Button from "react-bootstrap/Button";
import { useDispatch } from "react-redux";
import { editUser } from "../../../slice/manager.slice";

function TaskItem({ userItem, setDisplayForm }) {
    const dispatch = useDispatch();

    const { id, address, email, firstName, lastName, phone, role } = userItem;

    const handleEditUser = () => {
        dispatch(editUser(userItem));
        setDisplayForm(true);
    };

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
                <td className="text-center h4">{id}</td>
                <td className="text-center h4">{email}</td>
                <td className="text-center h4 ">{firstName}</td>
                <td className="text-center h4 ">{lastName}</td>
                <td className="text-center h4">{address}</td>
                <td className="text-center h4">{phone}</td>
                <td className="text-center h4">
                    <S.TaskLabel className={`label ${renderLabel(role)}`}>
                        {role}
                    </S.TaskLabel>
                </td>
                <td className="text-center d-flex justify-content-center">
                    {role === "admin" ? (
                        ""
                    ) : (
                        <Button
                            type="button"
                            className="btn btn-warning d-flex align-items-center"
                            onClick={handleEditUser}
                        >
                            <CreateIcon></CreateIcon>
                            Sửa
                        </Button>
                    )}
                </td>
            </tr>
        </>
    );
}

export default TaskItem;
