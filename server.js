// Require Dependencies
var express = require('express');
var path = require('path');

// Sets up express app configuration
var app = express();
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// ROUTES =======================================

// Exported routes
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

// PORT Listener
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});