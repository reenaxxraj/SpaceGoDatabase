const mongoose = require("mongoose");

const Question = new mongoose.Schema({
  QuestionID: {
    type: String,
    required: true,
    unique: true,
  },
  Question: {
    type: String,
    required: true,
  },
  Type: {
    type: String,
    required: true,
  },
  Options: {
    1: {
      type: String,
      required: true,
    },
    2: {
      type: String,
      required: true,
    },
    3: {
      type: String,
      required: true,
    },
    4: {
      type: String,
      required: true,
    },
  },
  CorrectAns: {
    type: Number,
    min: 1,
    max: 4,
    required: true,
  },
  Chapter: {
    type: String,
    required: true,
  },
  Topic: {
    type: String,
    required: true,
  },
  Difficulty: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("QuestionBank", Question);
