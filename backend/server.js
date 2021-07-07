/* DEFINE ROUTES (CRUD)

GET /users - list all users
POST /users - Create a new user
GET /users/:id - Get one user (using unique identifier) 
PATCH /users/:id - Update one user
DELETE /users/:id - Delete one user

*/

const express = require("express");
let cors = require("cors");
const { v4: uuid } = require("uuid");

const fs = require("fs");
const bcrypt = require("bcrypt");
const morgan = require("morgan");

const AppError = require("./AppError");

let users;
fs.readFile("./db.json", "utf8", function (err, data) {
  if (err) {
    return console.log(err);
  }
  users = JSON.parse(data);
  //   console.log(users);

});

// Get a server up and running
const server = express();
const port = 5000;

// MIDDLEWARE
// .use is a way to run a function on every request
server.use(cors());
server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(morgan('dev'));

// CUSTOM MIDDLEWARE
server.use((req,res,next) => {
  req.requestTime = Date.now();
  console.log("####" + req.method, req.path);
  next();
})

// USED TO PROTECT A ROUTE
// const verifyPassword = (req, res, next) => {

// }

// CUSTOM ERROR HANDLER MIDDLEWARE
server.use((err,req,res,next) => {
  const { status = 500, message = "Error" } = err;
  res.status(status).send(message);
})


// ROUTES
server.get("/", (req, res) => {
  res.send("Welcome to the home page!");
});

server.get("/users", (req, res) => {
  res.json(users);
});

server.post("/users", (req, res) => {
  users.push(req.body);
  res.json(users);
});

server.post("/login", async (req, res) => {
  users.map((fren) => {
    const [user] = Object.entries(fren);
    const currentUser = user[0];
    const email = user[1].email;
    if(email === req.body.email) {
      if(user[1].password === req.body.password) {
        return res.status(200).send(`${currentUser} Successfully logged in.`)
      } else {
        return res.status(401).send("Unauthorized");
      }
    }
  });
  res.status(400).send("Can't find user");
  // FIGURE OUT HOW TO THROW 400 
});




// // Important to go last, routes are matched in order. This matches everything so we wont make past this send!
// server.get("*", (req, res) => {
//   res.send("I dont know this path");
// });
server.use((req,res) => {
  res.status(404).send("Not Found.")
});

// server needs a port to listen on, locally. This runs when server starts up!
server.listen(port, () => {
  // Call back function
  console.log("Listening on port 5000");
});
