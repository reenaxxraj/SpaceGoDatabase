// const express = require("express");
// const mongoose = require("mongoose");

// const User = require("./model/user");

// require("dotenv/config");
// const app = express();

// const customMiddelware = () => {
//   console.log("Welcome to middleware");
// };

// app.use(customMiddelware);

// app.get("/", (req, res) => {
//   res.send("First request");
// });

// app.get("/users", (req, res) => {
//   res.send("First request for users");
// });

// app.post("/create-user", async (req, res) => {
//   try {
//     res.send("Created your user ");
//   } catch {}
//   console.log(req);
// });

// mongoose.connect(
//   process.env.DB_CONNECTION_STRING,
//   { useUnifiedTopology: true, useNewUrlParser: true },
//   (req, res) => {
//     console.log("connected to the database");
//   }
// );

// app.listen(3000, () => {
//   console.log("Listening to 3000");
// });
