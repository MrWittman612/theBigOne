const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require('passport');

const users = require("./routes/api/users");
const profile = require("./routes/api/profile");
const posts = require("./routes/api/posts");

const app = express();
// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const db = require("./config/keys").mongoURI;

mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("mongoDB is connected"))
  .catch(err => console.log(err));

app.use(passport.initialize());

require('./config/passport')(passport);


app.use("/api/users", users);
app.use("/api/profile", profile);
app.use("/api/posts", posts);


const port = process.env.PORT || 9000;

app.listen(port, () => console.log(`we good to go on port ${port}`));
