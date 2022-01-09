const express = require("express");
var request = require("request");
const cors = require('cors')
const bodyParser = require("body-parser");
const authRouter = require("./router/auth");
const organisationsRouter = require("./router/organisations");
const shiftsRouter = require("./router/shifts");
const usersRouter = require("./router/users");
const app = express();

app.use(cors())
app.use(bodyParser.json());
app.use("/auth", authRouter);
app.use("/organisations", organisationsRouter);
app.use("/shifts", shiftsRouter);
app.use("/users", usersRouter);



app.listen(3001, () => {
  console.log("Server running on port 3001");
});
