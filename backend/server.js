const express = require("express");
const cors = require("cors");
const mongoose = require("./db"); // Require db.js file
const app = express();
const usersRoute = require("./route/usersRoute");

app.use(cors({ origin: "http://localhost:3000" }));
app.use(express.json());

app.use("/api/users", usersRoute);



const port = process.env.PORT || 5000;
app.listen(port, () => console.log("Server started at port", port));
