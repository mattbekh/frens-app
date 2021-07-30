export const toggleDM = () => {
  return {
    type: "DARK",
  };
};


export const chatPop = () => {
    return {
        type: "POP"
    };
};

export const chatUser = (user) => {
    return {
        type: "CHATUSER",
        payload: user
    }
}

export const pickInterest = (id) => {
  return {
    type: "PICK",
    payload: id,
  };
};

export const setLoginUser = (user) => {
  return {
    type: "LOGIN",
    payload: user,
  };
};

export const logUserOut = () => {
  return {
    type: "LOGOUT",
  };
};
