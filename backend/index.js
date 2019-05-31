const express = require("express");
const app = express();

const cors = require("cors");
app.use(cors());

const logger = require("morgan");
app.use(logger("dev"));

const port = process.env.PORT || 3001;
const restaurantsRouter = require("./routes/restaurants");
app.use("/restaurants", restaurantsRouter);

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.listen(port, function() {
  console.log("Runnning on " + port);
});

module.exports = app;
