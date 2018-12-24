const path = require("path");
var express = require("express");
var bodyParser = require("body-parser");
var mongodb = require("mongodb");
var ObjectID = mongodb.ObjectID;

var FORMULARS_COLLECTION = "formulars";

var app = express();
app.use(bodyParser.json());

// Create a database variable outside of the database connection callback to reuse the connection pool in your app.
var db;

// Connect to the database before starting the application server.
mongodb.MongoClient.connect(
  "mongodb://heroku_c7sfs4h8:kcpf4ccb7hcvsvau738m5nmq3p@ds243054.mlab.com:43054/heroku_c7sfs4h8",
  function(err, client) {
    if (err) {
      console.log(err);
      process.exit(1);
    }
    // Save database object from the callback for reuse.
    db = client.db();
    console.log("Database connection ready");

    // Initialize the app.
    var server = app.listen(57578, function() {
      var port = server.address().port;
      console.log("App now running on port", port);
    });
  }
);

// Generic error handler used by all endpoints.
function handleError(res, reason, message, code) {
  console.log("ERROR: " + reason);
  res.status(code || 500).json({ error: message });
}

app.get("/get/formulars", function(req, res) {
  db.collection(FORMULARS_COLLECTION)
    .find({})
    .toArray(function(err, docs) {
      if (err) {
        handleError(res, err.message, "Failed to get formulars.");
      } else {
        res.status(200).json(docs);
      }
    });
});

app.post("/post/formulars", function(req, res) {
  var newFormular = req.body;
  newFormular.createDate = new Date();
  console.log(newFormular);
  if (!req.body.name) {
    handleError(res, "Invalid user input", "Must provide a name.", 400);
  } else {
    db.collection(FORMULARS_COLLECTION).insertOne(newFormular, function(
      err,
      doc
    ) {
      if (err) {
        handleError(res, err.message, "Failed to create new formular.");
      } else {
        res.status(201).json(doc.ops[0]);
      }
    });
  }
});

// Serve static files
app.use(express.static(__dirname + "/dist/angular-access-review"));

// Send all requests to index.html
app.get("/*", function(req, res) {
  res.sendFile(path.join(__dirname + "/dist/angular-access-review/index.html"));
});

// default Heroku port
app.listen(process.env.PORT || 5000);
