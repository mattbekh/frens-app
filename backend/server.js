
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

// Get a server up and running
const server = express();

const port = 5000;

// Define the POST data format, using PARSING MIDDLEWARES
// .use is a way to run a function on every request
server.use(cors());
server.use(express.json());
server.use(express.urlencoded({extended: true}));

server.get("/", (req, res) => {
    res.send("Welcome to the home page!");
});

server.post("/user", (req, res) => {
    res.send(req.body);
});

// Important to go last, routes are matched in order. This matches everything so we wont make past this send!
server.get("*", (req,res) => {
    res.send("I dont know this path");
});

// server needs a port to listen on, locally. This runs when server starts up!
server.listen(port, () => {
    // Call back function
    console.log("Listening on port 5000");
});

