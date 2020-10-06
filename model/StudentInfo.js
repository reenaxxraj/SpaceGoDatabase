const mongoose = require("mongoose");

const StudentInfo = new mongoose.Schema({
  StudentID: {
    type: String,
    required: true,
    unique: true,
  },
  Name: {
    type: String,
    required: true,
  },
  Email: {
    type: String,
    required: true,
    unique: true,
  },
  LabGroup: {
    type: String,
    required: true,
  },
  FBAcc: {
    type: String,
    required: false,
  },
});

module.exports = mongoose.model("StudentInformation", StudentInfo);
