export const generateNameId = ({ name, id }) => {
    return encodeURIComponent(
        `${name.replace(/\s/g, "-").replace(/%/g, "")}-i.${id}`
    );
};

export const getIdFromNameID = (url) => {
    const arr = url.split("-i.");
    return arr[arr.length - 1];
};
