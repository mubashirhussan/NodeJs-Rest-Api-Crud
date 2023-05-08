require("dotenv").config();
const express = require("express");
const server = express();
const productRouter = require("./routes/product");
//bodyParser
server.use(express.json());
server.use("/api", productRouter.router);

// MVC Modal-View-Controller

server.listen(process.env.PORT, function () {
  console.log("server connected", process.env.PORT);
});
