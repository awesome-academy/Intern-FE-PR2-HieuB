import { isEmail, isName } from "../../utils/helper";

export const rules = {
    firstName: {
        required: {
            value: true,
            message: "Họ là bắt buộc nhập"
        },
        minLength: {
            value: 2,
            message: "Họ có độ dài từ 2-10 ký tự"
        },
        maxLength: {
            value: 10,
            message: "Họ có độ dài từ 2-10 ký tự"
        }
    },
    lastName: {
        required: {
            value: true,
            message: "Tên là bắt buộc nhập"
        },
        minLength: {
            value: 2,
            message: "Tên có độ dài từ 2-10 ký tự"
        },
        maxLength: {
            value: 10,
            message: "Tên có độ dài từ 2-10 ký tự"
        }
    },
    email: {
        required: {
            value: true,
            message: "Email là bắt buộc nhập"
        },
        minLength: {
            value: 5,
            message: "Email có độ dài từ 5-160 ký tự"
        },
        maxLength: {
            value: 160,
            message: "Email có độ dài từ 5-160 ký tự"
        }
    },
    validate: {
        email: (value) => isEmail(value) || "Email không đúng định dạng",
        name: (value) => isName(value) || "Tên không đúng định dạng"
    },
    password: {
        required: {
            value: true,
            message: "Mật khẩu là bắt buộc nhập"
        },
        minLength: {
            value: 6,
            message: "Mật khẩu có độ dài từ 6 đến 20 ký tự"
        },
        maxLength: {
            value: 20,
            message: "Mật khẩu có độ dài từ 6 đến 20 ký tự"
        }
    },
    confirmPassword: {
        required: {
            value: true,
            message: "Nhập lại mật khẩu"
        },
        minLength: {
            value: 6,
            message: "Nhập lại mật khẩu có độ dài từ 6 đến 20 ký tự"
        },
        maxLength: {
            value: 20,
            message: "Nhập lại mật khẩu có độ dài từ 6 đến 20 ký tự"
        }
    }
};
