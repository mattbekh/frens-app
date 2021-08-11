require("dotenv").config();
const express = require("express");
const socketio = require("socket.io");
const http = require("http");
const cors = require("cors");
const path = require('path');
const fs = require("fs");
const fastcsv = require("fast-csv");
const OUTPUT_FILE_NAME = "data-output.csv";
const bcrypt = require("bcrypt");
const salt = "$2b$10$X4kv7j5ZcG39WgogSl16au";
const jwt = require("jsonwebtoken");
const { spawn } = require("child_process");
const morgan = require("morgan");
const mongoose = require("mongoose");
const { addUser, removeUser, getUser, getUsersInRoom } = require("./chatUsers.js");

/* Custom Error component to throw custom errors*/
const AppError = require("./AppError");

mongoose
  .connect(
    "mongodb+srv://admin:admin@cpsc455frensapp.kf2ad.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false }
  )
  .then(() => {
  })
  .catch(() => {
    throw new AppError("Failed to connect to mongoose", 500);
  });

const User = require("./models/user");
const Question = require("./models/question");

const port = process.env.PORT || 5000;
const app = express();
const server = http.createServer(app);
corsOptions={
    cors: true,
    origins:["http://localhost:3000"],
}
const io = socketio(server, corsOptions);

/* MIDDLEWARE */
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

/* CUSTOM MIDDLEWARE */
app.use((req, res, next) => {
  req.requestTime = Date.now();
  next();
});

/* CHAT */
io.on('connection', (socket) => {
  socket.on('join', ({id, name, room}, callback) => {
      const { error, user } = addUser({ id, name, room });
      if(error) {
        throw new AppError(`Join socket was unsuccessful for name: ${name} room: ${room}`, 500)
      }
      socket.join(user.room);
      const users = getUsersInRoom(user.room);
      io.emit('clearMessages');
      socket.emit('message', { user: "admin", text: `${user.name}, welcome to the room.`});

      if( users.length  === 2) {
        socket.to(user.room).emit('message', { user: "admin", text: `${user.name} has joined the room. You can start your convo!`});
      } else {
        socket.emit('message', { user: "admin", text: `Please wait for other person to join.`});
        socket.to(user.room).emit('message', { user: "admin", text: `${user.name} has joined the room.`});
      }
      callback();
  });
  socket.on("sendMessage", ({id, message}, callback) => {
      const user = getUser(id);
      const users = getUsersInRoom(user.room);

      if( users.length  === 2) {
        io.to(user.room).emit("message", {user: user.name, text: message});
      } else {
      }
      callback();
  });
  socket.on('leave', ({id, room}) => {
      const user = removeUser(id, room);

      if(user) {
          io.emit('clearMessages');
          io.to(user.room).emit('message', { user: 'admin', text: `${user.name} has left the room. You can't send messages anymore.`});
      }
  })
});

/* ROUTES */
app.use(express.static(path.join(__dirname, "frens-web/build")));
app.use(express.static("public"));
app.get("/", (req, res) => {
  res.send("Welcome to the home page!");
});

/* PYTHON ALGORITHM*/
app.get("/python", (req, res) => {
  let largeDataSet = [];
  const ws = fs.createWriteStream(OUTPUT_FILE_NAME);
  let rows = []; // this is the data matrix
  let header = ["username", "cooking", "music", "drawing", "workout"];
  rows.push(header);
  //get user data from mongoDB, create data matrix for .csv file
  User.find({}, function (err, data) {
    data.forEach((user) => {
      rows.push([
        user.username,
        user.interests[0].cooking,
        user.interests[0].music,
        user.interests[0].drawing,
        user.interests[0].workout,
      ]);
    });
    fastcsv
      .write(rows, {
        headers: false,
      })
      .on("finish", function () {
      })
      .pipe(ws);
  });
  // spawn new child process to call the python script
  const python = spawn("python", ["kmodes-script.py"]);
  // collect data from script
  python.stdout.on("data", function (data) {
    largeDataSet.push(data);
  });
  // in close event we are sure that stream is from child process is closed
  python.on("close", (code) => {
    res.send(largeDataSet.join(""));
  });
  // Takes stdout data from script which executed with arguments and send this data to res object
  process.stdout.on("data", function (data) {
    res.send(data.toString());
  });
});

app.get("/suggest_list/:sameClusterUsername", (req, res) => {
  let filter = req.params.sameClusterUsername.split(",");

  User.find({ username: filter })
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      throw new AppError(`Could not get user cluster for suggested user display`, 500)
    });
});

app.get("/users", (req, res) => {
  User.find()
    .then((result) => {
      res.send(result);
    })
    .catch(() => {
      throw new AppError(`Could not GET /users`, 500)
    });
});


app.get("/users/:id", (req, res) => {
  if (req.params.id) {
    let id = req.params.id.toString();
    User.findById(id)
      .then((result) => {
        res.send(result);
      })
      .catch(() => {
        throw new AppError(`Could not GET /users/:id`, 500)
      });
  }
});

app.put("/users/:id", async (req, res) => {
  let id = req.params.id;
  let targetId = mongoose.Types.ObjectId(id);

  try {
    await User.collection.findOneAndUpdate(
      { _id: targetId },
      { $set: { social: req.body } }
    );
    let data = await User.find({ _id: targetId });

    res.send(data);
  } catch (err) {
    throw new AppError(`Could not PUT /users : ${err}`, 500)
  }

});

app.get("/questions", (req, res) => {
  Question.find()
    .then((result) => {
      res.send(result);
    })
    .catch(() => {
      throw new AppError(`Could not GET /questions`, 500)
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
    .catch(() => {
      throw new AppError(`Could not POST /questions`, 500)
    });
});

app.put("/updateQuestions/:id", async (req, res) => {
  let id = req.params.id;
  let targetId = mongoose.Types.ObjectId(id);
  let questionName = req.body;
  try {
    await User.collection.findOneAndUpdate(
      { _id: targetId },
      { $set: { questions: questionName } }
    );
    let data = await User.find({ _id: targetId });

    res.send(data);
  } catch (err) {
    throw new AppError(`Could not PUT /updateQuestions/:id : ${err}`, 500)
  }
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
    const existingUser = await User.findOne({ email });

    if (!existingUser) {
      return res.status(404).json({ message: "User doesn't exist" });
    }

    const isPasswordCorrect = await bcrypt.compare(
      password,
      existingUser.password
    );

    if (!isPasswordCorrect) {
      return res
        .status(400)
        .send({ message: "Invalid credentials" });
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
app.get("/loginUser/:token", async (req, res) => {
  const user = req.user;
  const token = req.params.token;
  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, async (err, user) => {
    if (err) return res.sendStatus(403);
    let id = user.existingUser._id;
    let targetId = mongoose.Types.ObjectId(id);

    try {
      let targetUser = await User.findOne({ _id: targetId });
      res.send(targetUser);
    } catch (err) {
      throw new AppError(`Could not GET /loginUser/:token : ${err}`, 500)
    }
  });
});

app.get("/posts", authenticateToken, async (req, res) => {
  const user = req.user;
  if (user?.existingUser) {
    let id = user.existingUser._id;
    let targetId = mongoose.Types.ObjectId(id);

    try {
      let targetUser = await User.findOne({ _id: targetId });
      res.send(targetUser);
    } catch (err) {
      throw new AppError(`Could not GET /posts : ${err}`, 500)
    }
  } else {
    res.send(user.user);
  }
});

/* Middleware to authenticate the token */
function authenticateToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (token === null) return res.sendStatus(401);

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
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

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/frens-web/build/index.html"));
});

server.listen(port, (err) => {
  if (err) {
    return new AppError(`Could not start on port : ${port} with error : ${err}`, 500)
  }
  console.log(`Server started on port ${port}`);
});
