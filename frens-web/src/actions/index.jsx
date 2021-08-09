export const toggleDM = () => {
  return {
    type: "DARK",
  };
};

export const chatPop = () => {
  return {
    type: "POP",
  };
};

export const chatUser = (user) => {
  return {
    type: "CHATUSER",
    payload: user,
  };
};

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

export const updateLoginUserSocial = (social) => {
  return {
    type: "UPDATE_SOCIAL",
    payload: social,
  };
};

export const logUserOut = () => {
  return {
    type: "LOGOUT",
  };
};

export const updateQuestions = (questions) => {
  return {
    type: "UPDTE_QUESTIONS",
    payload: questions,
  };
};

export const updateSocial = (social) => {
  return {
    type: "UPDATE_SOCIAL",
    payload: social,
  };
};

export const insertQuestions = (question) => {
  return {
    type: "INSERT_QUESTIONS",
    payload: question,
  };
};
