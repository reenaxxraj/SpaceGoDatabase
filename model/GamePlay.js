const mongoose = require("mongoose");

const GamePlay = new mongoose.Schema({
  StudentID: {
    type: String,
    required: true,
    unique: true,
  },
  Score: {
    type: Number,
    required: true,
    min: 0,
  },
  Attempts: {
    type: Number,
    required: true,
    min: 0,
  },
  QuestionID: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("GamePlay", GamePlay);
