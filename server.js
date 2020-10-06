const express = require("express");
const mongoose = require("mongoose");
const StudentInfo = require("./model/StudentInfo");
const QuestionBank = require("./model/QuestionBank");
const GamePlay = require("./model/GamePlay");

const app = express();

const MONGODB_URI =
  "mongodb+srv://reena:hello123@cluster.dibtk.mongodb.net/SpaceGo";

mongoose.connect(MONGODB_URI, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

mongoose.connection.on("connected", () => {
  console.log("Mongoose is connected!!!");
});

const dataStudentInfo = {
  StudentID: "4",
  Name: "Reena2",
  Email: "reenashinir@gmail.com",
  LabGroup: "SS1",
  FBAcc: "yolo",
};

const dataGamePlay = {
  StudentID: "2",
  Score: 100,
  Attempts: 2,
  QuestionID: "1",
};

const dataQuestion = {
  QuestionID: "1",
  Question: "What is your name?",
  Type: "MCQ",
  Options: {
    1: "Donkey",
    2: "Monkey",
    3: "I donno ",
    4: "Help me",
  },
  CorrectAns: 4,
  Chapter: "Chapter",
  Topic: "Topic",
  Difficulty: "Medium",
};

const newStudentInfo = new StudentInfo(dataStudentInfo);
const newDataQuestion = new QuestionBank(dataQuestion);
const newDataGamePlay = new GamePlay(dataGamePlay);

newDataQuestion.save((error) => {
  if (error) {
    console.log("Unable to insert student info");
  } else {
    console.log("Successfully inserted student info");
  }
});

//in progress
app.get("/api", (req, res) => {
  StudentInfo.find({})
    .then((data) => {
      console.log("Data: ", data);
      res.json(data);
    })
    .catch(() => {
      console.log("Error");
    });
});
