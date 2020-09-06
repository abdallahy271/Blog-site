const express = require("express");
const mongoose = require("mongoose");
const { MONGOURI } = require("./keys");

const app = express();
const PORT = 5000;

//connection to mongoDB
mongoose.connect(MONGOURI, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});
mongoose.connection.on("connected", () => {
  console.log("Connected to mongoDB");
});
mongoose.connection.on("error", (error) => {
  console.log("Error: " + error);
});

//models import
require("./models/post");
require("./models/category");
require("./models/comment");

app.use(express.json());
//Router import
app.use(require("./routes/post"));
app.use(require("./routes/category"));
app.use(require("./routes/comment"));

//Routes

app.listen(PORT, () => {
  console.log("The server is starting at " + PORT);
});
