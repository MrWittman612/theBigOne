const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');
const path = require('path');
const GitHubStrategy = require('passport-github').Strategy;

const users = require('./routes/api/users');
const profile = require('./routes/api/profile');
const posts = require('./routes/api/posts');
const github = require('./routes/api/github');

const app = express();
// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const db = require('./config/keys').mongoURI;

mongoose
	.connect(db, { useNewUrlParser: true })
	.then(() => console.log('mongoDB is connected'))
	.catch(err => console.log(err));

app.use(passport.initialize());

require('./config/passport')(passport);

passport.use(
	new GitHubStrategy(
		{
			clientID: GITHUB_CLIENT_ID,
			clientSecret: GITHUB_CLIENT_SECRET,
			callbackURL: 'http://127.0.0.1:3000/auth/github/callback'
		},
		function(accessToken, refreshToken, profile, cb) {
			User.findOrCreate({ githubId: profile.id }, function(err, user) {
				return cb(err, user);
			});
		}
	)
);

app.use('/api/users', users);
app.use('/api/profile', profile);
app.use('/api/posts', posts);
app.use('/auth/github', github);

if (process.env.NODE_ENV === 'production') {
	// app.use('/static', express.static(path.join(__dirname, 'client/build')));
	app.use(express.static('client/build'));
	app.get('*', (req, res) => {
		res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
	});
}

const port = process.env.PORT || 9000;

app.listen(port, () => console.log(`we good to go on port ${port}`));
