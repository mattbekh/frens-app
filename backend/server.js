/* DEFINE ROUTES (CRUD)

GET /users - list all users
POST /users - Create a new user
GET /users/:id - Get one user (using unique identifier) 
PATCH /users/:id - Update one user
DELETE /users/:id - Delete one user

*/
require("dotenv").config();
const express = require("express");
let cors = require("cors");

const fs = require("fs");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const morgan = require("morgan");
const mongoose = require("mongoose");

/* Custom Error component to throw custom errors*/
const AppError = require("./AppError");

/* MongoDB Atlas Cloud */
mongoose
  .connect(
    // "mongodb+srv://admin:admin@cpsc455frensapp.kf2ad.mongodb.net/frensApp",
    "mongodb+srv://admin:admin@cpsc455frensapp.kf2ad.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false }
  )
  .then(() => {
    console.log("MONGO CONNECTION OPEN");
  })
  .catch((error) => {
    console.log("##### MONGO CONNECTION ERROR");
    console.log(error);
  });

const User = require("./models/user");
const Question = require("./models/question");

/* Get a server up and running */
const server = express();
const port = 5000;

/* MIDDLEWARE */
// .use is a way to run a function on every request
server.use(cors());
server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(morgan("dev"));

/* CUSTOM MIDDLEWARE */
server.use((req, res, next) => {
  req.requestTime = Date.now();
  console.log("####" + req.method, req.path);
  next();
});

/* ROUTES */
server.get("/", (req, res) => {
  res.send("Welcome to the home page!");
});

server.get("/users", (req, res) => {
  User.find()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
});

server.post("/users", (req, res) => {
  const newUser = new User({
    _id: new mongoose.Types.ObjectId(),
    username: "test1",
    firstName: "testFirst",
    lastName: "testLast",
    email: "test1@gmail.com",
    password: "test1",
    social: {
      facebook: "test1_facebook",
      instagram: "test1_instagram",
      photo:
        "https://pyxis.nymag.com/v1/imgs/47c/71a/130bf1e557e534b3f2be3351afc2ecf952-17-rachel-green-jewish.rsquare.w700.jpg",
    },
    interest: {},
  });
  newUser
    .save()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
});

server.get("/questions", (req, res) => {
  Question.find()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
});

server.post("/questions", (req, res) => {
  const newQuestion = new Question({
    _id: new mongoose.Types.ObjectId(),
    question: "New Question",
    choices: {
      numberOfChoice: 2,
      choice: ["True", "False"],
    },
  });
  newQuestion
    .save()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
});

server.post("/register", async (req, res) => {
  const { password, userName, email, interests } = req.body;

  const existingUser = await User.findOne({ userName });
  if (existingUser) {
    return res
      .status(404)
      .send("User name already exist. Please try a different one.");
  }

  const hash = await bcrypt.hash(password, 12);
  const user = await User({
    username: userName,
    email: email,
    password: hash,
    interests: interests,
  });

  const token = jwt.sign({ user }, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: "1h",
  });

  await user.save();
  res.redirect("/");
});

server.post("/login", async (req, res, next) => {
  const { email, password } = req.body;
  console.log(
    "%c [ req.body ]",
    "font-size:13px; background:pink; color:#bf2c9f;",
    req.body
  );

  try {
    console.log("begin try");
    const existingUser = await User.findOne({ email });
    console.log(
      "%c [ existingUser ]",
      "font-size:13px; background:pink; color:#bf2c9f;",
      existingUser
    );

    if (!existingUser) {
      return res.status(404).json({ message: ">>>>>>>>>>>User doesn't exist" });
    }

    const isPasswordCorrect = await bcrypt.compare(
      password,
      existingUser.password
    );

    if (!isPasswordCorrect) {
      console.log("wrong ps");
      return res
        .status(400)
        .send({ message: ">>>>>>>>>>>Invalid credentials" });
    }

    const token = jwt.sign({ existingUser }, process.env.ACCESS_TOKEN_SECRET, {
      expiresIn: "1h",
    });
    console.log(
      "%c [ token after login ]",
      "font-size:13px; background:pink; color:#bf2c9f;",
      token
    );

    return res.status(200).send({ token: token });
  } catch (err) {
    res.status(500).send(err.toString());
  }
});

/* Get login user info */
server.get("/posts", authenticateToken, async (req, res) => {
  const user = req.user.existingUser;

  res.send(user);
});

/* Middleware to authenticate the token */
function authenticateToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (token == null) return res.sendStatus(401);

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    console.log(err);
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
}

/* CUSTOM ERROR HANDLER MIDDLEWARE, RESPONDS TO THROWN AppErrors */
server.use((err, req, res, next) => {
  const { status = 500, message = "Error" } = err;
  res.status(status).send(message);
});

/* Server needs a port to listen on, locally. This runs when server starts up! */
server.listen(port, () => {
  // Call back function
  console.log("Listening on port 5000");
});
