// Require/import the HTTP module
var express = require("express");
var app= express();
// Define a port to listen for incoming requests
var PORT = process.env.PORT || 8080;
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


app.use(express.static("public"));



// Start our server so that it can begin listening to client requests.


// ===============================================================================
// DEPENDENCIES
// We need to include the path package to get the correct file path for our html
// ===============================================================================
var path = require("path");


// ===============================================================================
// ROUTING
// ===============================================================================


  // HTML GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases the user is shown an HTML page of content
  // ---------------------------------------------------------------------------

  //paste snippet from Dan here

  app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "survey.html"));
  });

  // If no matching route is found default to home
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
  });

  require("./app/data/apiRoutes.js")(app);

 
app.listen(PORT, function() {

  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);

  // app.get("data/apiRoutes",req, res)
 alert(module.exports)
});