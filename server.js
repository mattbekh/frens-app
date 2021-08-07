/* DEFINE ROUTES (CRUD)

GET /users - list all users
POST /users - Create a new user
GET /users/:id - Get one user (using unique identifier) 
PATCH /users/:id - Update one user
DELETE /users/:id - Delete one user

*/
require("dotenv").config();
const express = require("express");
const socketio = require("socket.io");
const http = require("http");
const cors = require("cors");
const path = require("path");

const fs = require("fs");
const fastcsv = require("fast-csv");
const OUTPUT_FILE_NAME = "data-output.csv";
const ws = fs.createWriteStream(OUTPUT_FILE_NAME);
const bcrypt = require("bcrypt");
const salt = "$2b$10$X4kv7j5ZcG39WgogSl16au"; //TODO make it secret if worked
const jwt = require("jsonwebtoken");
const { spawn } = require("child_process");

const morgan = require("morgan");
const mongoose = require("mongoose");

/* Custom Error component to throw custom errors*/
const AppError = require("./AppError");

const {
  addUser,
  removeUser,
  getUser,
  getUsersInRoom,
} = require("./chatUsers.js");

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

const port = process.env.PORT || 5000;

const app = express();
const server = http.createServer(app);
corsOptions = {
  cors: true,
  origins: ["http://localhost:3000"],
};
const io = socketio(server, corsOptions);

/* MIDDLEWARE */
// .use is a way to run a function on every request
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

/* CUSTOM MIDDLEWARE */
app.use((req, res, next) => {
  req.requestTime = Date.now();
  console.log("####" + req.method, req.path);
  next();
});

io.on("connection", (socket) => {
  console.log("######## New connection #########");
  console.log(socket.id);

  socket.on("join", ({ name, room }, callback) => {
    console.log("!!!!! FROM SERVER !!!!!");
    console.log(name, room);
    const { error, user } = addUser({ id: socket.id, name, room });

    // if(error) return callback(error);

    socket.join(user.room);

    //socket.emit('message', { user: "admin", text: `${user.name}, welcome to the room ${user.room}`});
    // socket.broadcast.to(user.room).emit('message', { user: "admin", text: `${user.name} has joined.`});

    //io.to(user.room).emit('roomData', { room: user.room, users: getUsersInRoom(user.room)})

    // callback();
  });

  socket.on("sendMessage", (message, callback) => {
    const user = getUser(socket.id);

    console.log("#### FROM SERVER : sendMessage");
    console.log(user, message);

    io.to(user.room).emit("message", { user: user.name, text: message });

    // Clears the input text field
    callback();
  });

  socket.on("disconnect", () => {
    const user = removeUser(socket.id);

    if (user) {
      io.to(user.room).emit("message", {
        user: "admin",
        text: `${user.name} has left.`,
      });
      //io.to(user.room).emit('roomData', { room: user.room, users: getUsersInRoom(user.room)});
    }
  });
});

/* ROUTES */
app.use(express.static(path.join(__dirname, "frens-web/build")));
app.use(express.static("public"));

/* Python Algorithm */
app.get("/python", (req, res) => {
  let largeDataSet = [];
  console.log(">>>>>>>>>>>>>>>>>>> inside calling python <<<<<<<<<<<<<<<<<<<");

  // current testing
  let rows = []; // this is the data matrix
  let header = ["username", "cooking", "music", "drawing", "workout"];
  rows.push(header);

  //get user data from mongoDB, create data matrix for .csv file
  User.find({}, function (err, data) {
    console.log(
      "%c [ data ]",
      "font-size:13px; background:pink; color:#bf2c9f;",
      data
    );
    data.forEach((user) => {
      rows.push([
        user.username,
        user.interests[0].cooking,
        user.interests[0].music,
        user.interests[0].drawing,
        user.interests[0].workout,
      ]);
    });

    console.log("***************** write into csv ***********************");
    fastcsv
      .write(rows, {
        headers: false,
      })
      .on("finish", function () {
        console.log("Writting Done !!!!!!!!!! ");
      })
      .pipe(ws);
  });

  const python = spawn("python", ["kmodes-script.py"]);

  // collect data from script
  python.stdout.on("data", function (data) {
    console.log("Pipe data from python script ...");
    largeDataSet.push(data);
  });
  // in close event we are sure that stream is from child process is closed
  python.on("close", (code) => {
    console.log(`child process close all stdio with code ${code}`);
    // send data to browser
    res.send(largeDataSet.toString());
  });

  // Takes stdout data from script which executed with arguments and send this data to res object
  process.stdout.on("data", function (data) {
    // res.send(data.toString());
  });
});

app.get("/suggest_list/:sameClusterUsername", (req, res) => {
  let filter = req.params.sameClusterUsername;
  console.log(
    "%c [ filter ]",
    "font-size:13px; background:pink; color:#bf2c9f;",
    filter
  );

  res.send("");
});

app.get("/", (req, res) => {
  res.send("Welcome to the home page!");
});

app.get("/users", (req, res) => {
  User.find()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
});

app.get("/users/:id", (req, res) => {
  console.log(req.params.id);
  if (req.params.id) {
    let id = req.params.id.toString();
    console.log(id);
    User.findById(id)
      .then((result) => {
        // console.log(result);
        res.send(result);
      })
      .catch((err) => {
        console.log(err);
      });
  }
});

app.put("/users/:id", (req, res) => {
  console.log(req.body.facebook);
  if (req.params.id) {
    let id = req.params.id.toString();
    console.log(id);
    User.findByIdAndUpdate(id, {
      email: req.body.facebook,
    })
      .then((result) => {
        // console.log(result);
        res.send(result);
      })
      .catch((err) => {
        console.log(err);
      });
  }
});

app.post("/users", (req, res) => {
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

app.get("/questions", (req, res) => {
  Question.find()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
});

app.post("/questions", (req, res) => {
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

app.post("/register", async (req, res) => {
  const { password, userName, email, interests } = req.body;

  const existingUser = await User.findOne({ userName });

  if (existingUser) {
    return res
      .status(404)
      .send("User name already exist. Please try a different one.");
  }
  const hash = await bcrypt.hash(password, salt);

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
  res.send({ token: token }).redirect("/");
});

app.post("/login", async (req, res, next) => {
  const { email, password } = req.body;

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

    return res.status(200).send({ token: token });
  } catch (err) {
    res.status(500).send(err.toString());
  }
});

/* Get login user info */
app.get("/posts", authenticateToken, async (req, res) => {
  const user = req.user;

  //user from sign in
  if (user?.existingUser) return res.send(user.existingUser);

  //user from register
  res.send(user.user);
});

/* Middleware to authenticate the token */
function authenticateToken(req, res, next) {
  const authHeader = req.headers["authorization"];

  const token = authHeader && authHeader.split(" ")[1];

  if (token === null) return res.sendStatus(401);

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    console.log(err);
    if (err) return res.sendStatus(403);
    req.user = user;

    next();
  });
}

/* CUSTOM ERROR HANDLER MIDDLEWARE, RESPONDS TO THROWN AppErrors */
app.use((err, req, res, next) => {
  const { status = 500, message = "Error" } = err;
  res.status(status).send(message);
});

/* Server needs a port to listen on, locally. This runs when server starts up! */
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/frens-web/build/index.html"));
});

server.listen(port, (err) => {
  if (err) return console.log(err);
  console.log(`Server started on port ${port}`);
});
