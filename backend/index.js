const express = require("express");
var request = require("request");
const cors = require('cors')
const bodyParser = require("body-parser");
const authRouter = require("./router/auth");
const organisationsRouter = require("./router/organisations");
const shiftsRouter = require("./router/shifts");
const usersRouter = require("./router/users");
const app = express();

// app.use(cors({
//   origin: "http://127.0.0.1:3000"
// }));
//node js
// app.use(function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   next();
// });
app.use(bodyParser.json());
app.use("/auth", authRouter);
app.use("/organisations", organisationsRouter);
app.use("/shifts", shiftsRouter);
app.use("/users", usersRouter);



app.listen(3001, () => {
  console.log("Server running on port 3001");
});
