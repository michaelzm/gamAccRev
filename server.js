const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
var pg = require("pg");
var conString =
  "postgres://qktnvbdggakzxe:9cfde99a083ac7179c360647c6d3bb58002e0e6aad6a6f93b01f15ae0488ab01@ec2-107-20-237-78.compute-1.amazonaws.com:5432/d17ubmglbps0a6?ssl=true";
var client = new pg.Client(conString);

client
  .connect()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch(err => {
    console.error("Unable to connect to the database:", err);
  });
// Serve static files
app.use(express.static(__dirname + "/dist/angular-access-review"));

// Send all requests to index.html
app.get("/*", function(req, res) {
  res.sendFile(path.join(__dirname + "/dist/angular-access-review/index.html"));
});

// default Heroku port
app.listen(5000);
console.log(`App running on port 50000.`);

const createUser = (request, response) => {
  const { name } = request.body;

  client.query(
    "INSERT INTO test (name) VALUES ('$1')",
    [name],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(201).send(`User added with ID:`);
    }
  );
};
app.post("/api/users", createUser);
app.get("/api/get", (request, response) => {
  response.json({ info: "Node.js, Express, and Postgres API" });
});
