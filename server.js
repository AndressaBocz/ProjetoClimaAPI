const express = require("express");
const path = require("path");
const routes = require("./routes");
const cors = require("cors");

const app = express();

app.use(express.static(path.resolve(__dirname, "public", "css")));
app.use(express.static(path.resolve(__dirname, "public", "images")));
app.use(express.static(path.resolve(__dirname, "src", "js")));

app.set("views", path.resolve(__dirname, "src", "views"));
app.set("view engine", "ejs");

app.use(express.json());
app.use(cors());
app.use(routes);

app.listen(3001, () => {
  console.log("Server ON!");
  console.log("http://localhost:3001");
});
