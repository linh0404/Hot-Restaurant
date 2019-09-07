// Dependencies
// =============================================================
var express = require("express");
var path = require("path");
var api = require("./routes/api");

// Sets up the Express App
// =============================================================
var app = express();
app.use("/api",api);
var PORT = 3000;    

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require("./routes/api")(api)

app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});