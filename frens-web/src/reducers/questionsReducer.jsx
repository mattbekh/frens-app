const questionsReducer = (state = {}, action) => {
  let newQuestions = action.payload;

  switch (action.type) {
    case "UPDATE_QUESTIONS":
      state = { ...newQuestions };
      return state;
    case "INSERT_QUESTIONS":
      state[newQuestions.questionName] = newQuestions.check;
      return state;
    default:
      return state;
  }
};

export default questionsReducer;
