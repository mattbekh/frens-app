const questionsReducer = (state = {}, action) => {
  let newQuestions;

  switch (action.type) {
    case "UPDATE_QUESTIONS":
      newQuestions = action.payload;
      state = { ...newQuestions };
      return state;
    case "INSERT_QUESTIONS":
      newQuestions = action.payload;
      state[newQuestions.questionName] = newQuestions.check;
      return state;
    default:
      return state;
  }
};

export default questionsReducer;
