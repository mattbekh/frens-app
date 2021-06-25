export const toggleDM = () => {
    return {
        type: "DARK"
    };
};


export const pickInterest = (id) => {
    return {
        type: 'PICK',
        payload: id
    };
};