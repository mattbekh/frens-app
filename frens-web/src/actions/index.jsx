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
        type: "SET_CHAT_USER",
        payload: user
    }
}

export const socketOn = (socket) => {
  return {
      type: "SET_SOCKET",
      payload: socket
  }
}

export const socketOff = () => {
  return {
      type: "CLEAR_SOCKET"
  }
}

export const setChatRoom = (room) => {
  return {
      type: "SET_ROOM",
      payload: room
  }
}

export const clearChatRoom = () => {
  return {
      type: "CLEAR_ROOM"
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
