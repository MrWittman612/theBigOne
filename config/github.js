const GitHubStrategy = require('passport-github').Strategy;
const mongoose = require('mongoose');
const User = mongoose.model('users');
const keys = require('../config/keys');

module.exports = passport => {
	passport.use(
		new GitHubStrategy(
			{
				clientID: keys.githubClientId,
				clientSecret: keys.githubClientSecret,
				callbackURL: 'http://127.0.0.1:9000/auth/github/callback'
			},
			function(accessToken, refreshToken, profile, cb) {
				User.findOrCreate({ githubId: profile.id }, function(
					accessToken,
					refreshToken,
					profile,
					cb
				) {
					console.log(accessToken);
					console.log(refreshToken);
					console.log(profile);
					return cb(null, profile);
				});
			}
		)
	);
};
