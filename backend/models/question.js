const mongoose = require("mongoose");

const questionSchema = new mongoose.Schema({
  question: {
    type: String,
    required: true,
  },
  choices: {
    numberOfChoice: {
      type: Number,
      required: true,
    },
    choice: {
      type: Array,
      required: true,
      default: [],
    },
  },
});

const Question = mongoose.model("Question", questionSchema);
module.exports = Question;
