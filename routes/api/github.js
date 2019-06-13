const express = require("express");
const router = express.Router();
const passport = require('passport');

// const mongoose = require('mongoose');


router.get('/auth/github',
  passport.authenticate('github'));

router.get('/auth/github/callback',
  passport.authenticate('github', { failureRedirect: '/register' }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/dashboard');
  });

module.exports = router;
