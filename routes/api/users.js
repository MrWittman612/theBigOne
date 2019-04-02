const express = require("express");
const router = express.Router();
const gravatar = require("gravatar");
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');
const keys = require('../../config/keys');
const passport = require('passport');

const User = require("../../models/User");


// @route  GET api/users/test
// @desc   Tests users route
// @acsess Public

router.get("/test", (req, res) => res.json({
  msg: "users works"
}));

// @route   POST api/users/register
// @desc    Register user
// @access  Public
router.post("/register", (req, res) => {
  // const { errors, isValid } = validateRegisterInput(req.body);
  // res.json({ msg: "register works" });

  // // Check Validation
  // if (!isValid) {
  //   return res.status(400).json(errors);
  // }

  User.findOne({
    email: req.body.email
  }).then(user => {
    if (user) {
      errors.email = "Email already exists";
      return res.status(400).json(errors);
    } else {
      const avatar = gravatar.url(req.body.email, {
        s: "200", // Size
        r: "pg", // Rating
        d: "mm" // Default
      });

      let newUser = new User({
        name: req.body.name,
        email: req.body.email,
        avatar,
        password: req.body.password
      });

      // return res.json(body);

      bcrypt.genSalt(10, (err, salt) => {
        // console.log(newUser.password);
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          // if (err) {
          //   console.log(err);
          //   return;
          // }

          newUser.password = hash;
          newUser
            .save()
            .then(user => res.json(user))
            .catch(err => console.log(err));
        });
      });
    }
  });
});

// @route  POST api/users/login
// @desc   login users /  return jtw token
// @acsess Public

router.post('/login', (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  User.findOne({
      email
    })
    .then(user => {

      if (!user) {
        return res.status(404).json({
          email: 'user not found'
        });
      }


      bcrypt.compare(password, user.password)
        .then(isMatch => {
          if (isMatch) {

            const payload = {
              id: user.id,
              name: user.name,
              avatar: user.avatar
            }


            jwt.sign(payload, keys.secretOrKey, {
              expiresIn: 3600
            }, (err, token) => {
              res.json({
                success: true,
                token: 'Bearer ' + token
              });
            });
            // res.json({
            //   msg: 'Success'
            // });
          } else {
            return res.status(404).json({
              password: 'Password incorrect'
            });
          }
        });
    });
});

// // @route  POST api/users/current
// // @desc   return current User
// // @acsess Privite
//
// router.get('/current', passport.authenticate('jwt', {
//     session: false
//   }),
//   (req, res) => {
//     res.json({
//       msg: 'Success'
//     });
//   });

  // @route   GET api/users/current
// @desc    Return current user
// @access  Private
router.get(
  '/current',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    res.json({

        // msg: 'Success'

      id: req.user.id,
      name: req.user.name,
      email: req.user.email
    });
  }
);


module.exports = router;
