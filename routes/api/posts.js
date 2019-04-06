const express = require("express");
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

router.get("/test", (req, res) => res.json({ msg: "posts works" }));

router.post('/', passport.authenticate('jwt', {session: false}), (req, req) => {
  consst newPost = new Post({
    text: req.body.text,
    name: req.body.name,
    avatar: req.body.avatar,
    user: req.body.user
  });
  newPost.save().then(post => res.json(post));
});

module.exports = router;
