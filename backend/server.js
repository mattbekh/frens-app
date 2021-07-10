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
const mongoose = require("mongoose");


/* Custom Error component to throw custom errors*/
const AppError = require("./AppError");


/* MongoDB Atlas Cloud */
mongoose.connect('mongodb+srv://admin:admin@cpsc455frensapp.kf2ad.mongodb.net/frensApp', {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false})
.then( () => {
    console.log("MONGO CONNECTION OPEN");
})
.catch(error => {
    console.log("##### MONGO CONNECTION ERROR");
    console.log(error);
});


/* Authentication Functions */
const hashPassword = async (password) => {
  const salt = await bcrypt.genSalt(12);
  const hash = await bcrypt.hash(password,salt);
  console.log(salt);
  console.log(hash);
};

const login = async(password, hashedPassword) => {
  const result = await bcrypt.compare(password, hashedPassword);
  if(result) {
    console.log("Logged in. Success.");

  } else {
    console.log("Incorrect");
  }
};

// let users;
// fs.readFile("./db.json", "utf8", function (err, data) {
//   if (err) {
//     return console.log(err);
//   }
//   users = JSON.parse(data);
//   //   console.log(users);
// });

/* Get a server up and running */
const server = express();
const port = 5000;


/* MIDDLEWARE */
// .use is a way to run a function on every request
server.use(cors());
server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(morgan('dev'));

/* CUSTOM MIDDLEWARE */
server.use((req,res,next) => {
  req.requestTime = Date.now();
  console.log("####" + req.method, req.path);
  next();
});


/* ROUTES */
server.get("/", (req, res) => {
  res.send("Welcome to the home page!");
});

server.get("/users", (req, res) => {
  // res.json(users);
});

server.post("/users", (req, res) => {
  // users.push(req.body);
  // res.json(users);
});

server.post("/login", async (req, res, next) => {

});

// // Important to go last, routes are matched in order. This matches everything so we wont make past this send!
// server.get("*", (req, res) => {
//   res.send("I dont know this path");
// });

/* CUSTOM ERROR HANDLER MIDDLEWARE */
server.use((err,req,res,next) => {
  const { status = 500, message = "Error" } = err;
  res.status(status).send(message);
});

/* Server needs a port to listen on, locally. This runs when server starts up! */
server.listen(port, () => {
  // Call back function
  console.log("Listening on port 5000");
});
