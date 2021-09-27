export const isEmail = (value) => {
    const regex =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(value);
};

export const isName = (value) => {
    const regex =
        /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u;
    return regex.test(value);
};

export const isPhone = (value) => {
    const regex = /(03|05|07|08|09|01[2|6|8|9])+([0-9]{8})\b/;
    return regex.test(value);
};

export const generateNameId = ({ name, id }) => {
    return encodeURIComponent(
        `${name.replace(/\s/g, "-").replace(/%/g, "")}-i.${id}`
    );
};

export const getIdFromNameID = (url) => {
    const arr = url.split("-i.");
    return arr[arr.length - 1];
};

export const formatCurrency = (value) => {
    return value.toLocaleString("it-IT", {
        style: "currency",
        currency: "VND"
    });
};
