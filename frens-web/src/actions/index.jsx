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

// export const loginUser = (user) => {
//     return {
//         type: 'LOGIN',
//         payload: user
//     };
// };