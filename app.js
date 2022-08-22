const cors = require("cors");
const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const tblColRoutes = require("./routes/tblColRoutes");
const pathRoutes = require("./routes/pathRoutes");
const linkRoutes = require("./routes/linkRoutes");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

app.use(tblColRoutes);
app.use(pathRoutes);
app.use(linkRoutes);

app.listen(3000,'0.0.0.0', console.log("Listening to port 3000......"));
