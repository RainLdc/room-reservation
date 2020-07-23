const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();



require("dotenv").config();

var corsOptions = {
  origin: process.env.X_ORIGIN_URL,
};

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


const db = require("./app/models");
db.sequelize.sync({ force: true }).then(() => {
  console.log("Drop and Resync Database with { force: true }");
});

// routes
require("./app/routes/client.routes")(app);
require("./app/routes/room.routes")(app);
require("./app/routes/appartement.routes")(app);

// set port, listen for requests
const PORT = process.env.PORT || 8081;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
